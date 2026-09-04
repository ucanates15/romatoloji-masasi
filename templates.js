/* Romatoloji Masası — rapor şablonları
   Kaynak: TRD-G Anti-Romatizmal İlaçlar Kılavuzu (Kasım 2025), "Rapora eklenmesi gereken ifade" bölümleri.
   Yer tutucular: {ILAC} etken madde/doz, {S0} başlangıç skoru, {S1} güncel skor, {IGIF} İGİF seri no, {ONAY} onay formu seri no, {TARIH} tarih.
   Şablonlar hukuki metin değildir; kurum uygulamasına göre düzenleyin. */

const TPL_STAMP = "Şablonlar TRD-G Anti-Romatizmal İlaçlar Kılavuzu (Kasım 2025) kaynaklıdır; 23.05.2026 SUT değişikliğine ilişkin ek cümleler köşeli parantezle işaretlenmiştir.";

const IGIF_STD = "Hastanın İlaç Güvenlik İzlem Formu düzenlenmiş ve İlaç Kullanım Onay Formu doldurulup hasta tarafından imzalanmıştır. {TARIH} tarihli İlaç Güvenlik İzlem Formu Seri No: {IGIF} — İlaç Kullanım Onay Formu Seri No: {ONAY}";
const ONAY_STD = "Hasta onay formu mevzuata uygun olarak doldurulmuştur. Hasta Onay Formu Seri No: {ONAY} — Güvenlik İzlem Formu Seri No: {IGIF}";
const HEYET_ROM = "2. ve 3. basamak sağlık kuruluşlarında düzenlenecek kurul raporunda romatoloji, klinik immünoloji veya FTR uzman hekimlerinden en az biri yer almalıdır. Bu rapora istinaden romatoloji, klinik immünoloji, FTR veya iç hastalıkları uzman hekimleri reçete yazabilir.";

const TEMPLATES = [
{
 id:"ra", title:"Romatoid artrit", sub:"Teşhis kodu 09.01.5.1 · ICD M05–M06, M08.0/M08.2/M08.3",
 groups:[
  {name:"Anti-TNF (adalimumab, etanersept; 2. basamak infliksimab, golimumab, sertolizumab)", items:[
   {t:"1. rapor — başlangıç", dur:"3 ay süreli kurul raporu", text:
`Romatoid Artrit tanılı hasta; biri Methotrexate olmak üzere en az 3 farklı hastalık modifiye edici antiromatizmal ilacı (DMARD) (Sülfasalazin, Hidroksiklorokin) en az üçer ay kullanmış olmasına rağmen hastalık aktivitesi kontrol altına alınamamıştır. Hastalık aktivite skoru başlangıç DAS28: {S0} (> 5,1).
[İnfliksimab / golimumab / sertolizumab için ekleyin: Hasta daha önce …… etken maddeli anti-TNF ajanını yeterli sürede kullanmış ancak yeterli yanıt alınamamıştır. — Sertolizumab için gebelik varsa: Hasta gebedir; bu nedenle önceki anti-TNF kullanım şartı aranmamaktadır.]

Tedavi-Kullanım Dozu: Hastanın {ILAC} etken maddeli ilacı …… şekilde uygulanmak üzere 3 (üç) ay süre ile kullanması uygundur. "Mahallinde tedavisi sürdürülebilir". ${IGIF_STD}

${HEYET_ROM}`},
   {t:"2. rapor — devam", dur:"3 ay süreli kurul raporu (sertolizumab 6 ay)", text:
`3 aydır {ILAC} ile tedavi gören Romatoid Artritli hastada DAS28'de 0,6 puandan fazla düzelme olup (Başlangıç DAS28: {S0}, Mevcut DAS28: {S1}), 3 ay süre ile tedavisine devamı uygun görülmektedir.

Tedavi-Kullanım Dozu: Hastanın {ILAC} etken maddeli ilacı …… şekilde uygulanmak üzere 3 ay süre ile kullanması uygundur. "Mahallinde tedavisi sürdürülebilir". ${IGIF_STD}

${HEYET_ROM}`},
   {t:"3. rapor ve sonrası — idame", dur:"6 ay süreli kurul raporu", text:
`6 aydır {ILAC} ile tedavi gören Romatoid Artritli hastada DAS28'de 6 ayın sonunda 1,2 puandan fazla düzelme olup (Başlangıç DAS28: {S0}, Mevcut DAS28: {S1}), 6 ay süre ile tedavisine devamı uygun görülmektedir.

Tedavi-Kullanım Dozu: Hastanın {ILAC} etken maddeli ilacı …… şekilde uygulanmak üzere 6 ay süre ile kullanması uygundur. "Mahallinde tedavisi sürdürülebilir". ${IGIF_STD}

${HEYET_ROM}`}
  ]},
  {name:"Tofasitinib", items:[
   {t:"1. rapor — anti-TNF yetersiz yanıt", dur:"3 ay", text:
`Romatoid Artrit tanılı hasta; en az 3 farklı hastalık modifiye edici antiromatizmal ilacı 3'er ay süre ile uygun dozda kullanmış ve sonrasında bir anti-TNF ajanı 3 ay süre ile kullanmış olmasına rağmen hastalık aktivitesi kontrol altına alınamamıştır (Hastalık Aktivite Skoru DAS28: {S0} > 5,1). Hastanın Tofasitinib etken maddeli ilacı günde 2 kez 5 mg tablet olarak 3 (üç) ay süre ile kullanması uygundur. ${IGIF_STD}`},
   {t:"1. rapor — anti-TNF intoleransı", dur:"3 ay", text:
`Romatoid Artrit tanılı hasta; en az 3 farklı hastalık modifiye edici antiromatizmal ilacı 3'er ay süre ile uygun dozda kullanmış, ardından bir anti-TNF ajanı kullanmış ve intolerans gelişmiştir. Hastanın Tofasitinib etken maddeli ilacı günde 2 kez 5 mg tablet olarak 3 (üç) ay süre ile kullanması uygundur. ${IGIF_STD}`},
   {t:"2. rapor — 1. devam (Δ > 0,6)", dur:"6 ay", text:
`Romatoid Artrit tanılı hasta; en az 3 farklı hastalık modifiye edici antiromatizmal ilacı uygun dozunda en az üçer ay olmak üzere kullanmış, ardından bir anti-TNF ajanı 3 ay süre ile kullanmış olmasına rağmen [veya: kullanmış ve intolerans gelişmiş olup] hastalık aktivitesi kontrol altına alınamamıştır (Başlangıç DAS28: {S0} > 5,1). Ardından hasta Tofasitinib etken maddeli ilacı günde 2 kez 5 mg 3 (üç) ay süre ile kullanmıştır. Hastalık aktivitesi kontrol altına alınan ve DAS28 skorunda 0,6 puandan fazla düşme gözlenen (DAS28 skoru {S1} olmuştur) hastanın Tofasitinib etken maddeli ilaca günde 2 kez 5 mg tablet olarak 6 (altı) ay süre ile devam etmesi uygundur. ${IGIF_STD}`},
   {t:"3. rapor ve sonrası — 2. devam (toplam Δ > 1,2)", dur:"6 ay", text:
`Romatoid Artrit tanılı hasta; en az 3 farklı hastalık modifiye edici antiromatizmal ilacı uygun dozunda en az üçer ay olmak üzere kullanmış, ardından bir anti-TNF ajanı 3 ay süre ile kullanmış olmasına rağmen hastalık aktivitesi kontrol altına alınamamıştır (Başlangıç DAS28: {S0} > 5,1). Ardından hasta Tofasitinib etken maddeli ilacı günde 2 kez 5 mg 6 (altı) ay süre ile kullanmıştır. Hastalık aktivitesi kontrol altına alınan ve DAS28 skorunda 1,2 puandan fazla düşme gözlenen (DAS28 skoru {S1} olmuştur) hastanın Tofasitinib etken maddeli ilaca günde 2 kez 5 mg tablet olarak 6 (altı) ay süre ile devam etmesi uygundur. ${IGIF_STD}`}
  ]},
  {name:"Upadasitinib", items:[
   {t:"Başlangıç raporu", dur:"3 ay", text:
`Hastada aktif romatoid artrit tanısı mevcut olup, en az üç farklı DMARD 3'er ay uygun dozda kullanılmış, sonrasında en az bir anti-TNF ajanı 3 ay uygulanmış olmasına rağmen [veya: anti-TNF ajanına intolerans gelişmiş olup] klinik yanıt sağlanamamıştır. Hastanın DAS28 skoru > 5,1 (güncel DAS28: {S0}) olup aktif hastalık devam etmektedir. Bu nedenle upadasitinib tedavisi uygun görülmüştür. Hastanın tedavisi günde 1 kez upadasitinib 15 mg oral tablet olarak düzenlenmiştir. Güvenlik İzlem Formu No: {IGIF} — Hasta Onay Formu No: {ONAY}`},
   {t:"İdame raporu — 2. rapor (Δ > 0,6)", dur:"3 ay", text:
`Başlangıç DAS28 skoru {S0} olan ve upadasitinib tedavisi başlanmış romatoid artriti olan erişkin hastada, 3 aylık dönemin sonunda DAS28 skorunda 0,6 puandan yüksek iyileşme elde edildiği için (Güncel DAS28: {S1}) upadasitinib tedavisine devam edilmesi uygun görülmüştür. Hastanın tedavisi günde 1 kez upadasitinib 15 mg oral tablet olarak devam edecektir. Güvenlik İzlem Formu No: {IGIF} — Hasta Onay Formu No: {ONAY}`},
   {t:"Sonraki idame raporları (toplam Δ > 1,2)", dur:"6 ay", text:
`Başlangıç DAS28 skoru {S0} olan ve upadasitinib tedavisi başlanmış olan hastada, DAS28 skorunda başlangıca göre 1,2 puandan yüksek iyileşme elde edildiği için (Güncel DAS28: {S1}) upadasitinib tedavisine devam edilmesi uygun görülmüştür. Hastanın tedavisi günde 1 kez upadasitinib 15 mg oral tablet olarak devam edecektir. Güvenlik İzlem Formu No: {IGIF} — Hasta Onay Formu No: {ONAY}`}
  ]},
  {name:"Barisitinib", items:[
   {t:"Başlangıç raporu", dur:"3 ay", text:
`Hastada aktif romatoid artrit tanısı mevcut olup, en az üç farklı DMARD 3'er ay uygun dozda kullanılmış, sonrasında en az bir anti-TNF ajanı 3 ay kullanılmış olmasına rağmen klinik yanıt sağlanamamıştır. Hastanın DAS28 skoru {S0} (> 5,1) olup aktif hastalık devam etmektedir. Tedavi planı: Barisitinib 4 mg (veya 2 mg) günde bir kez oral uygulanacaktır. İlaç Güvenlik İzlem Formu ve Hasta Onay Formu düzenlenmiştir. Güvenlik İzlem Formu No: {IGIF} — Hasta Onay Formu No: {ONAY}`},
   {t:"Devam raporu", dur:"6 ay", text:
`Barisitinib tedavisi altındaki romatoid artritli hastada 3 aylık kullanım sonunda DAS28 skorunda 0,6 puandan fazla [6. ayda toplam 1,2 puandan fazla] iyileşme saptanmıştır (Başlangıç DAS28: {S0}, Güncel DAS28: {S1}). Tedaviye günde bir kez barisitinib 4 mg (veya 2 mg) ile devam edilmesi uygundur. Güvenlik İzlem Formu No: {IGIF} — Hasta Onay Formu No: {ONAY}`}
  ]},
  {name:"Abatasept", items:[
   {t:"Başlangıç — subkutan", dur:"3 ay", text:
`Aktif Romatoid Artriti bulunan hasta; biri Methotrexate olmak üzere en az 3 farklı hastalık modifiye edici antiromatizmal ilacı (DMARD) en az üçer ay kullanmış olmasına veya en az bir anti-TNF tedavisine rağmen hastalık aktivitesi kontrol altına alınamamıştır. Hastalık Aktivite Skoru (DAS28) > 5,1'dir. Hastanın Methotrexate kullanımına ilaveten Abatacept tedavisinin subkutan formunu haftada bir kez 125 mg dozunda kullanımı uygundur. İlk doz iç hastalıkları veya fiziksel tıp ve rehabilitasyon uzman hekiminin bulunduğu sağlık kurumunda uygulanacaktır. Mahallinde tedavisi sürdürülebilir.
[Başlangıç DAS28 Skoru: {S0}]
${ONAY_STD}`},
   {t:"Başlangıç — intravenöz", dur:"3 ay", text:
`Aktif Romatoid Artriti bulunan hasta; biri Methotrexate olmak üzere en az 3 farklı hastalık modifiye edici antiromatizmal ilacı (DMARD) en az üçer ay kullanmış olmasına veya en az bir anti-TNF tedavisine rağmen hastalık aktivitesi kontrol altına alınamamıştır. Hastalık Aktivite Skoru (DAS28) > 5,1'dir. Hastanın Methotrexate kullanımına ilaveten Abatacept tedavisinin intravenöz formunu (vücut ağırlığı < 60 kg ise 500 mg, 60–100 kg ise 750 mg, > 100 kg ise 1000 mg) 0., 2. ve 4. haftalarda uygulanacak yükleme dozunu takiben her 4 haftada bir olmak üzere 3 (üç) ay süre ile kullanması uygundur. Tedavi iç hastalıkları veya fiziksel tıp ve rehabilitasyon uzman hekiminin bulunduğu sağlık kurumunda uygulanacaktır.
[Başlangıç DAS28 Skoru: {S0}]
${ONAY_STD}`},
   {t:"2. rapor (Δ > 0,6)", dur:"3 ay", text:
`Aktif Romatoid Artriti bulunan, biri Methotrexate olmak üzere en az 3 farklı hastalık modifiye edici antiromatizmal ilacı (DMARD) en az üçer ay kullanmış olmasına veya en az bir anti-TNF tedavisine rağmen hastalık aktivitesi kontrol altına alınamayan [DAS28 > 5,1 olan] hastaya Methotrexate kullanımına ilaveten Abatacept tedavisi 3 (üç) ay süre ile uygulanmıştı. Hastada tedaviye cevap alınmıştır. DAS28 skorunda 0,6 puandan fazla düşme mevcuttur. Methotrexate kullanımına ilaveten Abatacept tedavisinin subkutan formuna haftada bir kez 125 mg dozunda [veya: intravenöz formuna kiloya göre her 4 haftada bir] 3 (üç) ay daha devam edilmesi uygundur. İdame tedavidir. Mahallinde tedavisi sürdürülebilir.
[Başlangıç DAS28 Skoru: {S0}] [Yeni DAS28 Skoru: {S1}]
${ONAY_STD}`},
   {t:"Devam raporu (toplam Δ > 1,2)", dur:"6 ay", text:
`Aktif Romatoid Artriti bulunan, biri Methotrexate olmak üzere en az 3 farklı hastalık modifiye edici antiromatizmal ilacı (DMARD) en az üçer ay kullanmış olmasına veya en az bir anti-TNF tedavisine rağmen hastalık aktivitesi kontrol altına alınamayan [DAS28 > 5,1 olan] hastaya Methotrexate kullanımına ilaveten Abatacept tedavisi başlanmış ve tedaviye cevap alındığı için devam edilmişti. Hastanın DAS28 skorunda toplam 1,2 puandan fazla düşme vardır. Mevcut tedaviye cevap alınmaktadır. Methotrexate kullanımına ilaveten Abatacept tedavisinin subkutan formunu haftada bir kez 125 mg dozunda [veya: intravenöz formunu kiloya göre her 4 haftada bir] 6 (altı) ay süre ile kullanması uygundur. İdame tedavidir. Mahallinde tedavisi sürdürülebilir.
[Başlangıç DAS28 Skoru: {S0}] [Yeni DAS28 Skoru: {S1}]
${ONAY_STD}`}
  ]},
  {name:"Tosilizumab", items:[
   {t:"Başlangıç — intravenöz / subkutan", dur:"3 ay", text:
`Aktif Romatoid Artriti bulunan hasta; biri Methotrexate olmak üzere en az 3 farklı hastalık modifiye edici antiromatizmal ilacı (DMARD) en az üçer ay kullanmış olmasına veya en az bir anti-TNF tedavisine rağmen hastalık aktivitesi kontrol altına alınamamıştır. Hastalık Aktivite Skoru (DAS28) > 5,1'dir. Hastanın Tosilizumab etken maddeli ilacı her 4 haftada bir vücut ağırlığına göre 8 mg/kg dozunda intravenöz yolla [veya: haftada bir 162 mg subkutan yolla] olmak üzere 3 (üç) ay süre ile kullanması uygundur. Tedavi sağlık kurumunda uygulanacaktır. [SC için: Mahallinde tedavisi sürdürülebilir.]
[Başlangıç DAS28 Skoru: {S0}]
${ONAY_STD}`},
   {t:"2. rapor (Δ > 0,6)", dur:"3 ay", text:
`Aktif Romatoid Artriti bulunan, biri Methotrexate olmak üzere en az 3 farklı hastalık modifiye edici antiromatizmal ilacı (DMARD) en az üçer ay kullanmış olmasına veya en az bir anti-TNF tedavisine rağmen hastalık aktivitesi kontrol altına alınamayan [DAS28 > 5,1 olan] hastaya Tosilizumab etken maddeli ilaç tedavisi 3 (üç) ay süre ile uygulanmıştı. Hastada tedaviye cevap alınmıştır. DAS28 skorunda 0,6 puandan fazla düşme mevcuttur. Hastanın Tosilizumab etken maddeli ilaca vücut ağırlığına göre 8 mg/kg dozunda her 4 haftada bir intravenöz yolla [veya: haftada bir 162 mg subkutan yolla] 3 (üç) ay süre daha devam etmesi uygundur. İdame tedavidir. Mahallinde tedavisi sürdürülebilir.
[Başlangıç DAS28 Skoru: {S0}] [Yeni DAS28 Skoru: {S1}]
${ONAY_STD}`},
   {t:"Devam raporu (toplam Δ > 1,2)", dur:"6 ay", text:
`Aktif Romatoid Artriti bulunan, biri Methotrexate olmak üzere en az 3 farklı hastalık modifiye edici antiromatizmal ilacı (DMARD) en az üçer ay kullanmış olmasına veya en az bir anti-TNF tedavisine rağmen hastalık aktivitesi kontrol altına alınamayan [DAS28 > 5,1 olan] hastaya Tosilizumab etken maddeli ilaç tedavisi başlanmış ve tedaviye cevap alındığı için devam edilmişti. Hastanın DAS28 skorunda toplam 1,2 puandan fazla düşme vardır. Mevcut tedaviye cevap alınmaktadır. Hastanın Tosilizumab etken maddeli ilacı vücut ağırlığına göre 8 mg/kg dozunda her 4 haftada bir intravenöz yolla [veya: haftada bir 162 mg subkutan yolla] 6 (altı) ay süre ile kullanması uygundur. İdame tedavidir. Mahallinde tedavisi sürdürülebilir.
[Başlangıç DAS28 Skoru: {S0}] [Yeni DAS28 Skoru: {S1}]
${ONAY_STD}`}
  ]},
  {name:"Rituksimab", items:[
   {t:"Başlangıç — anti-TNF deneyimli", dur:"6 ay", text:
`Aktif Romatoid Artriti bulunan hasta; biri Methotrexate olmak üzere en az 3 farklı hastalık modifiye edici antiromatizmal ilacı (DMARD) en az üçer ay kullanmış olmasına ve en az bir anti-TNF tedavisine rağmen hastalık kontrol altına alınamamıştır. Hastalık Aktivite Skoru (DAS28) > 5,1'dir. Hastanın Rituksimab etken maddeli ilacı intravenöz yolla olmak üzere 6 (altı) ay süre ile kullanması uygundur. Tedaviler sağlık kurumunda uygulanacaktır.
[Başlangıç DAS28 Skoru: {S0}]
Hasta onay formu mevzuata uygun olarak doldurulmuştur. Hasta Onay Formu Seri No: {ONAY}`},
   {t:"Başlangıç — anti-TNF uygun görülmeyen / kontrendike", dur:"6 ay", text:
`Aktif Romatoid Artriti bulunan hasta; biri Methotrexate olmak üzere en az 3 farklı hastalık modifiye edici antiromatizmal ilacı (DMARD) en az üçer ay kullanmış olmasına rağmen hastalık kontrol altına alınamamış olup anti-TNF tedavisi başlanması uygun görülmemiştir / kontrendikedir (gerekçe: ……). Hastalık Aktivite Skoru (DAS28) > 5,1'dir. Hastanın Rituksimab etken maddeli ilacı intravenöz yolla olmak üzere 6 (altı) ay süre ile kullanması uygundur. Tedaviler sağlık kurumunda uygulanacaktır.
[Başlangıç DAS28 Skoru: {S0}]
Hasta onay formu mevzuata uygun olarak doldurulmuştur. Hasta Onay Formu Seri No: {ONAY}`},
   {t:"Devam raporu (toplam Δ > 1,2)", dur:"6 ay", text:
`Aktif Romatoid Artriti bulunan hasta; biri Methotrexate olmak üzere en az 3 farklı hastalık modifiye edici antiromatizmal ilacı (DMARD) en az üçer ay kullanmış olmasına ve en az bir anti-TNF tedavisine rağmen [veya: anti-TNF tedavisi uygun görülmemiş / kontrendike olup] hastalık kontrol altına alınamamıştır. Hastalık Aktivite Skoru (DAS28) > 5,1 idi. Hastanın Rituksimab etken maddeli ilacı intravenöz yolla olmak üzere 6 (altı) ay süre ile kullanması uygundur. Tedaviler sağlık kurumunda uygulanacaktır. Hastanın DAS28 skorunda toplam 1,2 puandan fazla düşme vardır. Mevcut tedaviye cevap alınmaktadır.
[Başlangıç DAS28 Skoru: {S0}] [Yeni DAS28 Skoru: {S1}]
Hasta onay formu mevzuata uygun olarak doldurulmuştur. Hasta Onay Formu Seri No: {ONAY}`}
  ]}
 ]
},
{
 id:"axspa", title:"Ankilozan spondilit / aksiyel SpA", sub:"Teşhis kodu 09.01.6.2 · ICD M45 (nr-axSpA: M46.8)",
 groups:[
  {name:"Anti-TNF — aksiyel tutulum (AS ve nr-axSpA)", items:[
   {t:"1. rapor — başlangıç", dur:"3 ay", text:
`Aksiyel tutulumlu Ankilozan Spondilitli [veya: radyografik olarak Ankilozan Spondilit kanıtı olmayan aksiyel spondiloartritli] hastada, biri maksimum doz indometazin olmak üzere en az 3 farklı nonsteroid antiinflamatuvar ilacı maksimum dozunda kullanmasına rağmen yeterli cevap alınamamıştır. Bath Ankilozan Spondilit Hastalık Aktivite İndeksi (BASDAİ) {S0} (> 5)'tir. Bununla birlikte CRP normalden yüksektir / ESH > 28 mm/saat'tir / MR-sintigrafi ile aktif sakroileit-spondilit gösterilmiştir (…… tarihli tetkik: ……).
[İnfliksimab / golimumab / sertolizumab için ekleyin: Hasta daha önce …… etken maddeli anti-TNF ajanını kullanmış ancak yeterli yanıt alınamamıştır.]

Tedavi-Kullanım Dozu: Hastanın {ILAC} etken maddeli ilacı …… şekilde uygulanmak üzere 3 (üç) ay süre ile kullanması uygundur. "Mahallinde tedavisi sürdürülebilir". ${IGIF_STD}

${HEYET_ROM}`},
   {t:"2. rapor ve sonrası — devam (Δ ≥ 2)", dur:"6 ay", text:
`3 aydır {ILAC} kullanan aksiyel tutulumlu Ankilozan Spondilitli [veya: radyografik kanıtı olmayan aksiyel spondiloartritli] hastada, Bath Ankilozan Spondilit Hastalık Aktivite İndeksinde (BASDAİ) 2 puandan fazla düzelme olup (Başlangıç BASDAİ: {S0}, Mevcut BASDAİ: {S1}) 6 ay süre ile tedavisine devamı uygun görülmektedir.

Tedavi-Kullanım Dozu: Hastanın 6 ay süre ile {ILAC} etken maddeli ilacı …… uygulanarak kullanması uygundur. "Mahallinde tedavisi sürdürülebilir". ${IGIF_STD}

${HEYET_ROM}`}
  ]},
  {name:"Anti-TNF — periferik eklem tutulumlu AS", items:[
   {t:"1. rapor — başlangıç", dur:"3 ay", text:
`Periferik eklem tutulumlu Ankilozan Spondilitli hastada, maksimum dozda NSAİİ ile birlikte sulfasalazin veya metotreksattan birinin kullanılmasına rağmen yeterli cevap alınamamıştır. Bath Ankilozan Spondilit Hastalık Aktivite İndeksi (BASDAİ) {S0} (> 5)'tir. Bununla birlikte CRP normalden yüksektir / ESH > 28 mm/saat'tir.

Tedavi-Kullanım Dozu: Hastanın 3 ay süre ile {ILAC} etken maddeli ilacı …… şekilde uygulanarak kullanması uygundur. "Mahallinde tedavisi sürdürülebilir". ${IGIF_STD}

${HEYET_ROM}`},
   {t:"2. rapor ve sonrası — devam (Δ ≥ 2)", dur:"6 ay", text:
`3 aydır {ILAC} kullanan periferik eklem tutulumlu Ankilozan Spondilitli hastada, Bath Ankilozan Spondilit Hastalık Aktivite İndeksinde (BASDAİ) 2 puandan fazla düzelme olup (Başlangıç BASDAİ: {S0}, Mevcut BASDAİ: {S1}) 6 ay süre ile tedavisine devamı uygun görülmektedir.

Tedavi-Kullanım Dozu: Hastanın 6 ay süre ile {ILAC} etken maddeli ilacı …… şekilde uygulanarak kullanması uygundur. "Mahallinde tedavisi sürdürülebilir". ${IGIF_STD}

${HEYET_ROM}`}
  ]},
  {name:"Sekukinumab", items:[
   {t:"İlk rapor", dur:"4 ay (16 haftada değerlendirme)", text:
`Hastada aktif ankilozan spondilit (AS) tanısı mevcut olup, biri maksimum dozda indometazin olmak üzere en az üç farklı nonsteroid antiinflamatuvar ilacı (NSAİİ) maksimum dozlarda kullanmasına rağmen yeterli klinik yanıt alınamamıştır (BASDAİ: {S0} > 5). Ayrıca objektif inflamasyon göstergelerinden en az biri mevcuttur: eritrosit sedimentasyon hızı > 28 mm/s / normalin üst sınırını aşan CRP / MR'da aktif sakroileit-spondilit bulgusu (……). Bu nedenle SUT hükümleri kapsamında sekukinumab tedavisi endikasyonunu karşılamaktadır.

Tedavi planı: Sekukinumab 150 mg subkutan, hafta 0, 1, 2, 3, 4 dozlarını takiben her 4 haftada bir idame şeklinde uygulanacaktır. İlk doz hekim gözetiminde uygulanacak, enjeksiyon eğitimi sonrası mahallinde tedavisi sürdürülebilir. İlaç Güvenlik İzlem Formu ve Hasta Onay Formu düzenlenmiştir (İGİF No: {IGIF}, Onay Formu No: {ONAY}). 16 haftalık tedavi sonunda BASDAİ'de ≥ 2 puan düzelme sağlanması halinde tedaviye devam edilecektir.`},
   {t:"Devam raporu (Δ ≥ 2)", dur:"6 ay", text:
`Biri maksimum doz indometazin olmak üzere en az 3 farklı nonsteroid antiinflamatuvar ilaç maksimum dozunda kullanılmış olmasına rağmen yeterli cevap alınamayan aktif ankilozan spondilit tanılı erişkin hastaya sekukinumab etken maddeli ilaç tedavisi uygulandı. 16 haftalık ilaç kullanım süresi sonunda yapılan değerlendirmede hastanın BASDAİ ölçümünde 2 birimden fazla düzelme mevcuttur (Başlangıç BASDAİ: {S0}, Yeni BASDAİ: {S1}). Hastada tedaviye cevap alınmıştır. Hastanın ayda 1×1 150 mg subkutan sekukinumab tedavisine devam etmesi uygundur. Mahallinde tedavisi sürdürülebilir. İlaç Güvenlik İzlem Formu No: {IGIF}`}
  ]},
  {name:"Tofasitinib", items:[
   {t:"Aksiyel AS — ilk rapor (anti-TNF yetersiz / intolerans)", dur:"3 ay", text:
`Aksiyel tutulumlu Ankilozan Spondilit tanılı hasta; biri maksimum doz indometazin olmak üzere en az 3 nonsteroid antiinflamatuvar ilaç maksimum dozunda kullanılmış ve anti-TNF ilaçlardan en az biri kullanılmasına rağmen hastalık aktivitesi kontrol altına alınamamıştır [veya: anti-TNF ilaçlardan en az biri kullanılmış ve intolerans gelişmiştir]. Başlangıç BASDAİ: {S0}. Hastanın Tofasitinib etken maddeli ilacı günde 2 kez 5 mg tablet olarak 3 (üç) ay süre ile kullanması uygundur. Mahallinde tedavisi sürdürülebilir. ${IGIF_STD}`},
   {t:"Periferik AS — ilk rapor (anti-TNF yetersiz / intolerans)", dur:"3 ay", text:
`Periferik eklem tutulumlu Ankilozan Spondilit tanılı hasta; biri maksimum doz indometazin olmak üzere en az 3 nonsteroid antiinflamatuvar ilaç maksimum dozunda kullanılmış ve anti-TNF ilaçlardan en az biri uygun dozda kullanılmış olmasına rağmen hastalık aktivitesi kontrol altına alınamamıştır [veya: anti-TNF ilaçlardan en az biri kullanılmış ve intolerans gelişmiştir]. Başlangıç BASDAİ: {S0}. Hastanın Tofasitinib etken maddeli ilacı günde 2 kez 5 mg tablet olarak 3 (üç) ay süre ile kullanması uygundur. Mahallinde tedavisi sürdürülebilir. ${IGIF_STD}`},
   {t:"AS — ikinci rapor ve sonrası (Δ ≥ 2)", dur:"6 ay", text:
`Aksiyel [veya: periferik eklem] tutulumlu Ankilozan Spondilit tanılı hasta; biri maksimum doz indometazin olmak üzere en az 3 nonsteroid antiinflamatuvar ilaç maksimum dozunda kullanılmış ve anti-TNF ilaçlardan en az biri kullanılmış olmasına rağmen hastalık aktivitesi kontrol altına alınamamıştır [veya: intolerans gelişmiştir]. Ardından hasta Tofasitinib etken maddeli ilacı günde 2 kez 5 mg 3 (üç) ay süre ile kullanmıştır. Hastalık aktivitesi kontrol altına alınan ve BASDAİ'de 2 birimden fazla düzelme gözlenen (Başlangıç BASDAİ: {S0}, Güncel BASDAİ: {S1}) hastanın Tofasitinib etken maddeli ilaca günde 2 kez 5 mg tablet olarak 6 (altı) ay süre ile devam etmesi uygundur. Mahallinde tedavisi sürdürülebilir. ${IGIF_STD}`}
  ]},
  {name:"Upadasitinib", items:[
   {t:"Radyografik axSpA (AS) — başlangıç", dur:"3 ay", text:
`Hastada aktif ankilozan spondilit tanısı mevcut olup, biri maksimum dozda indometazin olmak üzere en az üç farklı nonsteroid antiinflamatuvar ilaç (NSAİİ) maksimum dozlarda kullanılmış olmasına rağmen ve anti-TNF tedavi ile yeterli yanıt elde edilemediği / anti-TNF tedaviye intoleransı olduğu için yeterli klinik yanıt alınamamıştır (BASDAİ > 5). Ayrıca objektif inflamasyon göstergelerinden en az biri mevcuttur (yüksek CRP, ESH veya MR'da aktif sakroileit). Bu nedenle upadasitinib tedavisi uygun görülmüştür. Hastanın tedavisi günde 1 kez upadasitinib 15 mg oral tablet olarak düzenlenmiştir. Başlangıç BASDAİ: {S0}. Güvenlik İzlem Formu No: {IGIF} — Hasta Onay Formu No: {ONAY}`},
   {t:"Radyografik axSpA (AS) — idame (Δ ≥ 2)", dur:"6 ay", text:
`Ankilozan spondiliti olan ve upadasitinib başlanmış olan erişkin hastada BASDAİ skorunda başlangıca göre 2 birimin üzerinde iyileşme olması sebebiyle upadasitinib tedavisine devam edilmesi uygun görülmüştür. Hastanın tedavisi günde 1 kez upadasitinib 15 mg oral tablet olarak devam edecektir. Başlangıç BASDAİ: {S0}, Güncel BASDAİ: {S1}. Güvenlik İzlem Formu No: {IGIF} — Hasta Onay Formu No: {ONAY}`},
   {t:"nr-axSpA — başlangıç", dur:"3 ay", text:
`Radyografik olmayan aksiyel spondiloartriti olan erişkin hastada biri maksimum dozda indometazin olmak üzere en az üç farklı nonsteroid antiinflamatuvar ilaç (NSAİİ) maksimum dozlarda kullanılmış olmasına rağmen ve anti-TNF tedavi ile yeterli yanıt elde edilemediği / anti-TNF tedaviye intoleransı olduğu için yeterli klinik yanıt alınamamıştır (BASDAİ > 5). Upadasitinib tedavisinin başlanması uygun görülmüştür. Hastanın tedavisi günde 1 kez upadasitinib 15 mg oral tablet olarak düzenlenmiştir. Başlangıç BASDAİ: {S0}. Güvenlik İzlem Formu No: {IGIF} — Hasta Onay Formu No: {ONAY}`},
   {t:"nr-axSpA — idame (Δ ≥ 2)", dur:"6 ay", text:
`Radyografik olmayan aksiyel spondiloartriti olan ve upadasitinib başlanmış olan erişkin hastada BASDAİ skorunda başlangıca göre 2 birimin üzerinde iyileşme olması sebebiyle upadasitinib tedavisine devam edilmesi uygun görülmüştür. Hastanın tedavisi günde 1 kez upadasitinib 15 mg oral tablet olarak devam edecektir. Başlangıç BASDAİ: {S0}, Güncel BASDAİ: {S1}. Güvenlik İzlem Formu No: {IGIF} — Hasta Onay Formu No: {ONAY}`}
  ]}
 ]
},
{
 id:"psa", title:"Psöriatik artrit", sub:"Teşhis kodu 09.01.6.4 · ICD M07.3 (L40.5)",
 groups:[
  {name:"Anti-TNF", items:[
   {t:"1. rapor — başlangıç", dur:"3 ay", text:
`Psöriatik Artritli hastada en az 3 farklı hastalık modifiye edici ilacı uygun dozunda en az üçer ay kullanmış olmasına rağmen hastalık aktivitesi kontrol altına alınamamıştır. Bir ay arayla yapılmış iki ayrı muayenede en az 3 hassas eklem ve en az 3 şiş eklem bulunmaktadır (…… tarihli muayene: … hassas / … şiş; …… tarihli muayene: … hassas / … şiş).
[İnfliksimab / golimumab / sertolizumab için ekleyin: Hasta daha önce …… etken maddeli anti-TNF ajanını kullanmış ancak yeterli yanıt alınamamıştır.]

Tedavi-Kullanım Dozu: Hastanın 3 ay süre ile {ILAC} etken maddeli ilacı …… şekilde uygulanarak kullanması uygundur. "Mahallinde tedavisi sürdürülebilir". ${IGIF_STD}

${HEYET_ROM}`},
   {t:"2. rapor ve sonrası — devam (PsARC yanıtı)", dur:"6 ay", text:
`3 aydır {ILAC} kullanan Psöriatik Artritli hastada başlangıca göre Psöriatik Artrit yanıt kriterlerine (PsARC) göre yanıt alındığından tedaviye devamı uygundur.

Tedavi-Kullanım Dozu: Hastanın 6 ay süre ile {ILAC} etken maddeli ilacı …… şekilde uygulanarak kullanması uygundur. "Mahallinde tedavisi sürdürülebilir". ${IGIF_STD}

${HEYET_ROM}`}
  ]},
  {name:"Sekukinumab", items:[
   {t:"İlk rapor", dur:"4 ay (16 haftada değerlendirme)", text:
`Hastada aktif psöriatik artrit tanısı mevcut olup, en az üç farklı hastalık modifiye edici antiromatizmal ilacı (DMARD) [örn. metotreksat, leflunomid, sulfasalazin] 3'er ay süreyle uygun dozlarda kullanmasına rağmen hastalık aktivitesi kontrol altına alınamamıştır. Sonrasında en az bir anti-TNF ajanını 3 ay süreyle kullanmış olmasına rağmen klinik yanıt sağlanamamıştır. Hastanın son iki muayenesinde (bir ay arayla) en az üç hassas ve üç şiş eklem varlığıyla aktif hastalık devam etmektedir. Bu bulgular kapsamında sekukinumab tedavisi endikasyonunu karşılamaktadır.

Tedavi planı: Sekukinumab 150 mg (veya 300 mg; hastalık şiddetine göre) subkutan, hafta 0, 1, 2, 3, 4 dozlarını takiben her 4 haftada bir idame şeklinde uygulanacaktır. İlk doz hekim gözetiminde uygulanacak, enjeksiyon eğitimi sonrası mahallinde tedavisi sürdürülebilir. İlaç Güvenlik İzlem Formu ve Hasta Onay Formu düzenlenmiştir (İGİF No: {IGIF}, Onay Formu No: {ONAY}). 16 haftalık kullanım sonunda PsARC kriterlerine göre yanıt değerlendirilecek; yeterli yanıt durumunda tedaviye devam edilecektir.`},
   {t:"Devam raporu (PsARC yanıtı)", dur:"6 ay", text:
`Aktif psöriatik artrit teşhisli erişkin hasta, en az 3 farklı hastalık modifiye edici antiromatizmal ilacı 3'er ay süre ile uygun dozda kullanmış ve sonrasında en az bir anti-TNF ajanı 3 ay süreyle kullanmış olmasına rağmen hastalık aktivitesi kontrol altına alınamamış ve sekukinumab etken maddeli ilaç tedavisi almıştı. Hastanın 16 haftalık ilaç kullanım süresi sonunda yapılan değerlendirmede PsARC'a göre yeterli cevap alınmıştır. Hastanın ayda 1×… 150 mg subkutan sekukinumab tedavisine devam etmesi uygundur. Mahallinde tedavisi sürdürülebilir. İlaç Güvenlik İzlem Formu No: {IGIF}`}
  ]},
  {name:"İksekizumab", items:[
   {t:"Başlangıç raporu", dur:"4 ay (16 haftada değerlendirme)", text:
`Hastada aktif psöriatik artrit tanısı mevcut olup, en az üç farklı hastalık modifiye edici antiromatizmal ilacı (DMARD) üçer ay süreyle uygun dozlarda kullanmasına rağmen hastalık aktivitesi kontrol altına alınamamıştır. Sonrasında en az bir anti-TNF ajanı üç ay süreyle uygulanmış ancak yeterli klinik yanıt sağlanamamıştır. Hastanın son iki muayenesinde (bir ay arayla) en az üç hassas ve üç şiş eklem varlığı ile aktif hastalık devam etmektedir. Bu koşullar iksekizumab tedavisi endikasyonunu karşılamaktadır.

Tedavi planı: İksekizumab 80 mg subkutan; başlangıçta 160 mg (2 enjeksiyon), ardından her 4 haftada bir 80 mg idame şeklinde uygulanacaktır. İlk doz hekim gözetiminde uygulanacak, enjeksiyon eğitimi sonrasında mahallinde tedavisi sürdürülebilir. İlaç Güvenlik İzlem Formu ve Hasta Onay Formu düzenlenmiştir (İGİF No: {IGIF}, Onay Formu No: {ONAY}).`},
   {t:"Devam raporu (PsARC yanıtı)", dur:"6 ay", text:
`Hastada aktif psöriatik artrit tanısı mevcut olup iksekizumab tedavisi altındadır. 16 haftalık tedavi sonunda yapılan değerlendirmede Psöriatik Artrit Yanıt Kriterlerine (PsARC) göre yeterli klinik yanıt elde edilmiştir. Tedaviye devam kararı verilmiştir. İksekizumab 80 mg subkutan, her 4 haftada bir uygulanmaya devam edilecektir. İlaç Güvenlik İzlem Formu ve Hasta Onay Formu düzenlenmiş (İGİF No: {IGIF}), mahallinde tedavisi sürdürülebilir.`}
  ]},
  {name:"Ustekinumab", items:[
   {t:"Başlangıç raporu", dur:"3 ay", text:
`Hasta en az 3 farklı hastalık modifiye edici antiromatizmal ilacı (hidroksiklorokin, sulfasalazin, metotreksat) uygun dozda en az 3'er ay kullanmış ve sonrasında en az bir anti-TNF ajanı 3 ay süreyle kullanmış olmasına rağmen hastalık aktivitesi kontrol altına alınamamıştır. Hastanın birer ay ara ile yapılan iki kontrolünde üç hassas ve üç şiş eklem saptanmıştır. Hastanın 3 ay süre ile ustekinumab tedavisi alması uygundur. Mahallinde tedavisini sürdürebilir. Hasta Onay Formu Seri No: {ONAY} — İGİF No: {IGIF}`},
   {t:"Devam raporu (PsARC yanıtı)", dur:"6 ay", text:
`Hasta en az 3 farklı hastalık modifiye edici antiromatizmal ilacı uygun dozda en az 3'er ay kullanmış ve sonrasında en az bir anti-TNF ajanı 3 ay süreyle kullanmış olmasına rağmen hastalık aktivitesi kontrol altına alınamamıştı. Hastaya {TARIH} tarihinde ustekinumab tedavisi başlanmıştır. 3 ay sonra yapılan kontrolde hastada PsARC yanıtı elde edilmiştir. Hastanın 6 ay süre ile ustekinumab tedavisine devam etmesi uygundur. Mahallinde tedavisini sürdürebilir. Hasta Onay Formu Seri No: {ONAY} — İGİF No: {IGIF}`}
  ]},
  {name:"Tofasitinib", items:[
   {t:"İlk rapor (anti-TNF yetersiz / intolerans)", dur:"6 ay (12 haftada değerlendirme)", text:
`Psöriatik Artrit tanılı hasta; en az 3 farklı hastalık modifiye edici antiromatizmal ilacı 3'er ay süre ile uygun dozda kullanmış ve sonrasında en az bir anti-TNF ajanı 3 ay süre ile kullanmış olmasına rağmen hastalık aktivitesi kontrol altına alınamamıştır (bir ay arayla yapılmış iki ayrı muayenede en az üç hassas eklem ve en az üç şiş eklem mevcuttur) [veya: ardından bir anti-TNF ajanı kullanmış ve intolerans gelişmiştir]. Hastanın Tofasitinib etken maddeli ilacı günde 2 kez 5 mg tablet olarak 6 (altı) ay süre ile kullanması uygundur. Mahallinde tedavisi sürdürülebilir. ${IGIF_STD}`},
   {t:"İkinci rapor ve sonrası (PsARC yanıtı)", dur:"6 ay", text:
`Psöriatik Artrit tanılı hasta; en az 3 farklı hastalık modifiye edici antiromatizmal ilacı uygun dozunda en az üçer ay olmak üzere kullanmış, ardından en az bir anti-TNF ajanı 3 ay süre ile kullanmış olmasına rağmen hastalık aktivitesi kontrol altına alınamamıştır [veya: intolerans gelişmiştir]. Ardından hasta Tofasitinib etken maddeli ilacı günde 2 kez 5 mg 6 (altı) ay süre ile kullanmıştır. Hastalık aktivitesi kontrol altına alınan ve PsARC'a göre düzelme gözlenen hastanın Tofasitinib etken maddeli ilaca günde 2 kez 5 mg tablet olarak 6 (altı) ay süre ile devam etmesi uygundur. Mahallinde tedavisi sürdürülebilir. ${IGIF_STD}`}
  ]},
  {name:"Upadasitinib", items:[
   {t:"Başlangıç raporu", dur:"3 ay", text:
`Hastada aktif psöriatik artrit tanısı mevcut olup, en az üç farklı DMARD 3'er ay uygun dozda kullanılmış, sonrasında en az bir anti-TNF ajanı 3 ay kullanılmış olmasına rağmen / anti-TNF tedaviye intoleransı olduğu için klinik yanıt sağlanamamıştır. Son iki muayenede (bir ay arayla) en az üç hassas ve üç şiş eklem bulunmasıyla aktif hastalık devam etmektedir. Tedavi planı: Upadasitinib 15 mg günde bir kez oral uygulanacaktır. Güvenlik İzlem Formu No: {IGIF} — Hasta Onay Formu No: {ONAY}`},
   {t:"Devam raporu (PsARC yanıtı)", dur:"6 ay", text:
`Psöriatik artriti olan ve upadasitinib başlanmış olan erişkin hastada PsARC kriterlerine göre yeterli yanıt alınması sebebiyle upadasitinib tedavisine devam edilmesi uygun görülmüştür. Hastanın tedavisi günde 1 kez 1 tablet upadasitinib 15 mg oral olarak devam edecektir. Güvenlik İzlem Formu No: {IGIF} — Hasta Onay Formu No: {ONAY}`}
  ]},
  {name:"Barisitinib", items:[
   {t:"Başlangıç raporu", dur:"3 ay", text:
`Hastada aktif psöriatik artrit tanısı mevcut olup, en az üç farklı DMARD 3'er ay süreyle uygun dozlarda kullanılmış ve sonrasında en az bir anti-TNF ajanı 3 ay süreyle uygulanmış olmasına rağmen yeterli klinik yanıt alınamamıştır. Hastanın son iki muayenesinde (bir ay arayla) en az üç hassas ve üç şiş eklem varlığı ile aktif hastalık devam etmektedir. Bu nedenle barisitinib tedavisi endikasyonunu karşılamaktadır. Tedavi planı: Barisitinib 4 mg (veya 2 mg) günde bir kez oral uygulanacaktır. İlk doz hekim gözetiminde başlanacak, tedaviye mahallinde devam edilecektir. İlaç Güvenlik İzlem Formu ve Hasta Onay Formu düzenlenmiştir (İGİF No: {IGIF}, Onay No: {ONAY}).`},
   {t:"Devam raporu (PsARC yanıtı)", dur:"6 ay", text:
`Barisitinib tedavisi altındaki psöriatik artritli hastada 16 haftalık kullanım sonunda PsARC kriterlerine göre yeterli yanıt alınmıştır. Tedaviye devam edilmesi uygundur. İlaç Güvenlik İzlem Formu No: {IGIF} — Hasta Onay Formu No: {ONAY}`}
  ]}
 ]
},
{
 id:"otoinflam", title:"FMF ve otoinflamatuvar hastalıklar", sub:"Anakinra ve kanakinumab · AOSD M06.1 · TRAPS/HIDS/CAPS L50.8",
 groups:[
  {name:"Anakinra — erişkin Still hastalığı (ICD M06.1, kırılım: RA)", items:[
   {t:"Başlangıç raporu", dur:"1 yıl", text:
`Orta-yüksek şiddette, aktif sistemik özellikleri olan Erişkin Başlangıçlı Still Hastalığı tanılı hastada; en az 3 ay süreyle metotreksat ve/veya diğer hastalık modifiye edici antiromatizmal ilaç (DMARD) tedavisine rağmen hastalık aktivitesi devam etmektedir. Hastanın Anakinra 100 mg/gün subkutan tedavisi ile devam etmesi uygundur. Tedaviler sağlık kurumunda uygulanacaktır. ${ONAY_STD}`},
   {t:"Devam raporu", dur:"1 yıl", text:
`Orta-yüksek şiddette, aktif sistemik özellikleri olan Erişkin Başlangıçlı Still Hastalığı tanılı hastada; en az 3 ay süreyle metotreksat ve/veya diğer DMARD tedavisine rağmen hastalık aktivitesi devam etmekteydi. Hastanın Anakinra 100 mg/gün subkutan tedavisi ile devam etmesi uygundur. Hastalık aktivitesinde gerileme mevcuttur. Tedaviler sağlık kurumunda uygulanacaktır. Tedavisi mahallinde sürdürülebilir. ${ONAY_STD}`}
  ]},
  {name:"Anakinra — amiloidozu olmayan FMF", items:[
   {t:"Başlangıç — kolşisin altında akut faz yüksekliği / ataklar", dur:"3 ay", text:
`Amiloidoz saptanmamış FMF tanılı hastadır. Kolşisin içeren öncelikle yurt içi ve yurt dışı (ithal) preparatların toplam en az 6 ay süreyle tolere edilebilen maksimum dozda kullanılmasına rağmen, son 3 ay içinde akut faz reaktanları yüksekliği ile kanıtlanmış en az üç atak geçiren hastanın Anakinra 100 mg/gün subkutan tedavisi ile devam edilmesi uygundur. Tedaviler sağlık kurumunda uygulanacaktır. Hastalık aktivitesi klinik ve laboratuvar bulgularla doğrulanmıştır.
C-Reaktif Protein (CRP) [referans aralığı: … mg/L] — [Tarih-1] … mg/L; [Tarih-2] … mg/L; [Tarih-3] … mg/L (atak dönemlerine ait, en az 15 gün arayla, ÜSN'nin ≥ 2 katı).
${ONAY_STD}`},
   {t:"Devam — akut faz yüksekliği ile başlanan hasta", dur:"6 ay", text:
`Amiloidoz saptanmamış FMF tanılı hastadır. Kolşisin içeren öncelikle yurt içi ve yurt dışı (ithal) preparatların toplam en az 6 ay süreyle kullanılmasına rağmen, son 3 ay içinde akut faz reaktanları yüksekliği ile kanıtlanmış en az üç atak geçiren hastaya Anakinra 100 mg/gün subkutan tedavisi başlanmıştı. Hastanın Anakinra tedavisi altında klinik olarak atak sıklığında azalma ve akut faz reaktanlarında belirgin düşüş izlenmiştir. Mevcut tedaviye yanıt alınmaktadır. Tedaviye devam edilmesi uygundur. Tedavisi mahallinde sürdürülebilir.
Başlangıç raporundaki CRP değerleri: [Tarih-1] … mg/L; [Tarih-2] … mg/L; [Tarih-3] … mg/L.
${ONAY_STD}`},
   {t:"Başlangıç — kolşisin intoleransı", dur:"3 ay", text:
`Amiloidoz saptanmamış FMF tanılı hastadır. Kolşisin içeren öncelikle yurt içi ve yurt dışı (ithal) preparatların kullanılmasına rağmen ciddi intoleransı olması nedeniyle kolşisin tedavisi kullanılamamaktadır. Bu durum {TARIH} tarihli …… branşı konsültasyon notu ile belgelidir. Hastada hastalık aktivitesi devam etmektedir. Bu nedenle Anakinra 100 mg/gün subkutan tedavisi ile devam edilmesi uygundur. Tedaviler sağlık kurumunda uygulanacaktır. Hastalık aktivitesi klinik ve laboratuvar bulgularla doğrulanmıştır. ${ONAY_STD}`},
   {t:"Devam — kolşisin intoleransı ile başlanan hasta", dur:"6 ay", text:
`Amiloidoz saptanmamış FMF tanılı hastadır. Ciddi intoleransı nedeniyle kolşisin tedavisi kullanılamamaktadır; bu durum {TARIH} tarihli …… branşı konsültasyon notu ile belgelidir. Hastanın Anakinra tedavisi altında klinik olarak atak sıklığında azalma ve akut faz reaktanlarında belirgin düşüş izlenmiştir. Mevcut tedaviye yanıt alınmaktadır. Anakinra 100 mg/gün subkutan tedavisine devam edilmesi uygundur. Tedavisi mahallinde sürdürülebilir. ${ONAY_STD}`}
  ]},
  {name:"Anakinra — amiloidozu olan FMF", items:[
   {t:"Başlangıç raporu", dur:"1 yıl", text:
`Amiloidozu olan Ailevi Akdeniz Ateşi (FMF) hastasıdır. {TARIH} tarihli …… biyopsisi (…… no'lu patoloji raporu) ile AA tipi amiloidoz gösterilmiştir. Anakinra 100 mg/gün subkutan tedavisi başlanması uygundur. Tedaviler sağlık kurumunda uygulanacaktır. ${ONAY_STD}`},
   {t:"Devam raporu", dur:"1 yıl", text:
`Amiloidozu olan Ailevi Akdeniz Ateşi (FMF) hastasıdır. {TARIH} tarihli …… biyopsisi (…… no'lu patoloji raporu) ile AA tipi amiloidoz gösterilmiştir. Anakinra tedavisi ile klinik bulgularda ve akut faz reaktanlarında gerileme izlenmiştir. Anakinra 100 mg/gün subkutan tedavisine devam edilmesi uygundur. Tedaviler sağlık kurumunda uygulanacaktır. Tedavisi mahallinde sürdürülebilir. ${ONAY_STD}`}
  ]},
  {name:"Anakinra — TRAPS / HIDS-MKD ve CAPS (ICD L50.8)", items:[
   {t:"Periyodik ateş sendromu — başlangıç", dur:"3 ay", text:
`Genetik olarak patojenik mutasyonla tanı almış Periyodik Ateş Sendromu (TRAPS / HIDS-MKD) hastasıdır (…… geni, …… varyantı; {TARIH} tarihli genetik rapor). Anakinra 100 mg/gün subkutan tedavisi ile başlanması uygundur. Tedaviler sağlık kurumunda uygulanacaktır. Tedavinin klinik ve laboratuvar yanıtları düzenli aralıklarla değerlendirilecektir. ${ONAY_STD}`},
   {t:"Periyodik ateş sendromu — devam", dur:"1 yıl", text:
`Genetik olarak patojenik mutasyonla tanı almış Periyodik Ateş Sendromu (TRAPS / HIDS-MKD) hastasıdır. Anakinra tedavisi sonrası klinik bulgular ve akut faz reaktanlarında gerileme izlenmiştir. Anakinra 100 mg/gün subkutan tedavisine devam edilmesi uygundur. Tedaviler sağlık kurumunda uygulanacaktır. Tedavisi mahallinde sürdürülebilir. ${ONAY_STD}`},
   {t:"CAPS — başlangıç", dur:"3 ay", text:
`Kriyopirin İlişkili Periyodik Sendromlardan (CAPS; Muckle-Wells sendromu / NOMID-CINCA) …… tanısı ile izlenen hastadır. Anakinra tedavisi ile başlanması uygundur. Tedaviler sağlık kurumunda uygulanacaktır. Tedavinin klinik ve laboratuvar yanıtları düzenli aralıklarla değerlendirilecektir. ${ONAY_STD}`},
   {t:"CAPS — devam", dur:"3 ay", text:
`Kriyopirin İlişkili Periyodik Sendrom (CAPS; Muckle-Wells sendromu / NOMID-CINCA) tanısı ile izlenen hastadır. Anakinra tedavisi sonrası klinik bulgular ve akut faz reaktanlarında gerileme izlenmiştir. Anakinra 100 mg/gün subkutan tedavisine devam edilmesi uygundur. Tedaviler sağlık kurumunda uygulanacaktır. Tedavisi mahallinde sürdürülebilir. ${ONAY_STD}`}
  ]},
  {name:"Kanakinumab — FMF", items:[
   {t:"Amiloidozu olmayan FMF — anakinra sonrası geçiş", dur:"3 ay", text:
`Hastanın 6 aydan fazla süreyle kolşisinin tolere edilebilir maksimum dozlarını kullanmasına rağmen son 3 ay içinde akut faz reaktan yüksekliğine eşlik eden en az 3 atak öyküsü mevcuttur. Hasta bu süreçte anakinra tedavisi almış, ancak 3 ay düzenli kullanımına rağmen yeterli klinik ve laboratuvar yanıt alınamamıştır [veya: anakinra ile ciddi enjeksiyon yeri reaksiyonu / intolerans gelişmiştir; {TARIH} tarihli …… branşı konsültasyon notu ile belgelidir]. İlgili branş (romatoloji) tarafından düzenlenmiş konsültasyon notu ve CRP kayıtları rapora eklenmiştir. Bu nedenlerle kanakinumab tedavisine geçilmesi uygun görülmüştür. Tedavisini mahallinde sürdürebilir.
C-Reaktif Protein (CRP) [referans aralığı: … mg/L] — 1. [Tarih-1] … mg/L; 2. [Tarih-2] … mg/L; 3. [Tarih-3] … mg/L (atak dönemleri, en az 15 gün arayla, ÜSN'nin ≥ 2 katı).
Kanakinumab 150 mg (≥ 40 kg) veya 2 mg/kg (≥ 7,5–≤ 40 kg), subkutan, her 4 haftada bir uygulanacaktır. Hasta Onay Formu No: {ONAY} — İGİF No: {IGIF}`},
   {t:"Amiloidozu olan FMF — anakinra sonrası geçiş", dur:"1 yıl", text:
`Hastada yapılan …… biyopsisinde ({TARIH} tarihli, …… no'lu patoloji raporu) AA tipi amiloid birikimi saptanmış olup FMF'e bağlı, biyopsi ile kanıtlanmış AA amiloidoz tanısı mevcuttur. Hasta öncesinde anakinra tedavisi almış, ancak 3 ay düzenli kullanımına rağmen yeterli yanıt alınamamıştır [veya: ciddi yan etki gelişmiştir; ilgili branş hekimlerince hazırlanmış konsültasyon notu rapora eklenmiştir]. Bu gerekçelerle kanakinumab tedavisine geçilmesi uygun görülmüştür. Tedavisini mahallinde sürdürebilir.
Kanakinumab 150 mg (≥ 40 kg) veya 2 mg/kg (≥ 7,5–≤ 40 kg), subkutan, 4 haftada bir uygulanacaktır. Hasta Onay Formu No: {ONAY} — İGİF No: {IGIF}`},
   {t:"Kanakinumab — devam raporu", dur:"3 ay (amiloidozlu FMF 1 yıl)", text:
`FMF tanılı hastaya kolşisin ve anakinra tedavilerine yeterli yanıt alınamaması nedeniyle kanakinumab tedavisi başlanmıştı. Düzenli 3 aylık uygulama sonrasında atak sıklık ve şiddetinde azalma ve akut faz reaktanlarında gerileme izlenmiştir (Başlangıç CRP: {S0} mg/L, Güncel CRP: {S1} mg/L). Mevcut tedaviye yanıt alınmaktadır; kanakinumab tedavisine 4 haftada bir devam edilmesi uygundur. [6 ay ataksız ve akut faz normal ise: Doz aralığı SUT'a uygun olarak …… haftaya açılmıştır.] Tedavisini mahallinde sürdürebilir. Hasta Onay Formu No: {ONAY} — İGİF No: {IGIF}`}
  ]}
 ]
},
{
 id:"vaskulit", title:"Vaskülitler ve Behçet", sub:"Rituksimab (GPA/MPA) · İnfliksimab (Behçet, teşhis kodu 15.02)",
 groups:[
  {name:"Rituksimab — GPA / MPA (ICD M31.3, M31.7)", items:[
   {t:"Başlangıç — siklofosfamide dirençli", dur:"1 ay (6 aydan önce tekrarlanamaz)", text:
`Siklofosfamide dirençli ciddi, aktif granülomatöz polianjit (Wegener granülomatozu) / mikroskobik polianjit tanılı hastanın tedavisinde, glukokortikoidlerle kombine olarak Rituksimab 1000 mg IV, 1. ve 15. gün (2 doz) uygulanması gerekmektedir. Tedaviler sağlık kurumunda uygulanacaktır. ${ONAY_STD}`},
   {t:"Başlangıç — siklofosfamid verilemeyen", dur:"1 ay (6 aydan önce tekrarlanamaz)", text:
`Siklofosfamid tedavisi verilemeyen (gerekçe: ……) ciddi, aktif granülomatöz polianjit (Wegener granülomatozu) / mikroskobik polianjit tanılı hastanın tedavisinde, glukokortikoidlerle kombine olarak Rituksimab 1000 mg IV, 1. ve 15. gün (2 doz) uygulanması gerekmektedir. Tedaviler sağlık kurumunda uygulanacaktır. ${ONAY_STD}`},
   {t:"Devam raporu (idame)", dur:"6 ay", text:
`Siklofosfamide dirençli / siklofosfamid verilemeyen ciddi, aktif granülomatöz polianjit / mikroskobik polianjit tanılı hastanın tedavisinde glukokortikoidlerle kombine olarak Rituksimab 1000 mg IV, 1. ve 15. gün (2 doz) uygulanmıştı. Mevcut tedaviye cevap alınmaktadır. Rituksimab idame tedavisine (…… mg, …… ayda bir) devam edilmesi gereklidir. Tedavisini mahallinde sürdürebilir. Tedaviler sağlık kurumunda uygulanacaktır. ${ONAY_STD}`}
  ]},
  {name:"İnfliksimab — Behçet hastalığı (teşhis kodu 15.02)", items:[
   {t:"1. rapor — başlangıç", dur:"3 ay süreli kurul/uzman raporu", text:
`Lokal ve sistemik steroidler, azatiyoprin, siklosporin ve/veya interferona dirençli / intoleran Behçet hastalığı ile ilişkili üveit / vaskülit / nörolojik tutulum / gastrointestinal tutulum hastasında birden fazla hastalık modifiye edici antiromatizmal ilacı (DMARD) en az 3 ay kullanmış olmasına rağmen yanıt alınamamıştır. [Üveit için: Üveit tanısı göz hastalıkları uzman hekimi tarafından konulmuştur.]

Tedavi-Kullanım Dozu: Hastanın 3 ay süre ile infliksimab IV infüzyonunu 0., 2. ve 6. haftalarda ve ardından 8 haftada bir 5 mg/kg dozunda (…… mg; hastanın kilosuna göre belirlenir) kullanması uygundur. "Mahallinde tedavisi sürdürülebilir". ${IGIF_STD}

2. ve 3. basamak sağlık kuruluşlarında düzenlenecek kurul/uzman raporunda en az bir romatoloji veya göz hastalıkları (sadece üveit endikasyonunda) uzmanı yer almalıdır.`},
   {t:"2. rapor ve sonrası — devam", dur:"6 ay", text:
`3 aydır infliksimab kullanan Behçet hastalığı ile ilişkili üveit / vaskülit / nörolojik tutulum / gastrointestinal tutulum hastasında yanıt yeterli bulunduğundan infliksimab tedavisine devamı uygun görülmektedir.

Tedavi-Kullanım Dozu: Hastanın 6 ay süre ile infliksimab IV infüzyonunu 8 haftada bir 5 mg/kg dozunda (…… mg) kullanması uygundur. "Mahallinde tedavisi sürdürülebilir". ${IGIF_STD}

2. ve 3. basamak sağlık kuruluşlarında düzenlenecek kurul/uzman raporunda en az bir romatoloji veya göz hastalıkları (sadece üveit endikasyonunda) uzmanı yer almalıdır.`}
  ]}
 ]
},
{
 id:"bilgi", title:"Rapor bilgileri ve kodlar", sub:"Teşhis kodları, İGİF, csDMARD rapor notları",
 html:`
 <h3>Teşhis kodları (SUT Ek-4/D)</h3>
 <table>
 <tr><th>09.01.5.1</th><td>Romatoid artrit — M05–M06, M08.0, M08.2, M08.3 (erişkin Still için M06.1, kırılım RA)</td></tr>
 <tr><th>09.01.6.2</th><td>Ankilozan spondilit — M45</td></tr>
 <tr><th>09.01.6.1</th><td>Andiferansiye spondiloartropati — M46.5, M46.8–M46.9</td></tr>
 <tr><th>09.01.6.4</th><td>Psöriatik artrit — M07.0, M07.3</td></tr>
 <tr><th>09.01.6.3</th><td>Enteropatik artropatiler — M07.4–M07.6</td></tr>
 <tr><th>09.01.1</th><td>SLE ve ilişkili sendromlar — M32</td></tr>
 <tr><th>09.01.4 / 09.01.10</th><td>Skleroderma, MKBH — M34.9, M35.1 / Progresif sistemik skleroz — M34.0</td></tr>
 <tr><th>09.01.5.2</th><td>Sjögren sendromu — M35.0</td></tr>
 <tr><th>09.01.7.1 / 7.2</th><td>Dermatomiyozit — M33.0, M33.1, M33.9 / Polimiyozit — M33.2</td></tr>
 <tr><th>09.01.3.x</th><td>Vaskülitler: 3.1 EGPA M30.1 · 3.5 PAN M30.0 · 3.6 PMR M35.3 · 3.7 Takayasu M31.4 · 3.8 Temporal arterit M31.6 · 3.9 GPA M31.3 · 3.10 MPA M31.7</td></tr>
 <tr><th>15.02</th><td>Behçet hastalığı — M35.2</td></tr>
 <tr><th>L50.8</th><td>TRAPS, HIDS/MKD, CAPS (anakinra/kanakinumab)</td></tr>
 <tr><th>05.03</th><td>Diffüz interstisyel akciğer hastalıkları — J84 (nintedanib IPF/PF-İAH); SSc-İAH için 09.01.10 M34.0</td></tr>
 </table>
 <h3>İlaç Güvenlik İzlem Formu (İGİF)</h3>
 <ul>
 <li>Biyolojikler için TÜFAM yerine e-reçete üzerinden İGİF oluşturulur; enfeksiyon hastalıkları veya göğüs hastalıkları onayı olmadan ilaç reçeteye düşmez.</li>
 <li>Her 6 ayda yenilenir; yeni form önceki formdan en erken 170 gün sonra oluşturulabilir.</li>
 <li>Kod yalnızca oluşturan hekimde görünür — kodu hastaya verin (SMS ile de gider). Raporda ve tercihen reçetede belirtin.</li>
 <li>JAK inhibitörleri ve rituksimab için halen TÜFAM formu kullanılmaktadır (kılavuz tarihi itibarıyla).</li>
 </ul>
 <h3>csDMARD ve diğer ilaçlar için rapor notları</h3>
 <table>
 <tr><th>Metotreksat</th><td>RA, PsA, AS, bağ dokusu, SLE, skleroderma. Oral 2,5 mg: örn. 1×6 tb/hafta. SC formlar ilgili mg 1×/hafta yazılıp doz şeması açıklamaya eklenir.</td></tr>
 <tr><th>Leflunomid</th><td>RA ve PsA (10 mg ödenmez). 1×1/gün veya doğrudan mg; doz şeması açıklamaya yazılmalı.</td></tr>
 <tr><th>Hidroksiklorokin</th><td>2×1 tb veya 2×200 mg; RA, bağ dokusu, SLE, skleroderma.</td></tr>
 <tr><th>Sulfasalazin</th><td>2×2 / 3×2 tb (maks. ödeme 3×2); RA ve AS'de rapor çıkarılabilir; doz şeması açıklamaya.</td></tr>
 <tr><th>Azatioprin / MMF / siklofosfamid</th><td>Uzman hekim raporu, 2 yıla kadar; vaskülit, SSc, RA, Sjögren, Behçet vb. için SB ek onayı alınmadan kullanılabilecek endikasyon dışı listede (272).</td></tr>
 <tr><th>Bosentan</th><td>SSc dijital ülser: KKB + IV iloprost ≥3 ay yanıtsız, >4 dijital ülser (≥1'i >2 mm derin, ağrılı). 3. basamak, romatolog, 6 ay; her reçetede Hasta Kayıt Formu-1.</td></tr>
 <tr><th>Sildenafil / tadalafil</th><td>KKB ve vazodilatöre dirençli dijital ülser/Raynaud — I73.0 hem teşhiste hem raporda; tadalafil 1×20 mg.</td></tr>
 <tr><th>Nintedanib (SSc-İAH)</th><td>DLCO ≤ %30 [kılavuz metni], FVC ≥ %50, HRCT'de > %10 fibrozis; en az bir romatolog + bir göğüs uzmanı; 1 yıl; FVC ≥ %10 düzelme → sonlandırma, ≥ %10 kötüleşme yoksa devam.</td></tr>
 </table>
 <p class="note warn">Kılavuzdaki nintedanib SSc-İAH DLCO eşiği ("≤ %30") IPF ölçütüyle (DLCO &gt; %35) çelişkili görünmektedir; rapor öncesi SUT 4.2.x metninden doğrulayın.</p>
 `
}
];
