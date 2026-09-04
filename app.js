/* Romatoloji Masası — uygulama mantığı. Hiçbir veri sunucuya gönderilmez. */
(function(){
"use strict";

const $ = (s, r=document) => r.querySelector(s);
const $$ = (s, r=document) => Array.from(r.querySelectorAll(s));
const fmt = (x, d=2) => (Math.round(x*Math.pow(10,d))/Math.pow(10,d)).toFixed(d).replace(".", ",");
const numv = (id) => { const v = parseFloat(String($("#"+id)?.value ?? "").replace(",", ".")); return isNaN(v) ? null : v; };

/* ---------- Hesaplayıcı kataloğu ---------- */
const CALCS = [
 {id:"das28", group:"Romatoid artrit", title:"DAS28", sub:"ESH veya CRP ile; SUT eşikleri işaretli"},
 {id:"cdai", group:"Romatoid artrit", title:"CDAI / SDAI", sub:"Hekim global ile basit indeksler"},
 {id:"basdai", group:"Spondiloartrit", title:"BASDAİ", sub:"6 soru; SUT eşiği >5 ve Δ≥2"},
 {id:"asdas", group:"Spondiloartrit", title:"ASDAS", sub:"CRP veya ESH ile"},
 {id:"psarc", group:"Spondiloartrit", title:"PsARC", sub:"Psöriatik artrit yanıt kriteri (SUT)"},
 {id:"sledai", group:"Bağ dokusu", title:"SLEDAI-2K", sub:"24 madde, son 10 gün"}
];

/* ---------- Ortak yardımcılar ---------- */
function bandHTML(zones, value, min, max, markers=[]){
 // zones: [{to, cls, label}] soldan sağa; markers: [{at, label}]
 const w = max - min;
 let x = min, segs = "", labs = "";
 zones.forEach(z => {
  const pct = ((z.to - x)/w)*100;
  segs += `<div class="z ${z.cls}" style="width:${pct}%"></div>`;
  labs += `<span class="lab" style="left:${((z.to-min)/w)*100}%">${z.to===max?"":fmt(z.to,1)}</span>`;
  x = z.to;
 });
 const mk = value==null ? "" : `<div class="mk" style="left:${Math.min(100,Math.max(0,((value-min)/w)*100))}%"></div>`;
 const sm = markers.map(m => `<div class="sm" data-l="${m.label}" style="left:${((m.at-min)/w)*100}%"></div>`).join("");
 return `<div class="band">${segs}${labs}${sm}${mk}</div>`;
}
function catFor(value, cuts){ // cuts: [{max, label, cls}]
 for (const c of cuts) if (value <= c.max) return c;
 return cuts[cuts.length-1];
}
function sutLine(ok, text){
 return `<div class="sutline ${ok===null?"no":""}"><b>SUT</b><span>${text}</span></div>`;
}
function deltaBox(label, value, ok, unit=""){
 return `<div>${label}<b class="${ok?"yes":"no"}">${value}${unit}</b></div>`;
}
function field(id, label, opts={}){
 const {min=0, max=100, step=1, hint="", value=""} = opts;
 return `<div class="field"><label for="${id}">${label}</label><input type="number" id="${id}" inputmode="decimal" min="${min}" max="${max}" step="${step}" value="${value}">${hint?`<div class="hint">${hint}</div>`:""}</div>`;
}
function slider(id, label, value=0){
 return `<div class="q"><div class="qt">${label}</div><div class="slider"><input type="range" id="${id}" min="0" max="10" step="0.5" value="${value}"><output for="${id}">${fmt(value,1)}</output></div></div>`;
}
function seg(id, options, current){
 return `<div class="seg" id="${id}">${options.map(o=>`<button type="button" data-v="${o.v}" aria-pressed="${o.v===current}">${o.l}</button>`).join("")}</div>`;
}

/* ---------- Hesaplayıcılar ---------- */
const calcViews = {
 das28(){
  let mode = "esr";
  const html = `
  <h1>DAS28 <small>Disease Activity Score, 28 eklem — ESH veya CRP tabanlı</small></h1>
  <p class="src">Prevoo 1995 (ESH); Fransen 2005 (CRP). Kesme noktaları: &lt;2,6 remisyon · ≤3,2 düşük · ≤5,1 orta · &gt;5,1 yüksek.</p>
  <div style="margin:10px 0 4px">${seg("das-mode",[{v:"esr",l:"ESH"},{v:"crp",l:"CRP"}],"esr")}</div>
  <div class="grid">
   ${field("tjc","Hassas eklem sayısı (0–28)",{max:28})}
   ${field("sjc","Şiş eklem sayısı (0–28)",{max:28})}
   <div id="lab-esr">${field("esr","ESH (mm/saat)",{max:200,min:1})}</div>
   <div id="lab-crp" hidden>${field("crp","CRP (mg/L)",{max:500,step:0.1,hint:"mg/dL ise ×10"})}</div>
   ${field("pga","Hasta global (VAS 0–100 mm)",{max:100})}
   ${field("das-base","Başlangıç DAS28 (isteğe bağlı)",{max:10,step:0.01,hint:"SUT için Δ hesaplar"})}
  </div>
  <div class="result" id="out"></div>`;
  return {html, init(root){
   const modeEl = $("#das-mode", root);
   modeEl.addEventListener("click", e=>{ const b=e.target.closest("button"); if(!b) return; mode=b.dataset.v; $$("button",modeEl).forEach(x=>x.setAttribute("aria-pressed",x===b)); $("#lab-esr",root).hidden = mode!=="esr"; $("#lab-crp",root).hidden = mode!=="crp"; calc(); });
   root.addEventListener("input", calc);
   function calc(){
    const tjc=numv("tjc"), sjc=numv("sjc"), pga=numv("pga"), esr=numv("esr"), crp=numv("crp"), base=numv("das-base");
    const out=$("#out",root);
    if(tjc==null||sjc==null||pga==null||(mode==="esr"?esr==null||esr<=0:crp==null)){ out.innerHTML=`<p style="color:var(--muted);margin:0">Tüm alanları doldurun.</p>`; return; }
    let das = 0.56*Math.sqrt(tjc)+0.28*Math.sqrt(sjc)+0.014*pga;
    das += mode==="esr" ? 0.70*Math.log(esr) : 0.36*Math.log(crp+1)+0.96;
    const cat = catFor(das,[{max:2.6-1e-9,label:"Remisyon",cls:"ok"},{max:3.2,label:"Düşük aktivite",cls:"ok"},{max:5.1,label:"Orta aktivite",cls:"mid"},{max:99,label:"Yüksek aktivite",cls:"warn"}]);
    let html = `<div class="big"><span class="val">${fmt(das)}</span><span class="cat ${cat.cls}">${cat.label}</span><span style="color:var(--muted);font-size:14px">DAS28-${mode==="esr"?"ESH":"CRP"}</span></div>`;
    html += bandHTML([{to:2.6,cls:"g"},{to:3.2,cls:"y"},{to:5.1,cls:"o"},{to:8,cls:"r"}], das, 0, 8, [{at:5.1,label:"SUT başlangıç >5,1"}]);
    html += sutLine(das>5.1, das>5.1 ? `DAS28 &gt; 5,1 — biyolojik/JAK <b>başlangıç eşiği karşılanıyor</b> (diğer koşullarla birlikte).` : `DAS28 ≤ 5,1 — SUT başlangıç eşiği karşılanmıyor.`);
    if(base!=null){
     const d = base-das;
     html += `<div class="delta">${deltaBox("Δ DAS28 (başlangıç − güncel)", fmt(d), d>0)}${deltaBox("3. ay: Δ > 0,6", d>0.6?"Karşılıyor":"Karşılamıyor", d>0.6)}${deltaBox("6. ay: toplam Δ > 1,2", d>1.2?"Karşılıyor":"Karşılamıyor", d>1.2)}${deltaBox("EULAR yanıtı", eular(base,das), eular(base,das)!=="Yanıtsız")}</div>`;
    }
    html += `<p class="stamp">Formül (ESH): 0,56√HES + 0,28√ŞES + 0,70·ln(ESH) + 0,014·HG · (CRP): 0,56√HES + 0,28√ŞES + 0,36·ln(CRP+1) + 0,014·HG + 0,96. Mod: ${mode==="esr"?"ESH":"CRP"}.</p>`;
    out.innerHTML=html;
   }
   function eular(b,c){ const d=b-c; if(d>1.2) return c<=3.2?"İyi yanıt":"Orta yanıt"; if(d>0.6) return c<=5.1?"Orta yanıt":"Yanıtsız"; return "Yanıtsız"; }
   calc();
  }};
 },
 cdai(){
  const html = `
  <h1>CDAI / SDAI <small>Klinik ve Basitleştirilmiş Hastalık Aktivite İndeksleri</small></h1>
  <p class="src">Smolen 2003 (SDAI), Aletaha 2005 (CDAI). CDAI: ≤2,8 remisyon · ≤10 düşük · ≤22 orta · &gt;22 yüksek. SDAI: ≤3,3 · ≤11 · ≤26 · &gt;26.</p>
  <div class="grid">
   ${field("c-tjc","Hassas eklem (0–28)",{max:28})}
   ${field("c-sjc","Şiş eklem (0–28)",{max:28})}
   ${field("c-pga","Hasta global (0–10 cm)",{max:10,step:0.1})}
   ${field("c-ega","Hekim global (0–10 cm)",{max:10,step:0.1})}
   ${field("c-crp","CRP (mg/dL) — SDAI için",{max:50,step:0.1,hint:"mg/L ise ÷10"})}
  </div>
  <div class="result" id="out"></div>`;
  return {html, init(root){
   root.addEventListener("input", calc);
   function calc(){
    const t=numv("c-tjc"), s=numv("c-sjc"), p=numv("c-pga"), e=numv("c-ega"), c=numv("c-crp");
    const out=$("#out",root);
    if([t,s,p,e].some(v=>v==null)){ out.innerHTML=`<p style="color:var(--muted);margin:0">Hassas/şiş eklem ve iki global değeri girin.</p>`; return; }
    const cdai=t+s+p+e;
    const cc=catFor(cdai,[{max:2.8,label:"Remisyon",cls:"ok"},{max:10,label:"Düşük",cls:"ok"},{max:22,label:"Orta",cls:"mid"},{max:999,label:"Yüksek",cls:"warn"}]);
    let html=`<div class="big"><span class="val">${fmt(cdai,1)}</span><span class="cat ${cc.cls}">CDAI — ${cc.label}</span></div>`;
    html+=bandHTML([{to:2.8,cls:"g"},{to:10,cls:"y"},{to:22,cls:"o"},{to:40,cls:"r"}],Math.min(cdai,40),0,40);
    if(c!=null){ const sdai=cdai+c; const sc=catFor(sdai,[{max:3.3,label:"Remisyon",cls:"ok"},{max:11,label:"Düşük",cls:"ok"},{max:26,label:"Orta",cls:"mid"},{max:999,label:"Yüksek",cls:"warn"}]);
     html+=`<div class="big" style="margin-top:8px"><span class="val">${fmt(sdai,1)}</span><span class="cat ${sc.cls}">SDAI — ${sc.label}</span></div>`+bandHTML([{to:3.3,cls:"g"},{to:11,cls:"y"},{to:26,cls:"o"},{to:45,cls:"r"}],Math.min(sdai,45),0,45); }
    html+=sutLine(null,"SUT raporlarında DAS28 istenir; CDAI/SDAI klinik takip içindir.");
    out.innerHTML=html;
   }
   calc();
  }};
 },
 basdai(){
  const qs=["Yorgunluk / bitkinlik düzeyi","Boyun, sırt veya kalça ağrısı","Boyun/sırt/kalça dışındaki eklemlerde ağrı veya şişlik","Dokunma veya basınçla hassas bölgelerden duyulan rahatsızlık","Sabah tutukluğunun şiddeti (uyandıktan sonra)","Sabah tutukluğunun süresi (0 = yok, 10 = ≥2 saat)"];
  const html=`
  <h1>BASDAİ <small>Bath Ankilozan Spondilit Hastalık Aktivite İndeksi</small></h1>
  <p class="src">Garrett 1994. Son bir hafta, 0–10. Skor = (S1+S2+S3+S4 + (S5+S6)/2) / 5. ≥4 aktif hastalık; SUT başlangıç eşiği &gt;5, yanıt Δ≥2.</p>
  ${qs.map((q,i)=>slider("b"+(i+1),`${i+1}. ${q}`)).join("")}
  <div class="grid">${field("b-base","Başlangıç BASDAİ (isteğe bağlı)",{max:10,step:0.01,hint:"SUT için Δ hesaplar"})}</div>
  <div class="result" id="out"></div>`;
  return {html, init(root){
   root.addEventListener("input", e=>{ if(e.target.type==="range") e.target.nextElementSibling.textContent=fmt(+e.target.value,1); calc(); });
   function calc(){
    const v=[1,2,3,4,5,6].map(i=>+$("#b"+i,root).value);
    const s=(v[0]+v[1]+v[2]+v[3]+(v[4]+v[5])/2)/5;
    const base=numv("b-base");
    const cat=catFor(s,[{max:4-1e-9,label:"İnaktif / düşük",cls:"ok"},{max:5,label:"Aktif",cls:"mid"},{max:10,label:"Aktif — SUT eşiği üstü",cls:"warn"}]);
    let html=`<div class="big"><span class="val">${fmt(s)}</span><span class="cat ${cat.cls}">${cat.label}</span></div>`;
    html+=bandHTML([{to:4,cls:"g"},{to:5,cls:"y"},{to:10,cls:"r"}],s,0,10,[{at:5,label:"SUT >5"}]);
    html+=sutLine(s>5, s>5?`BASDAİ &gt; 5 — anti-TNF/sekukinumab başlangıç eşiği <b>karşılanıyor</b> (NSAİİ koşulu + ESH&gt;28 / CRP↑ / MR ile birlikte).`:`BASDAİ ≤ 5 — SUT başlangıç eşiği karşılanmıyor.`);
    if(base!=null){ const d=base-s; html+=`<div class="delta">${deltaBox("Δ BASDAİ",fmt(d),d>0)}${deltaBox("SUT yanıt: Δ ≥ 2",d>=2?"Karşılıyor":"Karşılamıyor",d>=2)}${deltaBox("BASDAİ50 (≥%50 düşme)",base>0&&d/base>=0.5?"Evet":"Hayır",base>0&&d/base>=0.5)}</div>`; }
    $("#out",root).innerHTML=html;
   }
   calc();
  }};
 },
 asdas(){
  let mode="crp";
  const html=`
  <h1>ASDAS <small>Ankylosing Spondylitis Disease Activity Score</small></h1>
  <p class="src">Lukas 2009, van der Heijde 2009. Kesme: &lt;1,3 inaktif · &lt;2,1 düşük · ≤3,5 yüksek · &gt;3,5 çok yüksek. Klinik önemli düzelme Δ≥1,1; majör düzelme Δ≥2,0.</p>
  <div style="margin:10px 0 4px">${seg("as-mode",[{v:"crp",l:"CRP"},{v:"esr",l:"ESH"}],"crp")}</div>
  ${slider("a1","Sırt ağrısı (BASDAİ S2)")}
  ${slider("a2","Sabah tutukluğu süresi (BASDAİ S6)")}
  ${slider("a3","Hasta global değerlendirmesi (son hafta)")}
  ${slider("a4","Periferik ağrı / şişlik (BASDAİ S3)")}
  <div class="grid">
   <div id="al-crp">${field("a-crp","CRP (mg/L)",{max:500,step:0.1,hint:"<2 ise 2 olarak alınır"})}</div>
   <div id="al-esr" hidden>${field("a-esr","ESH (mm/saat)",{max:200})}</div>
   ${field("a-base","Başlangıç ASDAS (isteğe bağlı)",{max:10,step:0.01})}
  </div>
  <div class="result" id="out"></div>`;
  return {html, init(root){
   const m=$("#as-mode",root);
   m.addEventListener("click",e=>{const b=e.target.closest("button"); if(!b) return; mode=b.dataset.v; $$("button",m).forEach(x=>x.setAttribute("aria-pressed",x===b)); $("#al-crp",root).hidden=mode!=="crp"; $("#al-esr",root).hidden=mode!=="esr"; calc();});
   root.addEventListener("input",e=>{ if(e.target.type==="range") e.target.nextElementSibling.textContent=fmt(+e.target.value,1); calc(); });
   function calc(){
    const a=[1,2,3,4].map(i=>+$("#a"+i,root).value);
    let crp=numv("a-crp"), esr=numv("a-esr"), base=numv("a-base");
    const out=$("#out",root);
    if(mode==="crp"&&crp==null||mode==="esr"&&esr==null){ out.innerHTML=`<p style="color:var(--muted);margin:0">${mode==="crp"?"CRP":"ESH"} değerini girin.</p>`; return; }
    let s;
    if(mode==="crp"){ if(crp<2) crp=2; s=0.12*a[0]+0.06*a[1]+0.11*a[2]+0.07*a[3]+0.58*Math.log(crp+1); }
    else { s=0.08*a[0]+0.07*a[1]+0.11*a[2]+0.09*a[3]+0.29*Math.sqrt(esr); }
    const cat=catFor(s,[{max:1.3-1e-9,label:"İnaktif",cls:"ok"},{max:2.1-1e-9,label:"Düşük",cls:"ok"},{max:3.5,label:"Yüksek",cls:"mid"},{max:99,label:"Çok yüksek",cls:"warn"}]);
    let html=`<div class="big"><span class="val">${fmt(s)}</span><span class="cat ${cat.cls}">${cat.label}</span><span style="color:var(--muted);font-size:14px">ASDAS-${mode==="crp"?"CRP":"ESH"}</span></div>`;
    html+=bandHTML([{to:1.3,cls:"g"},{to:2.1,cls:"y"},{to:3.5,cls:"o"},{to:6,cls:"r"}],Math.min(s,6),0,6);
    if(base!=null){ const d=base-s; html+=`<div class="delta">${deltaBox("Δ ASDAS",fmt(d),d>0)}${deltaBox("Klinik önemli (Δ≥1,1)",d>=1.1?"Evet":"Hayır",d>=1.1)}${deltaBox("Majör düzelme (Δ≥2,0)",d>=2?"Evet":"Hayır",d>=2)}</div>`; }
    html+=sutLine(null,"SUT axSpA raporlarında BASDAİ istenir; ASDAS ASAS-EULAR takip önerisidir.");
    out.innerHTML=html;
   }
   calc();
  }};
 },
 psarc(){
  const html=`
  <h1>PsARC <small>Psoriatic Arthritis Response Criteria</small></h1>
  <p class="src">Clegg 1996. Yanıt: 4 ölçütten <b>≥2'sinde düzelme</b> (en az biri eklem sayısı) ve <b>hiçbirinde kötüleşme yok</b>. Eklem sayılarında düzelme ≥%30 azalma, kötüleşme ≥%30 artma; global skorlarda (1–5 Likert) düzelme ≥1 birim azalma, kötüleşme ≥1 birim artma.</p>
  <table><tr><th></th><th style="width:auto">Başlangıç</th><th style="width:auto">Güncel</th></tr>
  <tr><th>Hassas eklem (0–68)</th><td>${field("p-t0","",{max:68})}</td><td>${field("p-t1","",{max:68})}</td></tr>
  <tr><th>Şiş eklem (0–66)</th><td>${field("p-s0","",{max:66})}</td><td>${field("p-s1","",{max:66})}</td></tr>
  <tr><th>Hasta global (1–5)</th><td>${field("p-p0","",{min:1,max:5})}</td><td>${field("p-p1","",{min:1,max:5})}</td></tr>
  <tr><th>Hekim global (1–5)</th><td>${field("p-d0","",{min:1,max:5})}</td><td>${field("p-d1","",{min:1,max:5})}</td></tr>
  </table>
  <div class="result" id="out"></div>`;
  return {html, init(root){
   root.addEventListener("input",calc);
   function calc(){
    const g=k=>numv("p-"+k);
    const vals=["t0","t1","s0","s1","p0","p1","d0","d1"].map(g);
    const out=$("#out",root);
    if(vals.some(v=>v==null)){ out.innerHTML=`<p style="color:var(--muted);margin:0">Sekiz değeri de girin.</p>`; return; }
    const [t0,t1,s0,s1,p0,p1,d0,d1]=vals;
    const jr=(a,b)=>a===0?(b===0?"same":"worse"):(b<=a*0.7?"better":b>=a*1.3?"worse":"same");
    const gr=(a,b)=>b<=a-1?"better":b>=a+1?"worse":"same";
    const r={Hassas:jr(t0,t1),"Şiş":jr(s0,s1),"Hasta global":gr(p0,p1),"Hekim global":gr(d0,d1)};
    const better=Object.values(r).filter(x=>x==="better").length, worse=Object.values(r).some(x=>x==="worse");
    const jointBetter=r.Hassas==="better"||r["Şiş"]==="better";
    const resp=better>=2&&jointBetter&&!worse;
    let html=`<div class="big"><span class="val">${resp?"Yanıt var":"Yanıt yok"}</span><span class="cat ${resp?"ok":"warn"}">${better} ölçütte düzelme${worse?", kötüleşme var":""}</span></div>`;
    html+=`<div class="delta">${Object.entries(r).map(([k,v])=>`<div>${k}<b class="${v==="better"?"yes":v==="worse"?"no":""}">${v==="better"?"Düzeldi":v==="worse"?"Kötüleşti":"Değişmedi"}</b></div>`).join("")}</div>`;
    html+=sutLine(resp, resp?`PsARC yanıtı var — SUT'a göre tedaviye <b>devam edilebilir</b>.`:`PsARC yanıtı yok — SUT'a göre devamı ödenmez.`);
    out.innerHTML=html;
   }
   calc();
  }};
 },
 sledai(){
  const items=[
   [8,"Nöbet","Yeni başlangıç; metabolik, enfeksiyöz, ilaç nedenleri dışlanmış"],[8,"Psikoz","Gerçeği değerlendirme bozukluğu; üremi ve ilaç dışlanmış"],[8,"Organik beyin sendromu","Mental fonksiyonda dalgalanmalı bozulma"],[8,"Görme bozukluğu","Retinal değişiklikler (sitoid cisim, hemoraji, eksüda, optik nörit)"],[8,"Kranial sinir bozukluğu","Yeni motor veya duyusal kranial nöropati"],[8,"Lupus baş ağrısı","Şiddetli, dirençli; narkotiğe yanıtsız"],[8,"Serebrovasküler olay","Yeni; ateroskleroz dışlanmış"],[8,"Vaskülit","Ülserasyon, gangren, hassas parmak nodülleri, periungual infarkt, splinter hemoraji veya biyopsi/anjiyografi kanıtı"],
   [4,"Artrit","≥2 eklemde ağrı ve inflamasyon bulguları"],[4,"Miyozit","Proksimal kas ağrısı/güçsüzlüğü + CK/aldolaz yüksekliği veya EMG/biyopsi"],[4,"İdrar silendirleri","Hem-granüler veya eritrosit silendirleri"],[4,"Hematüri",">5 eritrosit/büyük büyütme alanı; taş, enfeksiyon dışlanmış"],[4,"Proteinüri",">0,5 g/24 saat"],[4,"Piyüri",">5 lökosit/büyük büyütme alanı; enfeksiyon dışlanmış"],
   [2,"Döküntü","İnflamatuvar tip döküntü"],[2,"Alopesi","Anormal, yaygın veya yamalı saç kaybı"],[2,"Mukozal ülser","Oral veya nazal ülserler"],[2,"Plörezi","Plöritik göğüs ağrısı + sürtünme sesi/efüzyon/plevral kalınlaşma"],[2,"Perikardit","Perikardiyal ağrı + sürtünme, efüzyon veya EKG/EKO kanıtı"],[2,"Düşük kompleman","C3, C4 veya CH50 laboratuvar alt sınırının altında"],[2,"Artmış DNA bağlanması","Anti-dsDNA laboratuvar normalinin üstünde"],
   [1,"Ateş",">38 °C; enfeksiyon dışlanmış"],[1,"Trombositopeni","<100.000/mm³; ilaç dışlanmış"],[1,"Lökopeni","<3000/mm³; ilaç dışlanmış"]];
  const html=`
  <h1>SLEDAI-2K <small>Systemic Lupus Erythematosus Disease Activity Index 2000</small></h1>
  <p class="src">Gladman 2002. Değerlendirme anında veya önceki 10 günde mevcut bulgular. 0–105. Kaba yorum: 0 yok · 1–5 hafif · 6–10 orta · 11–19 yüksek · ≥20 çok yüksek.</p>
  <div class="checks">${items.map((it,i)=>`<label class="chk"><input type="checkbox" data-pts="${it[0]}"><span>${it[1]}<span class="sub">${it[2]}</span></span><span class="pt">${it[0]}</span></label>`).join("")}</div>
  <div class="actions"><button class="btn" type="button" id="clr">Temizle</button></div>
  <div class="result" id="out"></div>`;
  return {html, init(root){
   root.addEventListener("change",calc);
   $("#clr",root).addEventListener("click",()=>{$$("input",root).forEach(i=>i.checked=false); calc();});
   function calc(){
    const s=$$("input:checked",root).reduce((a,i)=>a+ +i.dataset.pts,0);
    const cat=catFor(s,[{max:0,label:"Aktivite yok",cls:"ok"},{max:5,label:"Hafif aktivite",cls:"ok"},{max:10,label:"Orta aktivite",cls:"mid"},{max:19,label:"Yüksek aktivite",cls:"warn"},{max:105,label:"Çok yüksek aktivite",cls:"warn"}]);
    let html=`<div class="big"><span class="val">${s}</span><span class="cat ${cat.cls}">${cat.label}</span></div>`;
    html+=bandHTML([{to:1,cls:"g"},{to:6,cls:"g"},{to:11,cls:"y"},{to:20,cls:"o"},{to:40,cls:"r"}],Math.min(s,40),0,40);
    html+=`<p class="stamp">Alevlenme tanımları (SELENA-SLEDAI): hafif/orta ≥3 puan artış; ciddi &gt;12 puan artış.</p>`;
    $("#out",root).innerHTML=html;
   }
   calc();
  }};
 }
};

/* ---------- Sınıflama kriterleri: genel oluşturucu ---------- */
function renderGenericCriteria(c){
 let html=`<h1>${c.title} <small>${c.source} sınıflama kriterleri</small></h1>`;
 if(c.entry) html+=`<div class="note"><b>Giriş kriteri:</b> ${c.entry}</div>`;
 if(c.sufficient) html+=`<div class="note"><b>Yeterli kriter:</b> ${c.sufficient}</div>`;
 if(c.exclusions) html+=`<div class="note warn"><b>Dışlama:</b> ${c.exclusions.join(" · ")}</div>`;
 c.domains.forEach((d,di)=>{
  html+=`<div class="domain">${d.name}<span>${d.mode==="max"?"en yüksek puan":"toplanır"}</span></div><div class="checks">`;
  let items=d.items.slice();
  if(d.mode==="max"&&!items.some(i=>i.pts===0)) items.unshift({label:"Yok",pts:0,none:true});
  items.forEach((it,ii)=>{
   const type=d.mode==="max"?"radio":"checkbox";
   html+=`<label class="chk"><input type="${type}" name="d${di}" data-d="${di}" data-pts="${it.pts}" data-clin="${d.immun?0:1}" ${it.none||(d.mode==="max"&&it.pts===0&&ii===0)?"checked":""}><span>${it.label}</span><span class="pt">${it.pts>0?"+":""}${it.pts}</span></label>`;
  });
  html+=`</div>`;
 });
 html+=`<div class="actions"><button class="btn" type="button" id="clr">Temizle</button></div><div class="result" id="out"></div>`;
 if(c.note) html+=`<p class="note">${c.note}</p>`;
 return {html, init(root){
  root.addEventListener("change",calc);
  $("#clr",root).addEventListener("click",()=>{$$("input",root).forEach(i=>{i.checked=i.type==="radio"&&+i.dataset.pts===0&&i===$$(`input[name="${i.name}"]`,root)[0];}); calc();});
  function calc(){
   const sel=$$("input:checked",root);
   const s=sel.reduce((a,i)=>a+ +i.dataset.pts,0);
   const clin=sel.some(i=>i.dataset.clin==="1"&&+i.dataset.pts>0);
   let ok=s>=c.threshold; let extra="";
   if(c.requireClinical&&!clin){ ok=false; extra=" — en az bir klinik alan gerekir"; }
   $("#out",root).innerHTML=`<div class="big"><span class="val">${s}</span><span class="cat ${ok?"ok":"neutral"}">${ok?"Sınıflama kriterleri karşılanıyor":"Karşılanmıyor"} (eşik ≥ ${c.threshold})${extra}</span></div>`;
  }
  calc();
 }};
}

/* ---------- Özel kriterler ---------- */
const chk=(id,label,pts)=>`<label class="chk"><input type="checkbox" id="${id}"><span>${label}</span>${pts!=null?`<span class="pt">${pts>0?"+":""}${pts}</span>`:""}</label>`;
const customCriteria={
 asas(c){
  const feats=["İnflamatuvar bel ağrısı","Artrit","Entezit (topuk)","Üveit","Daktilit","Psöriazis","Crohn / ülseratif kolit","NSAİİ'ye iyi yanıt (24–48 saatte)","Ailede SpA öyküsü","Yüksek CRP"];
  const html=`<h1>${c.title} <small>${c.source} sınıflama kriterleri</small></h1>
  <div class="note"><b>Giriş kriteri:</b> ${c.entry}</div>
  <div class="domain">Görüntüleme ve HLA-B27</div><div class="checks">${chk("x-img","Görüntülemede sakroileit: MR'da aktif inflamasyon veya mNY'ye göre radyografik sakroileit")}${chk("x-b27","HLA-B27 pozitif")}</div>
  <div class="domain">SpA özellikleri</div><div class="checks">${feats.map((f,i)=>chk("f"+i,f)).join("")}</div>
  <div class="result" id="out"></div>
  <p class="note"><b>Periferik SpA (ASAS 2011):</b> artrit, entezit veya daktilit + şunlardan ≥1: üveit, psöriazis, İBH, öncül enfeksiyon, HLA-B27, görüntülemede sakroileit; ya da şunlardan ≥2: artrit, entezit, daktilit, geçmişte İBA, ailede SpA.</p>`;
  return {html, init(root){ root.addEventListener("change",calc); function calc(){
   const img=$("#x-img",root).checked, b27=$("#x-b27",root).checked;
   const n=feats.filter((f,i)=>$("#f"+i,root).checked).length + (b27?1:0);
   const imaging=img&&n>=1, clinical=b27&&(n-1)>=2;
   const ok=imaging||clinical;
   $("#out",root).innerHTML=`<div class="big"><span class="val">${ok?"Karşılanıyor":"Karşılanmıyor"}</span><span class="cat ${ok?"ok":"neutral"}">${imaging?"görüntüleme kolu":clinical?"klinik kol":""}</span></div><div class="delta"><div>Görüntüleme kolu<b class="${imaging?"yes":"no"}">sakroileit + ≥1 özellik${img?` (${n})`:""}</b></div><div>Klinik kol<b class="${clinical?"yes":"no"}">HLA-B27 + ≥2 diğer özellik${b27?` (${n-1})`:""}</b></div></div>`;
  } calc(); }};
 },
 pmr(c){
  const html=`<h1>${c.title} <small>${c.source} geçici sınıflama kriterleri</small></h1>
  <div class="note"><b>Zorunlu:</b> ${c.entry}</div>
  <div class="domain">Zorunlu koşullar</div><div class="checks">${chk("r1","Yaş ≥ 50")}${chk("r2","Bilateral omuz ağrısı")}${chk("r3","Anormal CRP ve/veya ESH")}</div>
  <div class="domain">Puanlanan maddeler</div><div class="checks">${chk("m1","Sabah tutukluğu > 45 dakika",2)}${chk("m2","Kalça ağrısı veya kısıtlı kalça hareketi",1)}${chk("m3","RF ve ACPA negatif",2)}${chk("m4","Başka eklem tutulumu yok",1)}</div>
  <div class="domain">Ultrasonografi (isteğe bağlı)</div><div class="checks">${chk("us","USG yapıldı")}${chk("u1","≥1 omuzda subdeltoid bursit / biseps tenosinoviti / glenohumeral sinovit VE ≥1 kalçada sinovit / trokanterik bursit",1)}${chk("u2","Her iki omuzda subdeltoid bursit, biseps tenosinoviti veya glenohumeral sinovit",1)}</div>
  <div class="result" id="out"></div>`;
  return {html, init(root){ root.addEventListener("change",calc); function calc(){
   const req=["r1","r2","r3"].every(i=>$("#"+i,root).checked);
   const us=$("#us",root).checked;
   let s=[["m1",2],["m2",1],["m3",2],["m4",1]].reduce((a,[i,p])=>a+($("#"+i,root).checked?p:0),0);
   if(us) s+=($("#u1",root).checked?1:0)+($("#u2",root).checked?1:0);
   const th=us?5:4; const ok=req&&s>=th;
   $("#out",root).innerHTML=`<div class="big"><span class="val">${s}</span><span class="cat ${ok?"ok":"neutral"}">${!req?"Zorunlu koşullar eksik":ok?"Karşılanıyor":"Karşılanmıyor"} (eşik ≥ ${th}${us?" USG ile":" USG'siz"})</span></div>`;
  } calc(); }};
 },
 still(c){
  const html=`<h1>${c.title} <small>${c.source} sınıflama kriterleri</small></h1>
  <div class="note warn"><b>Dışlama:</b> ${c.entry}</div>
  <div class="domain">Majör kriterler</div><div class="checks">${chk("M1","Ateş ≥ 39 °C, ≥ 1 hafta süren")}${chk("M2","Artralji ≥ 2 hafta")}${chk("M3","Tipik döküntü (somon renkli, makülopapüler, ateşle birlikte)")}${chk("M4","Lökositoz ≥ 10.000/mm³ ve ≥ %80 granülosit")}</div>
  <div class="domain">Minör kriterler</div><div class="checks">${chk("m1","Boğaz ağrısı")}${chk("m2","Lenfadenopati ve/veya splenomegali")}${chk("m3","Karaciğer fonksiyon bozukluğu")}${chk("m4","RF ve ANA negatif")}</div>
  <div class="result" id="out"></div>
  <p class="note">Toplam ≥ 5 kriter, bunların ≥ 2'si majör olmalı. Fautrel kriterleri alternatif: glikozile ferritin ≤ %20 dahil.</p>`;
  return {html, init(root){ root.addEventListener("change",calc); function calc(){
   const M=["M1","M2","M3","M4"].filter(i=>$("#"+i,root).checked).length, m=["m1","m2","m3","m4"].filter(i=>$("#"+i,root).checked).length;
   const ok=M>=2&&M+m>=5;
   $("#out",root).innerHTML=`<div class="big"><span class="val">${M+m}</span><span class="cat ${ok?"ok":"neutral"}">${ok?"Karşılanıyor":"Karşılanmıyor"} — ${M} majör, ${m} minör</span></div>`;
  } calc(); }};
 },
 fmf(c){
  const html=`<h1>${c.title} <small>${c.source} sınıflama kriterleri</small></h1>
  <h3>Eurofever/PRINTO 2019</h3>
  <div class="field"><label for="geno">MEFV genotipi</label><select id="geno"><option value="conf">Doğrulayıcı (bikallelik patojenik veya M694V tek allel dahil "confirmatory")</option><option value="non">Doğrulayıcı değil / tek allel belirsiz</option><option value="none">Test yok</option></select></div>
  <div class="domain">Klinik özellikler</div><div class="checks">${chk("e1","Atak süresi 1–3 gün")}${chk("e2","Artrit")}${chk("e3","Göğüs ağrısı")}${chk("e4","Karın ağrısı")}</div>
  <div class="result" id="out"></div>
  <h3>Livneh (Tel-Hashomer) 1997</h3>
  <p><b>Majör</b> (tipik ataklar: ≥3 aynı tip, ≥38 °C, 12–72 saat): peritonit (yaygın), plörit (tek taraflı) veya perikardit, monoartrit (kalça, diz, ayak bileği), yalnızca ateş. <b>Minör</b>: inkomplet ataklar (karın, göğüs, eklem), egzersizle bacak ağrısı, kolşisine olumlu yanıt. <b>Tanı:</b> ≥1 majör veya ≥2 minör (destekleyici kriterlerle 1 minör + 5 destekleyici de kabul edilir).</p>
  <div class="note sut">SUT anakinra/kanakinumab kriterleri için <a href="#/sut/fmf">FMF SUT sayfası</a>.</div>`;
  return {html, init(root){ root.addEventListener("change",calc); function calc(){
   const g=$("#geno",root).value; const n=["e1","e2","e3","e4"].filter(i=>$("#"+i,root).checked).length;
   const ok=g==="conf"?n>=1:n>=2;
   $("#out",root).innerHTML=`<div class="big"><span class="val">${ok?"Karşılanıyor":"Karşılanmıyor"}</span><span class="cat ${ok?"ok":"neutral"}">${g==="conf"?"doğrulayıcı genotip + ≥1 özellik":"doğrulayıcı genotip yok → ≥2 özellik"} (${n})</span></div>`;
  } calc(); }};
 },
 iim(c){
  const items=[["i1","Objektif simetrik, genellikle ilerleyici proksimal üst ekstremite güçsüzlüğü",0.7],["i2","Objektif simetrik, genellikle ilerleyici proksimal alt ekstremite güçsüzlüğü",0.8],["i3","Boyun fleksörleri ekstansörlerden göreceli olarak daha güçsüz",1.9],["i4","Bacaklarda proksimal kaslar distalden daha güçsüz",0.9],["i5","Heliotrop döküntü",3.1],["i6","Gottron papülleri",2.1],["i7","Gottron bulgusu",3.3],["i8","Disfaji veya özofagus dismotilitesi",0.7],["i9","Anti-Jo-1 pozitif",3.9],["i10","CK, LDH, AST veya ALT yüksekliği",1.3]];
  const bx=[["b1","Endomisyal mononükleer infiltrasyon (lifleri çevreleyen, invaze etmeyen)",1.7],["b2","Perimisyal ve/veya perivasküler mononükleer infiltrasyon",1.2],["b3","Perifasiküler atrofi",1.9],["b4","Kenarlı (rimmed) vakuoller",3.1]];
  const html=`<h1>${c.title} <small>${c.source} sınıflama kriterleri</small></h1>
  <div class="note"><b>Ön koşul:</b> ${c.entry}</div>
  <div class="domain">Semptom başlangıç yaşı<span>en yüksek puan</span></div><div class="checks">
   <label class="chk"><input type="radio" name="age" value="0" checked><span>&lt; 18</span><span class="pt">0</span></label>
   <label class="chk"><input type="radio" name="age" value="1.3"><span>18 – &lt; 40</span><span class="pt">+1,3</span></label>
   <label class="chk"><input type="radio" name="age" value="2.1"><span>≥ 40</span><span class="pt">+2,1</span></label></div>
  <div class="domain">Klinik ve laboratuvar</div><div class="checks">${items.map(i=>chk(i[0],i[1],i[2]).replace(/\+(\d)\.(\d)/,"+$1,$2")).join("")}</div>
  <div class="domain">Kas biyopsisi</div><div class="checks">${chk("bx","Kas biyopsisi yapıldı")}${bx.map(i=>chk(i[0],i[1],i[2]).replace(/\+(\d)\.(\d)/,"+$1,$2")).join("")}</div>
  <div class="result" id="out"></div>
  <p class="note">Eşikler — biyopsisiz: olası ≥ 5,5 · kesin ≥ 7,5. Biyopsili: olası ≥ 6,7 · kesin ≥ 8,7 (olasılık ≥ %55 / ≥ %90). Alt tip (DM, PM, İBM, ADM, JDM) sınıflama ağacı ile belirlenir.</p>`;
  return {html, init(root){ root.addEventListener("change",calc); function calc(){
   const bio=$("#bx",root).checked;
   let s=+$("input[name=age]:checked",root).value;
   items.forEach(i=>{ if($("#"+i[0],root).checked) s+=i[2]; });
   if(bio) bx.forEach(i=>{ if($("#"+i[0],root).checked) s+=i[2]; });
   const pr=bio?6.7:5.5, de=bio?8.7:7.5;
   const lvl=s>=de?["Kesin İİM","ok"]:s>=pr?["Olası İİM","ok"]:["Karşılanmıyor","neutral"];
   $("#out",root).innerHTML=`<div class="big"><span class="val">${fmt(s,1)}</span><span class="cat ${lvl[1]}">${lvl[0]} (${bio?"biyopsili":"biyopsisiz"}: olası ≥ ${fmt(pr,1)}, kesin ≥ ${fmt(de,1)})</span></div>`;
  } calc(); }};
 },
 igg4(c){
  const excl=["Ateş","Glukokortikoide yanıtsızlık","Açıklanamayan lökopeni / trombositopeni","Periferik eozinofili","ANCA (PR3 veya MPO) pozitif","Anti-SSA / anti-SSB pozitif","Anti-dsDNA, anti-RNP veya anti-Sm pozitif","Diğer hastalığa özgü otoantikor","Kriyoglobulinemi","Hızlı radyolojik ilerleme","Erdheim-Chester ile uyumlu uzun kemik bulguları","Splenomegali","Patolojide malignite düşündüren infiltrat","Patolojide inflamatuvar hastalık belirteçleri (ör. lenfoma, granülomatöz hastalık)","Belirgin nekrotizan vaskülit","Belirgin nekroz","Öncelikle granülomatöz inflamasyon","Histiyositik hastalık patolojisi","Multisentrik Castleman hastalığı","Crohn / ülseratif kolit (yalnızca pankreatobiliyer tutulumda)","Hashimoto tiroiditi (yalnızca tiroid tutulumunda)"];
  const dom=[
   ["Histopatoloji",[["Bilgi vermeyen biyopsi",0],["Yoğun lenfositik infiltrat",4],["Yoğun lenfositik infiltrat + obliteratif flebit",6],["Yoğun lenfositik infiltrat + storiform fibrozis (± obliteratif flebit)",13]]],
   ["İmmünhistokimya (IgG4+/IgG+ oranı ve IgG4+ hücre/BBA)",[["Oran 0–40 % veya belirsiz; ya da 0–9 hücre/BBA",0],["Oran 41–70 % ve 10–50 hücre/BBA",7],["Oran > 70 % ve 10–50 hücre/BBA",7],["Oran 41–70 % ve > 50 hücre/BBA",14],["Oran > 70 % ve > 50 hücre/BBA",16]]],
   ["Serum IgG4",[["Normal veya bakılmadı",0],["> ÜSN ama < 2× ÜSN",6],["2–5× ÜSN",11],["≥ 5× ÜSN",14]]],
   ["Bilateral lakrimal, parotis, sublingual ve submandibular bezler",[["Tutulum yok",0],["Bir bez seti",6],["İki veya daha fazla bez seti",14]]],
   ["Toraks",[["Bakılmadı / normal",0],["Peribronkovasküler ve septal kalınlaşma",4],["Paravertebral bant benzeri yumuşak doku",10]]],
   ["Pankreas ve safra yolları",[["Bakılmadı / normal",0],["Diffüz pankreas büyümesi (lobülasyon kaybı)",8],["Diffüz büyüme + kapsül benzeri hipoenhanse rim",11],["Pankreas (yukarıdakilerden biri) + safra yolu tutulumu",19]]],
   ["Böbrek",[["Bakılmadı / normal",0],["Hipokomplementemi",6],["Renal pelvis kalınlaşması / yumuşak doku",8],["Bilateral renal korteks düşük dansiteli alanlar",10]]],
   ["Retroperiton",[["Bakılmadı / normal",0],["Abdominal aort duvarında diffüz kalınlaşma",8],["İnfrarenal aort veya iliyak arterler çevresinde çevresel veya anterolateral yumuşak doku",13]]]];
  const html=`<h1>${c.title} <small>${c.source} sınıflama kriterleri</small></h1>
  <div class="note"><b>Giriş kriteri:</b> ${c.entry}</div>
  <details class="sut-drug"><summary>Dışlama kriterleri (biri bile varsa sınıflanamaz)</summary><div class="sut-body"><div class="checks">${excl.map((e,i)=>chk("ex"+i,e)).join("")}</div></div></details>
  ${dom.map((d,di)=>`<div class="domain">${d[0]}<span>en yüksek puan</span></div><div class="checks">${d[1].map((it,ii)=>`<label class="chk"><input type="radio" name="g${di}" value="${it[1]}" ${ii===0?"checked":""}><span>${it[0]}</span><span class="pt">${it[1]>0?"+":""}${it[1]}</span></label>`).join("")}</div>`).join("")}
  <div class="result" id="out"></div>
  <p class="note">Eşik ≥ 20. Her alandan yalnızca en yüksek puanlı madde alınır. Kriterler ağırlıklı olarak IgG4-İH'nin klinik araştırma sınıflaması içindir.</p>`;
  return {html, init(root){ root.addEventListener("change",calc); function calc(){
   const exn=excl.filter((e,i)=>$("#ex"+i,root).checked).length;
   let s=0; dom.forEach((d,di)=>{ s+= +$(`input[name=g${di}]:checked`,root).value; });
   const ok=exn===0&&s>=20;
   $("#out",root).innerHTML=`<div class="big"><span class="val">${s}</span><span class="cat ${ok?"ok":"neutral"}">${exn>0?`${exn} dışlama kriteri işaretli — sınıflanamaz`:ok?"Karşılanıyor":"Karşılanmıyor"} (eşik ≥ 20)</span></div>`;
  } calc(); }};
 }
};

/* ---------- Rapor şablonları ---------- */
const FILL_KEYS=[["ILAC","Etken madde","örn. adalimumab"],["S0","Başlangıç skoru","DAS28 / BASDAİ / CRP"],["S1","Güncel skor",""],["IGIF","İGİF seri no",""],["ONAY","Onay formu seri no",""],["TARIH","Tarih","gg.aa.yyyy"]];
const fillState={};
function applyFill(text){
 return text.replace(/\{(ILAC|S0|S1|IGIF|ONAY|TARIH)\}/g,(m,k)=>fillState[k]&&fillState[k].trim()?fillState[k].trim():"……");
}
function renderTemplates(t){
 let html=`<h1>${t.title}<small>${t.sub}</small></h1><p class="src">Kaynak: TRD-G Anti-Romatizmal İlaçlar Kılavuzu, Kasım 2025 — "rapora eklenmesi gereken ifade" örnekleri.</p>`;
 if(t.html){ html+=t.html+`<p class="stamp">${TPL_STAMP}</p>`; return {html}; }
 html+=`<div class="fill">${FILL_KEYS.map(([k,l,h])=>`<div class="field"><label for="f-${k}">${l}</label><input type="text" id="f-${k}" data-k="${k}" value="${(fillState[k]||"").replace(/"/g,"&quot;")}" placeholder="${h}"></div>`).join("")}</div>
 <p class="note">Doldurduğunuz alanlar tüm şablonlara "……" yerine işlenir; boş bırakılanlar "……" olarak kalır. Metin kutuları düzenlenebilir; köşeli parantez içindeki seçenekleri silin veya uyarlayın.</p>`;
 t.groups.forEach((g,gi)=>{
  html+=`<h2 class="grp">${g.name}</h2>`;
  g.items.forEach((it,ii)=>{
   html+=`<div class="tpl" data-g="${gi}" data-i="${ii}"><div class="tpl-h"><b>${it.t}</b><span class="dur">${it.dur}</span></div><textarea spellcheck="false">${applyFill(it.text)}</textarea><div class="tpl-f"><button type="button" class="btn primary cp">Kopyala</button><button type="button" class="btn rs">Sıfırla</button><span class="st"></span></div></div>`;
  });
 });
 html+=`<p class="stamp">${TPL_STAMP}</p>`;
 return {html, init(root){
  const tas=$$("textarea",root);
  const autosize=ta=>{ta.style.height="auto";ta.style.height=(ta.scrollHeight+4)+"px";};
  tas.forEach(autosize);
  root.addEventListener("input",e=>{
   if(e.target.dataset.k){ fillState[e.target.dataset.k]=e.target.value; $$(".tpl",root).forEach(box=>{ if(box.dataset.edited) return; const it=t.groups[+box.dataset.g].items[+box.dataset.i]; const ta=$("textarea",box); ta.value=applyFill(it.text); autosize(ta); }); }
   else if(e.target.tagName==="TEXTAREA"){ e.target.closest(".tpl").dataset.edited="1"; autosize(e.target); }
  });
  root.addEventListener("click",async e=>{
   const box=e.target.closest(".tpl"); if(!box) return;
   const ta=$("textarea",box), st=$(".st",box);
   if(e.target.classList.contains("cp")){
    try{ await navigator.clipboard.writeText(ta.value); }catch(_){ ta.select(); document.execCommand("copy"); }
    e.target.classList.add("copied"); e.target.textContent="Kopyalandı"; st.textContent=ta.value.length+" karakter";
    setTimeout(()=>{e.target.classList.remove("copied"); e.target.textContent="Kopyala";},1800);
   }
   if(e.target.classList.contains("rs")){ delete box.dataset.edited; const it=t.groups[+box.dataset.g].items[+box.dataset.i]; ta.value=applyFill(it.text); autosize(ta); st.textContent=""; }
  });
 }};
}

/* ---------- Yönlendirme ve çizim ---------- */
function parse(){
 const h=location.hash.replace(/^#\/?/,"");
 const [sec,id]=h.split("/");
 if(sec==="sut") return {sec, id: SUT.some(s=>s.id===id)?id:SUT[0].id};
 if(sec==="crit") return {sec, id: CRITERIA.some(s=>s.id===id)?id:CRITERIA[0].id};
 if(sec==="tpl") return {sec, id: TEMPLATES.some(s=>s.id===id)?id:TEMPLATES[0].id};
 return {sec:"calc", id: CALCS.some(s=>s.id===id)?id:CALCS[0].id};
}
function renderIndex(sec,id){
 const list = sec==="calc"?CALCS:sec==="sut"?SUT:sec==="tpl"?TEMPLATES:CRITERIA;
 const titles={calc:["Hesaplayıcılar","Skorlar SUT eşikleriyle birlikte gösterilir."],sut:["SUT rapor kriterleri","Biyolojik ve hedefe yönelik ajanlar, hastalığa göre."],crit:["Sınıflama kriterleri","ACR/EULAR ve ilgili kriter setleri, puanlanabilir."],tpl:["Rapor şablonları","Alanları doldurun, metni düzenleyip kopyalayın."]};
 let html=`<h2>${titles[sec][0]}</h2><p>${titles[sec][1]}</p><ul>`;
 let g=null;
 list.forEach(it=>{
  if(it.group&&it.group!==g){ g=it.group; html+=`<li class="group">${g}</li>`; }
  html+=`<li><a href="#/${sec}/${it.id}" class="${it.id===id?"on":""}">${it.title}</a></li>`;
 });
 $("#index").innerHTML=html+"</ul>"+`<svg class="flower" viewBox="0 0 120 150" aria-hidden="true" fill="none" stroke-linecap="round" stroke-linejoin="round">
<g stroke="#9F8BC4" stroke-width="1.4"><path d="M44 148V96"/><path d="M78 148V104"/><path d="M40 148c0-10-8-16-16-18"/><path d="M84 148c0-9 8-14 16-16"/></g>
<g stroke="#5B4185" stroke-width="1.5" fill="#EEE8F6"><path d="M44 96c-9 0-14-9-14-22 0 0 6 6 14 6s14-6 14-6c0 13-5 22-14 22z"/><path d="M78 104c-7 0-11-8-11-18 0 0 4.5 5 11 5s11-5 11-5c0 10-4 18-11 18z"/></g>
<g stroke="#5B4185" stroke-width="1.5"><path d="M30 74C25 66 25 54 27 52c2-1 8 8 13 20"/><path d="M58 74c5-8 5-20 3-22-2-1-8 8-13 20"/><path d="M44 80V56"/><path d="M67 91c-4-6-4-16-2-17 1.5-.5 6 6 9 15"/><path d="M89 91c4-6 4-16 2-17-1.5-.5-6 6-9 15"/><path d="M78 92V74"/></g>
<g stroke="#B8860B" stroke-width="1.4"><path d="M40 76c1-3 2.5-5 4-5s3 2 4 5"/><path d="M75 90c.8-2.5 2-4 3-4s2.2 1.5 3 4"/></g>
</svg>`;
 $$(".nav a").forEach(a=>{ if(a.dataset.sec===sec) a.setAttribute("aria-current","page"); else a.removeAttribute("aria-current"); });
 const on=$("#index a.on"); if(on&&window.innerWidth<860){ const ul=on.closest("ul"); ul.scrollLeft=on.offsetLeft-ul.clientWidth/2+on.offsetWidth/2; }
}
function render(){
 const {sec,id}=parse();
 renderIndex(sec,id);
 const main=$("#main"); main.innerHTML="";
 const card=document.createElement("section"); card.className="card"+(sec==="crit"?" crit":"");
 if(sec==="calc"){ const v=calcViews[id](); card.innerHTML=v.html; main.appendChild(card); v.init(card); }
 else if(sec==="sut"){ const s=SUT.find(x=>x.id===id); card.innerHTML=`<h1>${s.title}<small>${s.sub}</small></h1><p class="src">SUT 4.2.1.C — özet; hukuki metin değildir.</p>${s.html}<p class="stamp">${SUT_STAMP}</p>`; main.appendChild(card); }
 else if(sec==="tpl"){ const v=renderTemplates(TEMPLATES.find(x=>x.id===id)); card.innerHTML=v.html; main.appendChild(card); v.init&&v.init(card); }
 else { const c=CRITERIA.find(x=>x.id===id); const v=c.custom?customCriteria[c.custom](c):renderGenericCriteria(c); card.innerHTML=v.html; main.appendChild(card); v.init(card); }
 document.title=`${(sec==="calc"?CALCS:sec==="sut"?SUT:sec==="tpl"?TEMPLATES:CRITERIA).find(x=>x.id===id).title} — Romatoloji Masası`;
 window.scrollTo({top:0});
}
window.addEventListener("hashchange",render);
$("#foot-stamp").textContent=SUT_STAMP;
render();
})();
