/* Romatoloji Masası — uygulama mantığı. Hiçbir veri sunucuya gönderilmez. */
(function(){
"use strict";

const $ = (s, r=document) => r.querySelector(s);
const $$ = (s, r=document) => Array.from(r.querySelectorAll(s));
const fmt = (x, d=2) => (Math.round(x*Math.pow(10,d))/Math.pow(10,d)).toFixed(d).replace(".", ",");
const numv = (id) => { const v = parseFloat(String($("#"+id)?.value ?? "").replace(",", ".")); return isNaN(v) ? null : v; };

/* ---------- Hesaplayıcı kataloğu ---------- */
const CALCS = [
 {id:"ra", group:"Romatoid artrit", title:"RA tek sayfa", sub:"DAS28-ESH, DAS28-CRP, CDAI, SDAI birlikte"},
 {id:"das28", group:"Romatoid artrit", title:"DAS28", sub:"ESH veya CRP ile; SUT eşikleri işaretli"},
 {id:"cdai", group:"Romatoid artrit", title:"CDAI / SDAI", sub:"Hekim global ile basit indeksler"},
 {id:"haq", group:"Romatoid artrit", title:"HAQ-DI", sub:"Sağlık Değerlendirme Anketi — fonksiyonel kısıtlılık"},
 {id:"basdai", group:"Spondiloartrit", title:"BASDAİ", sub:"6 soru; SUT eşiği >5 ve Δ≥2"},
 {id:"asdas", group:"Spondiloartrit", title:"ASDAS", sub:"CRP veya ESH ile"},
 {id:"psarc", group:"Spondiloartrit", title:"PsARC", sub:"Psöriatik artrit yanıt kriteri (SUT)"},
 {id:"dapsa", group:"Spondiloartrit", title:"DAPSA", sub:"Psöriatik artritte hastalık aktivitesi"},
 {id:"sledai", group:"Bağ dokusu", title:"SLEDAI-2K", sub:"24 madde, son 10 gün"},
 {id:"essdai", group:"Bağ dokusu", title:"ESSDAI", sub:"Sjögren sendromu hastalık aktivitesi"},
 {id:"bvas", group:"Vaskülit", title:"BVAS v3", sub:"Birmingham vaskülit aktivite skoru"},
 {id:"itas", group:"Vaskülit", title:"ITAS2010", sub:"Takayasu arteriti aktivite skoru (ITAS-A ile)"},
 {id:"vdi", group:"Vaskülit", title:"VDI", sub:"Vaskülit hasar indeksi"}
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
 ra(){
  let vas = "cm", crpU = "mgL", sutSrc = "esr";
  const html = `
  <h1>RA tek sayfa <small>DAS28-ESH · DAS28-CRP · CDAI · SDAI — ortak parametrelerle</small></h1>
  <p class="src">Her skor, kendi parametreleri girildiği anda hesaplanır; eksik olanlar için neyin gerektiği gösterilir. Prevoo 1995, Fransen 2005, Smolen 2003, Aletaha 2005.</p>
  <div class="ra-opts">
   <div><span class="lbl">Global (VAS) ölçeği</span>${seg("ra-vas",[{v:"cm",l:"0–10 cm"},{v:"mm",l:"0–100 mm"}],"cm")}</div>
   <div><span class="lbl">CRP birimi</span>${seg("ra-crpu",[{v:"mgL",l:"mg/L"},{v:"mgdL",l:"mg/dL"}],"mgL")}</div>
  </div>
  <div class="grid">
   ${field("ra-tjc","Hassas eklem (0–28)",{max:28})}
   ${field("ra-sjc","Şiş eklem (0–28)",{max:28})}
   ${field("ra-pga","Hasta global",{max:100,step:0.1,hint:"Seçili ölçekte"})}
   ${field("ra-ega","Hekim global",{max:100,step:0.1,hint:"Yalnız CDAI/SDAI için"})}
   ${field("ra-esr","ESH (mm/saat)",{max:200,min:1,hint:"DAS28-ESH için"})}
   ${field("ra-crp","CRP",{max:500,step:0.01,hint:"DAS28-CRP ve SDAI için"})}
  </div>
  <h3>SUT değerlendirmesi (isteğe bağlı)</h3>
  <div class="grid">
   <div class="field"><label>SUT için esas alınan DAS28</label>${seg("ra-sut",[{v:"esr",l:"DAS28-ESH"},{v:"crp",l:"DAS28-CRP"}],"esr")}</div>
   ${field("ra-base","Başlangıç DAS28",{max:10,step:0.01,hint:"Δ ve EULAR yanıtı için"})}
  </div>
  <div class="actions"><button class="btn" type="button" id="ra-clr">Temizle</button></div>
  <div class="result" id="out"></div>`;
  return {html, init(root){
   const bindSeg = (id, set) => { const el=$("#"+id,root); el.addEventListener("click",e=>{ const b=e.target.closest("button"); if(!b) return; set(b.dataset.v); $$("button",el).forEach(x=>x.setAttribute("aria-pressed",x===b)); calc(); }); };
   bindSeg("ra-vas", v=>{ vas=v; });
   bindSeg("ra-crpu", v=>{ crpU=v; });
   bindSeg("ra-sut", v=>{ sutSrc=v; });
   root.addEventListener("input", calc);
   $("#ra-clr",root).addEventListener("click",()=>{ $$("input[type=number]",root).forEach(i=>i.value=""); calc(); });
   const need = arr => `<div class="miss">Gerekli: ${arr.join(", ")}</div>`;
   function tile(name, val, cat, bandZones, bandMax, missing){
    if(val==null) return `<div class="ra-tile empty"><div class="nm">${name}</div><div class="v">—</div>${need(missing)}</div>`;
    return `<div class="ra-tile"><div class="nm">${name}</div><div class="v">${fmt(val, name.startsWith("DAS")?2:1)}</div><div class="cat ${cat.cls}">${cat.label}</div>${bandHTML(bandZones, Math.min(val,bandMax), 0, bandMax)}</div>`;
   }
   function calc(){
    const tjc=numv("ra-tjc"), sjc=numv("ra-sjc"), pgaIn=numv("ra-pga"), egaIn=numv("ra-ega"), esr=numv("ra-esr"), crpIn=numv("ra-crp"), base=numv("ra-base");
    const pgaMm = pgaIn==null?null:(vas==="cm"?pgaIn*10:pgaIn);
    const pgaCm = pgaIn==null?null:(vas==="cm"?pgaIn:pgaIn/10);
    const egaCm = egaIn==null?null:(vas==="cm"?egaIn:egaIn/10);
    const crpMgL = crpIn==null?null:(crpU==="mgL"?crpIn:crpIn*10);
    const crpMgdL = crpIn==null?null:(crpU==="mgL"?crpIn/10:crpIn);
    const out=$("#out",root);
    // uyarılar
    const warns=[];
    if(tjc!=null&&(tjc<0||tjc>28)) warns.push("Hassas eklem 0–28 olmalı.");
    if(sjc!=null&&(sjc<0||sjc>28)) warns.push("Şiş eklem 0–28 olmalı.");
    const vmax = vas==="cm"?10:100;
    if(pgaIn!=null&&(pgaIn<0||pgaIn>vmax)) warns.push(`Hasta global seçili ölçekte 0–${vmax} olmalı.`);
    if(egaIn!=null&&(egaIn<0||egaIn>vmax)) warns.push(`Hekim global seçili ölçekte 0–${vmax} olmalı.`);
    // ortak eksikler
    const core = []; if(tjc==null) core.push("hassas eklem"); if(sjc==null) core.push("şiş eklem"); if(pgaIn==null) core.push("hasta global");
    const dasCut=[{max:2.6-1e-9,label:"Remisyon",cls:"ok"},{max:3.2,label:"Düşük aktivite",cls:"ok"},{max:5.1,label:"Orta aktivite",cls:"mid"},{max:99,label:"Yüksek aktivite",cls:"warn"}];
    const dasBand=[{to:2.6,cls:"g"},{to:3.2,cls:"y"},{to:5.1,cls:"o"},{to:8,cls:"r"}];
    let dEsr=null, dCrp=null, cdai=null, sdai=null;
    const okCore = core.length===0;
    if(okCore && esr!=null && esr>0) dEsr = 0.56*Math.sqrt(tjc)+0.28*Math.sqrt(sjc)+0.70*Math.log(esr)+0.014*pgaMm;
    if(okCore && crpMgL!=null && crpMgL>=0) dCrp = 0.56*Math.sqrt(tjc)+0.28*Math.sqrt(sjc)+0.36*Math.log(crpMgL+1)+0.014*pgaMm+0.96;
    if(okCore && egaCm!=null) cdai = tjc+sjc+pgaCm+egaCm;
    if(cdai!=null && crpMgdL!=null) sdai = cdai+crpMgdL;
    let html = warns.length?`<div class="sutline"><b>!</b><span>${warns.join(" ")}</span></div>`:"";
    html += `<div class="ra-grid">`;
    html += tile("DAS28-ESH", dEsr, dEsr!=null&&catFor(dEsr,dasCut), dasBand, 8, [...core, ...(esr==null||esr<=0?["ESH"]:[])]);
    html += tile("DAS28-CRP", dCrp, dCrp!=null&&catFor(dCrp,dasCut), dasBand, 8, [...core, ...(crpIn==null?["CRP"]:[])]);
    html += tile("CDAI", cdai, cdai!=null&&catFor(cdai,[{max:2.8,label:"Remisyon",cls:"ok"},{max:10,label:"Düşük aktivite",cls:"ok"},{max:22,label:"Orta aktivite",cls:"mid"},{max:999,label:"Yüksek aktivite",cls:"warn"}]), [{to:2.8,cls:"g"},{to:10,cls:"y"},{to:22,cls:"o"},{to:40,cls:"r"}], 40, [...core, ...(egaIn==null?["hekim global"]:[])]);
    html += tile("SDAI", sdai, sdai!=null&&catFor(sdai,[{max:3.3,label:"Remisyon",cls:"ok"},{max:11,label:"Düşük aktivite",cls:"ok"},{max:26,label:"Orta aktivite",cls:"mid"},{max:999,label:"Yüksek aktivite",cls:"warn"}]), [{to:3.3,cls:"g"},{to:11,cls:"y"},{to:26,cls:"o"},{to:45,cls:"r"}], 45, [...core, ...(egaIn==null?["hekim global"]:[]), ...(crpIn==null?["CRP"]:[])]);
    html += `</div>`;
    // SUT
    const das = sutSrc==="esr"?dEsr:dCrp, lab = sutSrc==="esr"?"DAS28-ESH":"DAS28-CRP";
    if(das!=null){
     html += sutLine(das>5.1, das>5.1 ? `${lab} ${fmt(das)} &gt; 5,1 — biyolojik/JAK <b>başlangıç eşiği karşılanıyor</b> (diğer koşullarla birlikte).` : `${lab} ${fmt(das)} ≤ 5,1 — SUT başlangıç eşiği karşılanmıyor.`);
     if(base!=null){
      const d = base-das;
      html += `<div class="delta">${deltaBox(`Δ ${lab} (başlangıç − güncel)`, fmt(d), d>0)}${deltaBox("3. ay: Δ > 0,6", d>0.6?"Karşılıyor":"Karşılamıyor", d>0.6)}${deltaBox("6. ay: toplam Δ > 1,2", d>1.2?"Karşılıyor":"Karşılamıyor", d>1.2)}${deltaBox("EULAR yanıtı", eular(base,das), eular(base,das)!=="Yanıtsız")}</div>`;
     }
    } else {
     html += sutLine(null, `SUT değerlendirmesi için ${lab} hesaplanabilmeli. CDAI/SDAI klinik takip içindir.`);
    }
    html += `<p class="stamp">Kesme noktaları — DAS28: &lt;2,6 · ≤3,2 · ≤5,1 · &gt;5,1. CDAI: ≤2,8 · ≤10 · ≤22 · &gt;22. SDAI: ≤3,3 · ≤11 · ≤26 · &gt;26. DAS28'de hasta global mm, CRP mg/L; CDAI/SDAI'de globaller cm, CRP mg/dL olarak alınır (dönüşüm otomatik).</p>`;
    out.innerHTML = html;
   }
   function eular(b,c){ const d=b-c; if(d>1.2) return c<=3.2?"İyi yanıt":"Orta yanıt"; if(d>0.6) return c<=5.1?"Orta yanıt":"Yanıtsız"; return "Yanıtsız"; }
   calc();
  }};
 },
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
 haq(){
  const CATS=[
   ["Giyinme ve kişisel bakım",["Ayakkabı bağcığını bağlama ve düğme ilikleme dahil kendi kendinize giyinebiliyor musunuz?","Saçınızı yıkayabiliyor musunuz?"],"Düğme/fermuar yardımcısı, uzun saplı ayakkabı çekeceği vb."],
   ["Kalkma",["Kolları olmayan düz bir sandalyeden kalkabiliyor musunuz?","Yatağa yatıp kalkabiliyor musunuz?"],"Yükseltilmiş veya özel sandalye"],
   ["Yemek yeme",["Etinizi kesebiliyor musunuz?","Dolu bir bardak veya fincanı ağzınıza götürebiliyor musunuz?","Yeni (açılmamış) bir süt kutusunu açabiliyor musunuz?"],"Kalın saplı veya özel çatal-bıçak"],
   ["Yürüme",["Dışarıda düz zeminde yürüyebiliyor musunuz?","Beş basamak merdiven çıkabiliyor musunuz?"],"Baston, yürüteç, koltuk değneği, tekerlekli sandalye"],
   ["Hijyen",["Tüm vücudunuzu yıkayıp kurulayabiliyor musunuz?","Küvette banyo yapabiliyor musunuz?","Tuvalete oturup kalkabiliyor musunuz?"],"Yükseltilmiş klozet, banyo taburesi, tutunma barı, uzun saplı banyo aletleri"],
   ["Uzanma",["Başınızın üzerindeki bir raftan 2 kg'lık bir nesneyi (ör. bir paket şeker) alıp indirebiliyor musunuz?","Yerden bir giysiyi almak için eğilebiliyor musunuz?"],"Uzun saplı uzanma aletleri"],
   ["Kavrama",["Araba kapısını açabiliyor musunuz?","Daha önce açılmış kavanozları açabiliyor musunuz?","Musluğu açıp kapatabiliyor musunuz?"],"Kavanoz açacağı"],
   ["Günlük aktiviteler",["Alışverişe gidip ayak işlerinizi yapabiliyor musunuz?","Arabaya binip inebiliyor musunuz?","Elektrik süpürgesi kullanma veya bahçe işleri gibi ev işlerini yapabiliyor musunuz?"],""]
  ];
  const OPTS=[{v:"0",l:"0"},{v:"1",l:"1"},{v:"2",l:"2"},{v:"3",l:"3"}];
  let q=0;
  const html = `
  <h1>HAQ-DI <small>Health Assessment Questionnaire — Disability Index</small></h1>
  <p class="src">Fries 1980; Bruce &amp; Fries 2003. Son 1 haftaya göre yanıtlanır. 8 kategori, 20 soru; kategori puanı içindeki en yüksek madde puanıdır. Yardımcı araç veya başka birinin yardımı gerekiyorsa kategori puanı en az 2 alınır. HAQ-DI = kategori puanları toplamı ÷ yanıtlanan kategori sayısı (en az 6 kategori gerekli).</p>
  <div class="haq-legend"><span><b>0</b> Zorlanmadan</span><span><b>1</b> Biraz zorlanarak</span><span><b>2</b> Çok zorlanarak</span><span><b>3</b> Yapamıyorum</span></div>
  ${CATS.map((c,ci)=>`<div class="haq-cat"><h3>${ci+1}. ${c[0]}</h3>
   ${c[1].map(t=>{ const id="haq-"+(q++); return `<div class="haq-row"><span class="haq-q">${t}</span>${seg(id,OPTS,null)}</div>`; }).join("")}
   <label class="chk haq-aid"><input type="checkbox" id="haq-aid-${ci}"><span>Bu alanda yardımcı araç veya başka birinin yardımı gerekiyor${c[2]?` <span class="hint">(${c[2]})</span>`:""}</span></label>
  </div>`).join("")}
  <div class="grid">${field("haq-base","Önceki HAQ-DI (isteğe bağlı)",{max:3,step:0.125,hint:"Değişimi ve MCID'yi gösterir"})}</div>
  <div class="actions"><button class="btn" type="button" id="haq-clr">Temizle</button></div>
  <div class="result sticky" id="out"></div>
  <div id="out2"></div>`;
  return {html, init(root){
   const ans={};
   root.addEventListener("click", e=>{
    const b=e.target.closest(".seg button"); if(!b) return;
    const sg=b.parentElement, cur=ans[sg.id];
    if(cur===+b.dataset.v){ delete ans[sg.id]; b.setAttribute("aria-pressed","false"); }
    else { ans[sg.id]=+b.dataset.v; $$("button",sg).forEach(x=>x.setAttribute("aria-pressed",x===b)); }
    calc();
   });
   root.addEventListener("change", calc);
   root.addEventListener("input", calc);
   $("#haq-clr",root).addEventListener("click",()=>{ Object.keys(ans).forEach(k=>delete ans[k]); $$(".seg button",root).forEach(x=>x.setAttribute("aria-pressed","false")); $$("input[type=checkbox]",root).forEach(i=>i.checked=false); $("#haq-base",root).value=""; calc(); });
   function calc(){
    let k=0, sum=0, n=0, answered=0; const rows=[];
    CATS.forEach((c,ci)=>{
     const vals=c[1].map(()=>ans["haq-"+(k++)]).filter(v=>v!=null);
     answered+=vals.length;
     const aid=$("#haq-aid-"+ci,root).checked;
     if(!vals.length){ rows.push([c[0],null,aid]); return; }
     let sc=Math.max(...vals); const raised = aid && sc<2; if(raised) sc=2;
     sum+=sc; n++; rows.push([c[0],sc,raised]);
    });
    const out=$("#out",root), out2=$("#out2",root);
    if(n<6){ out2.innerHTML=""; out.innerHTML=`<p style="color:var(--muted);margin:0">${n} / 8 kategori yanıtlandı (${answered} / 20 soru). Puan için en az 6 kategoride en az bir soru yanıtlanmalı.</p>`; return; }
    const haq=sum/n;
    const cat=catFor(haq,[{max:1,label:"Hafif–orta kısıtlılık",cls:"ok"},{max:2,label:"Orta–ağır kısıtlılık",cls:"mid"},{max:3,label:"Ağır–çok ağır kısıtlılık",cls:"warn"}]);
    let html=`<div class="big"><span class="val">${fmt(haq,3)}</span><span class="cat ${cat.cls}">${cat.label}</span><span style="color:var(--muted);font-size:14px">${n} kategori</span></div>`;
    html+=bandHTML([{to:1,cls:"g"},{to:2,cls:"o"},{to:3,cls:"r"}],haq,0,3);
    out.innerHTML=html; html="";
    html+=`<div class="delta haq-cats">${rows.map(r=>`<div>${r[0]}<b class="${r[1]==null?"":r[1]>=2?"no":"yes"}">${r[1]==null?"—":r[1]}${r[2]?` <span style="font-size:12px;font-weight:400;color:var(--muted)">(yardım ile 2)</span>`:""}</b></div>`).join("")}</div>`;
    const base=numv("haq-base");
    if(base!=null){ const d=base-haq; const ok=d>=0.22;
     html+=`<div class="delta">${deltaBox("Δ HAQ-DI (önceki − güncel)", (d>0?"+":"")+fmt(d,3), d>0)}${deltaBox("Klinik anlamlı iyileşme (MCID ≥ 0,22)", ok?"Var":"Yok", ok)}</div>`; }
    html+=`<p class="stamp">Yorum (Bruce &amp; Fries): 0–1 hafif–orta, 1–2 orta–ağır, 2–3 ağır–çok ağır kısıtlılık. RA'da MCID 0,22. Puan 0,125'lik basamaklarla değişir; 8 kategori yanıtlandığında ondalık 3 hane gösterilir.</p>`;
    out2.innerHTML=`<div class="result">${html}</div>`;
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
 dapsa(){
  let crpU="mgL";
  const html = `
  <h1>DAPSA <small>Disease Activity in Psoriatic Arthritis</small></h1>
  <p class="src">Schoels 2010, 2016. DAPSA = hassas eklem (68) + şiş eklem (66) + hasta global (0–10) + ağrı (0–10) + CRP (mg/dL). Remisyon ≤ 4 · düşük ≤ 14 · orta ≤ 28 · yüksek &gt; 28.</p>
  <div class="ra-opts"><div><span class="lbl">CRP birimi</span>${seg("dp-crpu",[{v:"mgL",l:"mg/L"},{v:"mgdL",l:"mg/dL"}],"mgL")}</div></div>
  <div class="grid">
   ${field("dp-tjc","Hassas eklem (0–68)",{max:68})}
   ${field("dp-sjc","Şiş eklem (0–66)",{max:66})}
   ${field("dp-pga","Hasta global (0–10)",{max:10,step:0.1,hint:"Son 1 haftada hastalık etkisi"})}
   ${field("dp-pain","Ağrı (0–10)",{max:10,step:0.1,hint:"Son 1 haftada eklem ağrısı"})}
   ${field("dp-crp","CRP",{max:500,step:0.01,hint:"Seçili birimde"})}
   ${field("dp-base","Başlangıç DAPSA (isteğe bağlı)",{max:200,step:0.1,hint:"Yanıtı (DAPSA50/75/85) hesaplar"})}
  </div>
  <div class="actions"><button class="btn" type="button" id="dp-clr">Temizle</button></div>
  <div class="result" id="out"></div>`;
  return {html, init(root){
   const el=$("#dp-crpu",root);
   el.addEventListener("click",e=>{ const b=e.target.closest("button"); if(!b) return; crpU=b.dataset.v; $$("button",el).forEach(x=>x.setAttribute("aria-pressed",x===b)); calc(); });
   root.addEventListener("input",calc);
   $("#dp-clr",root).addEventListener("click",()=>{ $$("input[type=number]",root).forEach(i=>i.value=""); calc(); });
   function calc(){
    const t=numv("dp-tjc"), s=numv("dp-sjc"), g=numv("dp-pga"), p=numv("dp-pain"), c=numv("dp-crp"), base=numv("dp-base");
    const out=$("#out",root);
    const miss=[]; if(t==null) miss.push("hassas eklem"); if(s==null) miss.push("şiş eklem"); if(g==null) miss.push("hasta global"); if(p==null) miss.push("ağrı"); if(c==null) miss.push("CRP");
    if(miss.length){ out.innerHTML=`<p style="color:var(--muted);margin:0">Eksik: ${miss.join(", ")}.</p>`; return; }
    const warns=[]; if(t>68) warns.push("Hassas eklem 0–68 olmalı."); if(s>66) warns.push("Şiş eklem 0–66 olmalı."); if(g>10||p>10) warns.push("Global ve ağrı 0–10 olmalı.");
    const crp = crpU==="mgL" ? c/10 : c;
    const d = t+s+g+p+crp;
    const cat=catFor(d,[{max:4,label:"Remisyon",cls:"ok"},{max:14,label:"Düşük aktivite",cls:"ok"},{max:28,label:"Orta aktivite",cls:"mid"},{max:1e9,label:"Yüksek aktivite",cls:"warn"}]);
    let html = warns.length?`<div class="sutline"><b>!</b><span>${warns.join(" ")}</span></div>`:"";
    html += `<div class="big"><span class="val">${fmt(d,1)}</span><span class="cat ${cat.cls}">${cat.label}</span></div>`;
    html += bandHTML([{to:4,cls:"g"},{to:14,cls:"y"},{to:28,cls:"o"},{to:50,cls:"r"}],Math.min(d,50),0,50);
    if(base!=null && base>0){
     const pct=(base-d)/base*100;
     const r = pct>=85?"Majör yanıt (DAPSA85)":pct>=75?"Orta yanıt (DAPSA75)":pct>=50?"Minör yanıt (DAPSA50)":"Yanıt yok";
     html += `<div class="delta">${deltaBox("İyileşme (başlangıca göre)", "%"+fmt(pct,0), pct>0)}${deltaBox("DAPSA yanıtı", r, pct>=50)}</div>`;
    }
    html += `<p class="stamp">CRP'nin katkısı: ${fmt(crp,2)} (mg/dL). Bileşenler: HES ${t} + ŞES ${s} + HG ${fmt(g,1)} + ağrı ${fmt(p,1)} + CRP ${fmt(crp,2)}.</p>`;
    out.innerHTML=html;
   }
   calc();
  }};
 },
 essdai(){
  const D=[
   ["Konstitüsyonel",3,["Yok","Düşük: hafif/aralıklı ateş (37,5–38,5 °C), gece terlemesi ve/veya %5–10 istemsiz kilo kaybı","Orta: belirgin ateş (> 38,5 °C), gece terlemesi ve/veya > %10 istemsiz kilo kaybı"],"Enfeksiyona bağlı ateş ve gönüllü kilo kaybı hariç"],
   ["Lenfadenopati ve lenfoma",4,["Yok","Düşük: herhangi bir bölgede ≥ 1 cm veya inguinal ≥ 2 cm LAP","Orta: herhangi bir bölgede ≥ 2 cm veya inguinal ≥ 3 cm LAP ve/veya splenomegali","Yüksek: güncel malign B hücreli lenfoproliferatif hastalık"],"Enfeksiyona bağlı LAP hariç"],
   ["Glandüler",2,["Yok","Düşük: küçük glandüler şişlik — parotis ≤ 3 cm veya sınırlı submandibuler/lakrimal","Orta: belirgin şişlik — parotis > 3 cm veya belirgin submandibuler/lakrimal"],"Taş veya enfeksiyona bağlı şişlik hariç"],
   ["Artiküler",2,["Yok","Düşük: el, el bileği, ayak bileği veya ayakta artralji + > 30 dk sabah sertliği","Orta: 28 eklemden 1–5'inde sinovit","Yüksek: 28 eklemden ≥ 6'sında sinovit"],"Osteoartrit hariç"],
   ["Kutanöz",3,["Yok","Düşük: eritema multiforme","Orta: sınırlı kutanöz vaskülit (ürtikeryal vaskülit dahil), ayak/ayak bileği ile sınırlı purpura veya subakut kutanöz lupus","Yüksek: yaygın kutanöz vaskülit (ürtikeryal vaskülit dahil), yaygın purpura veya vaskülite bağlı ülser"],"≥ 6 aydır stabil, uzun süreli hasar ile ilişkili bulgular hariç"],
   ["Pulmoner",5,["Yok","Düşük: radyolojik bulgu olmadan persistan öksürük/bronş tutulumu veya nefes darlığı olmayan ve SFT normal ILD","Orta: HRCT ile ILD + efor dispnesi (NYHA II) veya DLCO %40–70 ya da FVC %60–80","Yüksek: istirahat dispnesi (NYHA III–IV) ile ILD veya DLCO < %40 ya da FVC < %60"],"Sigaraya bağlı öksürük, uzun süreli stabil hasar hariç"],
   ["Renal",5,["Yok","Düşük: böbrek yetmezliği olmadan tübüler asidoz veya hematüri/böbrek yetmezliği olmadan 0,5–1 g/gün proteinüri (GFR ≥ 60)","Orta: böbrek yetmezliği ile tübüler asidoz (GFR < 60) veya hematüri/yetmezlik olmadan 1–1,5 g/gün proteinüri, ya da histolojide ekstramembranöz GN veya belirgin interstisyel lenfoid infiltrasyon","Yüksek: > 1,5 g/gün proteinüri, hematüri veya böbrek yetmezliği (GFR < 60) ile glomerüler tutulum, ya da histolojide proliferatif GN veya kriyoglobulinemiye bağlı tutulum"],"Uzun süreli stabil hasar hariç"],
   ["Kas",6,["Yok","Düşük: EMG/biyopsi ile hafif aktif miyozit, güçsüzlük yok, CK ≤ 2×NÜS","Orta: EMG/biyopsi ile miyozit + güçsüzlük (en fazla 4/5) veya CK 2–4×NÜS","Yüksek: EMG/biyopsi ile miyozit + güçsüzlük (≤ 3/5) veya CK > 4×NÜS"],"Kortikosteroide bağlı güçsüzlük hariç"],
   ["Periferik sinir sistemi",5,["Yok","Düşük: ENMG ile saf duyusal aksonal polinöropati veya trigeminal nevralji","Orta: ENMG ile en fazla 4/5 motor kayıplı aksonal sensorimotor nöropati, kriyoglobulinemik vaskülitle saf duyusal nöropati, hafif–orta ataksili gangliyonopati, hafif fonksiyon kayıplı CIDP veya periferik kranyal sinir tutulumu (trigeminal nevralji hariç)","Yüksek: ≤ 3/5 motor kayıplı aksonal sensorimotor nöropati, vaskülite bağlı sinir tutulumu (mononöritis multipleks vb.), ağır ataksili gangliyonopati veya ağır fonksiyon kayıplı CIDP"],"≥ 6 aydır stabil uzun süreli hasar hariç"],
   ["Santral sinir sistemi",5,["Yok",null,"Orta: santral kranyal sinir tutulumu, optik nörit veya saf duyusal bozukluk ya da kanıtlanmış bilişsel bozuklukla sınırlı MS benzeri sendrom","Yüksek: inme veya TİA ile serebral vaskülit, nöbet, transvers miyelit, lenfositik menenjit veya motor defisitli MS benzeri sendrom"],"Uzun süreli stabil hasar hariç"],
   ["Hematolojik",2,["Yok","Düşük: otoimmün sitopeni — nötrofil 1000–1500/mm³ ve/veya Hb 10–12 g/dL ve/veya trombosit 100–150 bin ve/veya lenfosit 500–1000/mm³","Orta: nötrofil 500–1000, Hb 8–10 g/dL, trombosit 50–100 bin veya lenfosit ≤ 500/mm³","Yüksek: nötrofil < 500, Hb < 8 g/dL veya trombosit < 50 bin"],"Yalnızca otoimmün sitopeniler; B12, folat, demir eksikliği ve ilaca bağlı sitopeni hariç"],
   ["Biyolojik",1,["Yok","Düşük: klonal bileşen ve/veya hipokomplementemi (C3, C4 veya CH50 düşük) ve/veya IgG 16–20 g/L","Orta: kriyoglobulinemi ve/veya IgG > 20 g/L ve/veya yeni başlayan hipogamaglobulinemi ya da IgG < 5 g/L'ye yeni düşüş"],""]
  ];
  const html = `
  <h1>ESSDAI <small>EULAR Sjögren's Syndrome Disease Activity Index</small></h1>
  <p class="src">Seror 2010, 2015. 12 alan; her alanda aktivite düzeyi × alan ağırlığı. Yalnızca Sjögren'e bağlı ve güncel aktif bulgular puanlanır. Aktivite: &lt; 5 düşük · 5–13 orta · ≥ 14 yüksek. Klinik anlamlı iyileşme ≥ 3 puan.</p>
  ${D.map((d,i)=>`<div class="domain">${d[0]}<span>ağırlık ${d[1]}</span></div>
   <div class="checks">${d[2].map((t,l)=>t==null?"":`<label class="chk"><input type="radio" name="es-${i}" value="${l}" ${l===0?"checked":""}><span>${t}${l===0&&d[3]?`<span class="sub">${d[3]}</span>`:""}</span><span class="pt">${l*d[1]}</span></label>`).join("")}</div>`).join("")}
  <div class="grid">${field("es-base","Önceki ESSDAI (isteğe bağlı)",{max:123,step:1,hint:"Değişimi gösterir"})}</div>
  <div class="actions"><button class="btn" type="button" id="es-clr">Sıfırla</button></div>
  <div class="result sticky" id="out"></div>`;
  return {html, init(root){
   root.addEventListener("change",calc); root.addEventListener("input",calc);
   $("#es-clr",root).addEventListener("click",()=>{ $$('input[type=radio][value="0"]',root).forEach(i=>i.checked=true); $("#es-base",root).value=""; calc(); });
   function calc(){
    let sc=0; const parts=[];
    D.forEach((d,i)=>{ const l=+($(`input[name="es-${i}"]:checked`,root)?.value||0); if(l){ sc+=l*d[1]; parts.push(`${d[0]} ${l*d[1]}`); } });
    const cat=catFor(sc,[{max:4,label:"Düşük aktivite",cls:"ok"},{max:13,label:"Orta aktivite",cls:"mid"},{max:999,label:"Yüksek aktivite",cls:"warn"}]);
    let html=`<div class="big"><span class="val">${sc}</span><span class="cat ${cat.cls}">${cat.label}</span><span style="color:var(--muted);font-size:14px">/ 123</span></div>`;
    html+=bandHTML([{to:5,cls:"g"},{to:14,cls:"o"},{to:40,cls:"r"}],Math.min(sc,40),0,40);
    const base=numv("es-base");
    if(base!=null){ const d=base-sc; html+=`<div class="delta">${deltaBox("Δ ESSDAI (önceki − güncel)",(d>0?"+":"")+d,d>0)}${deltaBox("Klinik anlamlı iyileşme (≥ 3)",d>=3?"Var":"Yok",d>=3)}</div>`; }
    html+=`<p class="stamp" style="margin-top:8px">${parts.length?parts.join(" · "):"Aktif alan yok."}</p>`;
    $("#out",root).innerHTML=html;
   }
   calc();
  }};
 },
 bvas(){
  // [ad, yeni/kötüleşen, persistan (null = persistan puanı yok)]
  const SYS=[
   ["Genel",3,2,[["Miyalji",1,1],["Artralji / artrit",1,1],["Ateş ≥ 38,0 °C",2,2],["Kilo kaybı ≥ 2 kg",2,2]]],
   ["Kutanöz",6,3,[["İnfarkt",2,1],["Purpura",2,1],["Ülser",4,1],["Gangren",6,2],["Diğer deri vasküliti",2,1]]],
   ["Mukoza / göz",6,3,[["Ağız ülseri / granülom",2,1],["Genital ülser",1,1],["Adneksiyal inflamasyon",4,2],["Belirgin proptozis",4,2],["Kırmızı göz — (epi)sklerit",2,1],["Kırmızı göz — konjonktivit / blefarit / keratit",1,1],["Bulanık görme",3,2],["Ani görme kaybı",6,null],["Üveit",6,2],["Retina değişikliği — vaskülit / damar trombozu / eksüda / kanama",6,2]]],
   ["KBB",6,3,[["Kanlı burun akıntısı / kabuklanma / ülser / granülom",4,2],["Paranazal sinüs tutulumu",2,1],["Subglottik stenoz",6,3],["İletim tipi işitme kaybı",3,1],["Sensörinöral işitme kaybı",6,2]]],
   ["Toraks",6,3,[["Wheezing",2,1],["Nodül veya kavite",3,null],["Plevral efüzyon / plörezi",4,2],["İnfiltrat",4,2],["Endobronşiyal tutulum",4,2],["Masif hemoptizi / alveoler hemoraji",6,4],["Solunum yetmezliği",6,4]]],
   ["Kardiyovasküler",6,3,[["Nabız kaybı",4,1],["Kapak hastalığı",4,2],["Perikardit",3,1],["İskemik kardiyak ağrı",4,2],["Kardiyomiyopati",6,3],["Konjestif kalp yetmezliği",6,3]]],
   ["Batın",9,4,[["Peritonizm",9,3],["Kanlı ishal",9,3],["İskemik karın ağrısı",6,2]]],
   ["Renal",12,6,[["Hipertansiyon",4,1],["Proteinüri > 1+",4,2],["Hematüri ≥ 10 eritrosit/BBA",6,3],["Kreatinin 125–249 µmol/L (1,41–2,82 mg/dL)",4,null,"cr"],["Kreatinin 250–499 µmol/L (2,83–5,64 mg/dL)",6,null,"cr"],["Kreatinin ≥ 500 µmol/L (≥ 5,65 mg/dL)",8,null,"cr"],["Kreatininde > %30 artış veya klirenste > %25 düşüş",6,null]]],
   ["Sinir sistemi",9,6,[["Baş ağrısı",1,1],["Menenjit",3,1],["Organik konfüzyon",3,1],["Nöbet (hipertansif olmayan)",9,3],["İnme",9,3],["Spinal kord lezyonu",9,3],["Kranyal sinir felci",6,3],["Duyusal periferik nöropati",6,3],["Motor mononöritis multipleks",9,3]]]
  ];
  let mode="new";
  const html = `
  <h1>BVAS v3 <small>Birmingham Vasculitis Activity Score, sürüm 3</small></h1>
  <p class="src">Mukhtyar 2009. Son 4 haftadaki, vaskülite bağlı aktif bulgular işaretlenir. En az bir bulgu yeni/kötüleşen ise tüm bulgular yeni/kötüleşen ağırlığıyla puanlanır (en fazla 63); tüm bulgular persistan ise persistan ağırlıkla (en fazla 33). Her sistem kendi üst sınırıyla kesilir. BVAS = 0 remisyon.</p>
  <div style="margin:10px 0 4px">${seg("bv-mode",[{v:"new",l:"Yeni / kötüleşen bulgu var"},{v:"pers",l:"Tüm bulgular persistan"}],"new")}</div>
  ${SYS.map((sy,si)=>`<div class="domain">${sy[0]}<span>en fazla ${sy[1]} / ${sy[2]}</span></div><div class="checks">${sy[3].map((it,ii)=>`<label class="chk"><input type="${it[3]?"checkbox":"checkbox"}" data-s="${si}" data-i="${ii}" ${it[3]?`data-x="${it[3]}"`:""}><span>${it[0]}</span><span class="pt" data-n="${it[1]}" data-p="${it[2]==null?"–":it[2]}">${it[1]}</span></label>`).join("")}</div>`).join("")}
  <div class="actions"><button class="btn" type="button" id="bv-clr">Temizle</button></div>
  <div class="result sticky" id="out"></div>`;
  return {html, init(root){
   const m=$("#bv-mode",root);
   m.addEventListener("click",e=>{ const b=e.target.closest("button"); if(!b) return; mode=b.dataset.v; $$("button",m).forEach(x=>x.setAttribute("aria-pressed",x===b)); $$(".pt[data-n]",root).forEach(p=>p.textContent=mode==="new"?p.dataset.n:p.dataset.p); calc(); });
   root.addEventListener("change",e=>{ const t=e.target; if(t.dataset.x&&t.checked) $$(`input[data-x="${t.dataset.x}"]`,root).forEach(o=>{ if(o!==t) o.checked=false; }); calc(); });
   $("#bv-clr",root).addEventListener("click",()=>{ $$("input[type=checkbox]",root).forEach(i=>i.checked=false); calc(); });
   function calc(){
    let tot=0; const parts=[]; let zeroP=false;
    SYS.forEach((sy,si)=>{ let s=0;
     $$(`input[data-s="${si}"]:checked`,root).forEach(c=>{ const it=sy[3][+c.dataset.i]; const w=mode==="new"?it[1]:it[2]; if(w==null) zeroP=true; s+=w||0; });
     const cap=mode==="new"?sy[1]:sy[2]; const v=Math.min(s,cap); if(v){ tot+=v; parts.push(`${sy[0]} ${v}${s>cap?" (sınır)":""}`); } });
    const cat = tot===0?{label:"Aktif bulgu yok (remisyon)",cls:"ok"}:mode==="pers"?{label:"Persistan aktif hastalık",cls:"mid"}:{label:"Aktif hastalık (yeni/kötüleşen)",cls:"warn"};
    const max=mode==="new"?63:33;
    let html=`<div class="big"><span class="val">${tot}</span><span class="cat ${cat.cls}">${cat.label}</span><span style="color:var(--muted);font-size:14px">/ ${max}</span></div>`;
    html+=bandHTML([{to:max,cls:tot===0?"g":mode==="new"?"r":"o"}],tot,0,max);
    if(zeroP) html+=`<div class="sutline no"><b>Not</b><span>Ani görme kaybı, nodül/kavite ve kreatinin maddelerinin persistan puanı yoktur; bu modda 0 sayıldı.</span></div>`;
    html+=`<p class="stamp" style="margin-top:8px">${parts.length?parts.join(" · "):"İşaretli bulgu yok."}</p>`;
    $("#out",root).innerHTML=html;
   }
   calc();
  }};
 },
 itas(){
  const IT=[
   ["Sistemik",[["Halsizlik / kilo kaybı > 2 kg",1],["Miyalji / artralji / artrit",1],["Baş ağrısı",1]]],
   ["Batın",[["Şiddetli karın ağrısı",1]]],
   ["Genitoüriner",[["Abortus",1]]],
   ["Renal",[["Diyastolik KB > 90 mmHg",2],["Sistolik KB > 140 mmHg",1]]],
   ["Sinir sistemi",[["İnme",2],["Nöbet (hipertansif olmayan)",1],["Senkop",1],["Vertigo / baş dönmesi",1]]],
   ["Kardiyovasküler",[["Arteriyel üfürüm (bruit)",2],["Nabız eşitsizliği (kol/bacak arası veya iki taraf arası)",2],["Yeni nabız kaybı",2],["Kladikasyon",2],["Karotidini",2],["Aort yetmezliği",1],["Miyokard infarktüsü / angina",1],["Kardiyomiyopati / kalp yetmezliği",1]]]
  ];
  const html = `
  <h1>ITAS2010 <small>Indian Takayasu Clinical Activity Score</small></h1>
  <p class="src">Misra 2013. Son 3 ayda yeni ortaya çıkan veya kötüleşen, Takayasu arteritine bağlı bulgular işaretlenir; ilk vizitte mevcut tüm bulgular sayılır. Yedi anahtar madde 2 puan, diğerleri 1 puan. Aktif hastalık: ITAS2010 ≥ 2, ITAS-A ≥ 5.</p>
  ${IT.map((sy,si)=>`<div class="domain">${sy[0]}</div><div class="checks">${sy[1].map((it,ii)=>`<label class="chk"><input type="checkbox" data-w="${it[1]}"><span>${it[0]}</span><span class="pt">${it[1]}</span></label>`).join("")}</div>`).join("")}
  <h3>ITAS-A — akut faz (son 30 gün)</h3>
  <div class="grid">${field("it-esr","ESH (mm/saat)",{max:200,hint:"≤ 20: 0 · 21–39: 1 · 40–59: 2 · ≥ 60: 3"})}${field("it-crp","CRP (mg/L)",{max:500,step:0.1,hint:"≤ 5: 0 · 6–10: 1 · 11–20: 2 · > 20: 3"})}</div>
  <div class="actions"><button class="btn" type="button" id="it-clr">Temizle</button></div>
  <div class="result sticky" id="out"></div>`;
  return {html, init(root){
   root.addEventListener("change",calc); root.addEventListener("input",calc);
   $("#it-clr",root).addEventListener("click",()=>{ $$("input[type=checkbox]",root).forEach(i=>i.checked=false); $("#it-esr",root).value=""; $("#it-crp",root).value=""; calc(); });
   function calc(){
    const sc=$$("input[type=checkbox]:checked",root).reduce((a,c)=>a+ +c.dataset.w,0);
    const esr=numv("it-esr"), crp=numv("it-crp");
    const pe = esr==null?null: esr<=20?0: esr<40?1: esr<60?2:3;
    const pc = crp==null?null: crp<=5?0: crp<=10?1: crp<=20?2:3;
    const apr = pe==null&&pc==null?null:Math.max(pe??0,pc??0);
    const act=sc>=2;
    let html=`<div class="big"><span class="val">${sc}</span><span class="cat ${act?"warn":"ok"}">${act?"Aktif (ITAS2010 ≥ 2)":"İnaktif"}</span><span style="color:var(--muted);font-size:14px">ITAS2010</span></div>`;
    html+=bandHTML([{to:2,cls:"g"},{to:26,cls:"r"}],Math.min(sc,26),0,26);
    if(apr!=null){ const a=sc+apr, aa=a>=5;
     html+=`<div class="delta">${deltaBox("Akut faz puanı",`+${apr}${pe!=null&&pc!=null?` (ESH ${pe}, CRP ${pc}; yüksek olan)`:""}`,apr===0)}${deltaBox("ITAS-A",`${a} — ${aa?"aktif":"inaktif"}`,!aa)}</div>`; }
    html+=`<p class="stamp" style="margin-top:8px">Bu hesaplayıcıda her bulgu türü bir kez puanlanır; orijinal formda arter bazında işaretlenen kardiyovasküler bulgular için kurum formunuzla karşılaştırın.</p>`;
    $("#out",root).innerHTML=html;
   }
   calc();
  }};
 },
 vdi(){
  const V=[
   ["Kas-iskelet",["Belirgin kas atrofisi veya güçsüzlük","Deformite yapan / eroziv artrit","Kırık veya vertebra çökmesiyle osteoporoz","Avasküler nekroz","Osteomiyelit"]],
   ["Deri / mukoza",["Alopesi","Deri ülseri","Ağız ülseri"]],
   ["Göz",["Katarakt","Retina değişikliği","Optik atrofi","Görme bozukluğu / diplopi","Bir gözde körlük","İkinci gözde körlük","Orbita duvarı destrüksiyonu"]],
   ["KBB",["İşitme kaybı","Burun tıkanıklığı / kronik akıntı / kabuklanma","Burun kökü çökmesi / septum perforasyonu","Kronik sinüzit / radyolojik hasar","Subglottik stenoz (cerrahi yok)","Subglottik stenoz (cerrahi ile)"]],
   ["Akciğer",["Pulmoner hipertansiyon","Pulmoner fibroz","Pulmoner infarkt","Plevral fibroz","Kronik astım","Kronik nefes darlığı","Bozulmuş solunum fonksiyonu"]],
   ["Kardiyovasküler",["Angina / anjiyoplasti / koroner bypass","Miyokard infarktüsü","İkinci miyokard infarktüsü","Kardiyomiyopati","Kapak hastalığı","> 3 ay süren perikardit veya perikardiyektomi","Diyastolik KB ≥ 95 mmHg veya antihipertansif gereksinimi"]],
   ["Periferik damar",["Bir ekstremitede nabız kaybı","İkinci nabız kaybı epizodu","Büyük damar stenozu","> 3 ay kladikasyon","Minör doku kaybı","Majör doku kaybı","İkinci majör doku kaybı","Komplike venöz tromboz"]],
   ["Gastrointestinal",["Barsak infarktı / rezeksiyonu","Mezenterik yetmezlik / pankreatit","Kronik peritonit","Özofagus darlığı / cerrahisi"]],
   ["Renal",["GFR ≤ %50","Proteinüri ≥ 0,5 g/24 saat","Son dönem böbrek yetmezliği"]],
   ["Nöropsikiyatrik",["Bilişsel bozukluk","Majör psikoz","Nöbet","Serebrovasküler olay","İkinci serebrovasküler olay","Kranyal sinir lezyonu","Periferik nöropati","Transvers miyelit"]],
   ["Diğer",["Gonadal yetmezlik","Kemik iliği yetmezliği","Diyabet","Kimyasal sistit","Malignite","Diğer"]]
  ];
  const html = `
  <h1>VDI <small>Vasculitis Damage Index</small></h1>
  <p class="src">Exley 1997. Vaskülit başlangıcından sonra ortaya çıkan ve en az 3 aydır süren hasar, nedeninden bağımsız (hastalık, tedavi veya komorbidite) puanlanır; her madde 1 puan, en fazla 64. Hasar birikimseldir — önceki vizitte kayıtlı maddeler korunur. Tekrarlayan olaylar (körlük, MI, nabız kaybı, doku kaybı, inme) en az 3 ay arayla olmalıdır.</p>
  ${V.map((sy,si)=>`<div class="domain">${sy[0]}<span>${sy[1].length} madde</span></div><div class="checks">${sy[1].map(t=>`<label class="chk"><input type="checkbox"><span>${t}</span><span class="pt">1</span></label>`).join("")}</div>`).join("")}
  <div class="actions"><button class="btn" type="button" id="vd-clr">Temizle</button></div>
  <div class="result sticky" id="out"></div>`;
  return {html, init(root){
   root.addEventListener("change",calc);
   $("#vd-clr",root).addEventListener("click",()=>{ $$("input[type=checkbox]",root).forEach(i=>i.checked=false); calc(); });
   function calc(){
    const parts=[]; let tot=0;
    $$(".checks",root).forEach((c,i)=>{ const n=$$("input:checked",c).length; if(n){ tot+=n; parts.push(`${V[i][0]} ${n}`); } });
    const cat=tot===0?{label:"Hasar yok",cls:"ok"}:{label:`${tot} hasar maddesi`,cls:"neutral"};
    let html=`<div class="big"><span class="val">${tot}</span><span class="cat ${cat.cls}">${cat.label}</span><span style="color:var(--muted);font-size:14px">/ 64</span></div>`;
    html+=bandHTML([{to:15,cls:tot===0?"g":"o"}],Math.min(tot,15),0,15);
    html+=`<p class="stamp" style="margin-top:8px">${parts.length?parts.join(" · "):"İşaretli hasar maddesi yok."} VDI'nin resmî şiddet eşikleri yoktur; izlemde artış önemlidir.</p>`;
    $("#out",root).innerHTML=html;
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
const FILL_KEYS=[["S0","Başlangıç skoru","DAS28 / BASDAİ / CRP"],["S1","Güncel skor",""],["IGIF","İGİF seri no",""],["ONAY","Onay formu seri no",""],["TARIH","Tarih","gg.aa.yyyy"]];
const fillState={};
function applyFill(text){
 return text.replace(/\{(ILAC|S0|S1|IGIF|ONAY|TARIH)\}/g,(m,k)=>fillState[k]&&fillState[k].trim()?fillState[k].trim():"……");
}
function renderTemplates(t){
 let html=`<h1>${t.title}<small>${t.sub}</small></h1>${t.src?`<p class="src">Kaynak: ${t.src} — rapor açıklamasına doğrudan yapıştırılacak biçimde.</p>`:""}`;
 if(t.html){ html+=t.html+`<p class="stamp">${TPL_STAMP}</p>`; return {html}; }
 html+=`<div class="fill">${FILL_KEYS.map(([k,l,h])=>`<div class="field"><label for="f-${k}">${l}</label><input type="text" id="f-${k}" data-k="${k}" value="${(fillState[k]||"").replace(/"/g,"&quot;")}" placeholder="${h}"></div>`).join("")}</div>
 <p class="note">Doldurduğunuz alanlar tüm şablonlara "……" yerine işlenir; boş bırakılanlar "……" olarak kalır. Metinler doğrudan rapor açıklamasına yapıştırılabilir; mevzuat açıklaması içermez. Mor notlar hatırlatmadır, kopyalanmaz.</p>`;
 t.groups.forEach((g,gi)=>{
  html+=`<h2 class="grp">${g.name}</h2>`;
  g.items.forEach((it,ii)=>{
   html+=`<div class="tpl" data-g="${gi}" data-i="${ii}"><div class="tpl-h"><b>${it.t}</b><span class="dur">${it.dur}</span>${it.ilac?`<span class="ilac">${it.ilac}</span>`:""}</div>${it.note?`<div class="tpl-n">${it.note}</div>`:""}<textarea spellcheck="false">${applyFill(it.text)}</textarea><div class="tpl-f"><button type="button" class="btn primary cp">Kopyala</button><button type="button" class="btn rs">Sıfırla</button><span class="st"></span></div></div>`;
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
 const card=document.createElement("section"); card.className="card enter"+(sec==="crit"?" crit":"");
 if(sec==="calc"){ const v=calcViews[id](); card.innerHTML=v.html; main.appendChild(card); v.init(card); }
 else if(sec==="sut"){ const s=SUT.find(x=>x.id===id); card.innerHTML=`<h1>${s.title}<small>${s.sub}</small></h1><p class="src">SUT 4.2.1.C — özet; hukuki metin değildir.</p>${s.html}<p class="stamp">${SUT_STAMP}</p>`; main.appendChild(card); }
 else if(sec==="tpl"){ const v=renderTemplates(TEMPLATES.find(x=>x.id===id)); card.innerHTML=v.html; main.appendChild(card); v.init&&v.init(card); }
 else { const c=CRITERIA.find(x=>x.id===id); const v=c.custom?customCriteria[c.custom](c):renderGenericCriteria(c); card.innerHTML=v.html; main.appendChild(card); v.init(card); }
 document.title=`${(sec==="calc"?CALCS:sec==="sut"?SUT:sec==="tpl"?TEMPLATES:CRITERIA).find(x=>x.id===id).title} — Romatoloji Masası`;
 window.scrollTo({top:0});
 placeIndicators();
}

/* ---------- Hareket: gezinme göstergeleri, kayan sayılar ve işaretçi ---------- */
const REDUCED = window.matchMedia && matchMedia("(prefers-reduced-motion: reduce)").matches;
let sidePrev=null;
function placeIndicators(){
 const nav=$(".nav"), ni=$(".nav-ind"), cur=$(".nav a[aria-current]");
 if(ni&&cur){ ni.style.left=cur.offsetLeft+"px"; ni.style.width=cur.offsetWidth+"px"; }
 const ul=$("#index ul"), on=$("#index a.on");
 if(ul&&on&&window.innerWidth>=860){
  const ind=document.createElement("span"); ind.className="side-ind"; ul.prepend(ind);
  const li=on.parentElement, t=li.offsetTop, h=li.offsetHeight;
  if(sidePrev&&!REDUCED){ ind.style.top=sidePrev.t+"px"; ind.style.height=sidePrev.h+"px"; ind.getBoundingClientRect(); }
  else ind.style.transition="none";
  requestAnimationFrame(()=>{ ind.style.top=t+"px"; ind.style.height=h+"px"; });
  sidePrev={t,h};
 }
}
window.addEventListener("resize",()=>{ const ni=$(".nav-ind"), cur=$(".nav a[aria-current]"); if(ni&&cur){ ni.style.transition="none"; ni.style.left=cur.offsetLeft+"px"; ni.style.width=cur.offsetWidth+"px"; requestAnimationFrame(()=>ni.style.transition=""); } });

const lastNum=new Map(), lastMk=new Map();
const parseTR = t => { const m=String(t).trim().match(/^-?\d+(?:,\d+)?$/); return m?parseFloat(m[0].replace(",",".")):null; };
function rollNumbers(){
 const keyBase=location.hash;
 $$("#main .val, #main .ra-tile .v").forEach((el,i)=>{
  if(el.dataset.t!=null) return;
  const txt=el.textContent.trim(); el.dataset.t=txt;
  const key=keyBase+"|"+i+"|"+(el.closest(".ra-tile")?.querySelector(".nm")?.textContent||"");
  const to=parseTR(txt), from=lastNum.get(key);
  lastNum.set(key,to);
  if(to==null||from==null||from===to||REDUCED) return;
  const dec=(txt.split(",")[1]||"").length, t0=performance.now(), dur=420;
  const step=now=>{ const k=Math.min(1,(now-t0)/dur), e=1-Math.pow(1-k,3), v=from+(to-from)*e;
   el.textContent=(k<1? v.toFixed(dec) : to.toFixed(dec)).replace(".",",");
   if(k<1) requestAnimationFrame(step); };
  requestAnimationFrame(step);
 });
 $$("#main .band .mk").forEach((mk,i)=>{
  if(mk.dataset.t!=null) return; mk.dataset.t="1";
  const key=location.hash+"|mk|"+i, to=mk.style.left, from=lastMk.get(key);
  lastMk.set(key,to);
  if(from==null||from===to||REDUCED) return;
  mk.style.transition="none"; mk.style.left=from; mk.getBoundingClientRect();
  mk.style.transition=""; mk.style.left=to;
 });
}
new MutationObserver(rollNumbers).observe($("#main"),{childList:true,subtree:true});
window.addEventListener("hashchange",render);
$("#foot-stamp").textContent=SUT_STAMP;
render();
})();
