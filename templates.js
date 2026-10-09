/* Romatoloji Masası — rapor şablonları
   RA, axSpA, PsA, GPA/MPA, Takayasu, DHA, üveit: FTR Online "Biyolojik İlaç Rapor Açıklamaları" (ftronline.com, Ekim 2026) metinleri.
   FMF/otoinflamatuvar ve Behçet: TRD-G Anti-Romatizmal İlaçlar Kılavuzu (Kasım 2025).
   Alanlar: t başlık · dur rapor süresi · ilac e-rapor ilaç satırı · note kopyalanmayan hatırlatma · text rapor açıklaması.
   Yer tutucular: {S0} başlangıç skoru, {S1} güncel skor, {IGIF} İGİF seri no, {ONAY} onay formu seri no, {TARIH} tarih. */

const TPL_STAMP = "RA, axSpA, PsA ve vaskülit/üveit metinleri FTR Online rapor açıklamalarından (ftronline.com, Ekim 2026); FMF/otoinflamatuvar ve Behçet metinleri TRD-G Anti-Romatizmal İlaçlar Kılavuzu (Kasım 2025) esas alınarak hazırlanmıştır. Kurul kompozisyonu ve reçete yetkisi rapor metnine yazılmaz; SUT kriterleri bölümündedir.";

const TEMPLATES = [
 {
  "id": "ra",
  "title": "Romatoid artrit",
  "sub": "Teşhis kodu 09.01.5.1 · ICD M05, M06",
  "groups": [
   {
    "name": "Adalimumab",
    "items": [
     {
      "t": "İlk rapor",
      "dur": "3 ay",
      "ilac": "Adalimumab 40mg | kullanıma hazır enjektör | 1×1 | iki haftada bir | subkütan",
      "text": "Romatoid Artrit tanılı hasta; biri Methotrexate olmak üzere en az 3 farklı hastalık modifiye edici antiromatizmal ilacı (DMARD) (Sülfasalazin, Hidroksiklorokin) en az üçer ay kullanmış olmasına rağmen hastalık aktivitesi kontrol altına alınamamıştır. Hastalık Aktivite Skoru (DAS) 28>5,1’dir. Hastanın Adalimumab iki haftada bir kez 40mg dozunda subkütan uygulanmak üzere 3(üç) ay süre ile kullanması uygundur. “Mahallinde tedavisi sürdürülebilir”.\nİlaç Güvenlik İzlem Formu Tarih ve Seri No: {TARIH} / {IGIF}\nHasta tarafından imzalı İlaç Kullanım Onay Formu Seri No: {ONAY}\nBaşlangıç DAS28 Skoru= {S0}"
     },
     {
      "t": "2. rapor",
      "dur": "3 ay",
      "ilac": "Adalimumab 40mg | kullanıma hazır enjektör | 1×1 | iki haftada bir | subkütan",
      "text": "Romatoid Artrit tanılı, biri Methotrexate olmak üzere en az 3 farklı hastalık modifiye edici antiromatizmal ilacı (DMARD) (Sülfasalazin, Hidroksiklorokin) en az üçer ay kullanmış olmasına rağmen hastalık aktivitesi kontrol altına alınamayan [Hastalık Aktivite Skoru (DAS) 28>5,1 olan] hastaya Adalimumab tedavisi 3(üç) ay süre ile uygulanmıştı. Hastada tedaviye cevap alınmıştır. DAS 28 skorunda 0,6 puandan fazla düşme mevcuttur. Adalimumab tedavisine her 2 hafta bir 40mg dozunda subkütan uygulanmak üzere 3(üç) ay daha devam edilmesi uygundur. “Mahallinde tedavisi sürdürülebilir”.\nİlaç Güvenlik İzlem Formu Tarih ve Seri No: {TARIH} / {IGIF}\nHasta tarafından imzalı İlaç Kullanım Onay Formu Seri No: {ONAY}\nBaşlangıç DAS28 Skoru= {S0} Yeni DAS28 Skoru = {S1}"
     },
     {
      "t": "Devam raporu",
      "dur": "6 ay",
      "ilac": "Adalimumab 40mg | kullanıma hazır enjektör | 1×1 | iki haftada bir | subkütan",
      "text": "Romatoid Artrit tanılı, biri Methotrexate olmak üzere en az 3 farklı hastalık modifiye edici antiromatizmal ilacı (DMARD) (Sülfasalazin, Hidroksiklorokin) en az üçer ay kullanmış olmasına rağmen hastalık aktivitesi kontrol altına alınamayan [Hastalık Aktivite Skoru (DAS) 28 5,1’den büyük olan] hastaya Adalimumab tedavisi başlanmış ve tedaviye cevap alındığı için devam edilmişti. Hastanın DAS 28 skorunda toplam 1,2 puandan fazla düşme vardır. Mevcut tedaviye cevap alınmaktadır. Hastanın Adalimumab tedavisini iki haftada bir kez 40mg dozunda subkütan uygulanmak üzere 6(altı) ay süre ile kullanması uygundur. “Mahallinde tedavisi sürdürülebilir”.\nİlaç Güvenlik İzlem Formu Tarih ve Seri No: {TARIH} / {IGIF}\nHasta tarafından imzalı İlaç Kullanım Onay Formu Seri No: {ONAY}\nBaşlangıç DAS28 Skoru= {S0} Yeni DAS28 Skoru = {S1}"
     }
    ]
   },
   {
    "name": "Etanersept",
    "items": [
     {
      "t": "İlk rapor",
      "dur": "3 ay",
      "ilac": "Etanercept 50mg (SGKF0G) | kullanıma hazır enjektör | 1×1 | haftada bir | subkütan",
      "text": "Romatoid Artrit tanılı hasta; biri Methotrexate olmak üzere en az 3 farklı hastalık modifiye edici antiromatizmal ilacı (DMARD) (Sülfasalazin, Hidroksiklorokin) en az üçer ay kullanmış olmasına rağmen hastalık aktivitesi kontrol altına alınamamıştır. Hastalık Aktivite Skoru (DAS) 28>5,1’dir. Hastanın Etanercept haftalık 50mg dozunda subkütan uygulanmak üzere 3(üç) ay süre ile kullanması uygundur. “Mahallinde tedavisi sürdürülebilir”.\nİlaç Güvenlik İzlem Formu Tarih ve Seri No: {TARIH} / {IGIF}\nHasta tarafından imzalı İlaç Kullanım Onay Formu Seri No: {ONAY}\nBaşlangıç DAS28 Skoru= {S0}"
     },
     {
      "t": "2. rapor",
      "dur": "3 ay",
      "ilac": "Etanercept 50mg (SGKF0G) | kullanıma hazır enjektör | 1×1 | haftada bir | subkütan",
      "text": "Romatoid Artrit tanılı, biri Methotrexate olmak üzere en az 3 farklı hastalık modifiye edici antiromatizmal ilacı (DMARD) (Sülfasalazin, Hidroksiklorokin) en az üçer ay kullanmış olmasına rağmen hastalık aktivitesi kontrol altına alınamayan [Hastalık Aktivite Skoru (DAS) 28>5,1 olan] hastaya Etanercept tedavisi 3(üç) ay süre ile uygulanmıştı. Hastada tedaviye cevap alınmıştır. DAS 28 skorunda 0,6 puandan fazla düşme mevcuttur. Etanercept tedavisine haftalık 50mg dozunda subkütan uygulanmak üzere 3(üç) ay daha devam edilmesi uygundur. “Mahallinde tedavisi sürdürülebilir”.\nİlaç Güvenlik İzlem Formu Tarih ve Seri No: {TARIH} / {IGIF}\nHasta tarafından imzalı İlaç Kullanım Onay Formu Seri No: {ONAY}\nBaşlangıç DAS28 Skoru= {S0} Yeni DAS28 Skoru = {S1}"
     },
     {
      "t": "Devam raporu",
      "dur": "6 ay",
      "ilac": "Etanercept 50mg (SGKF0G) | kullanıma hazır enjektör | 1×1 | haftada bir | subkütan",
      "text": "Romatoid Artrit tanılı, biri Methotrexate olmak üzere en az 3 farklı hastalık modifiye edici antiromatizmal ilacı (DMARD) (Sülfasalazin, Hidroksiklorokin) en az üçer ay kullanmış olmasına rağmen hastalık aktivitesi kontrol altına alınamayan [Hastalık Aktivite Skoru (DAS) 28 5,1’den büyük olan] hastaya Etanercept tedavisi başlanmış ve tedaviye cevap alındığı için devam edilmişti. Hastanın DAS 28 skorunda toplam 1,2 puandan fazla düşme vardır. Mevcut tedaviye cevap alınmaktadır. Hastanın Etanercept tedavisini haftalık 50mg dozunda subkütan uygulanmak üzere 6(altı) ay süre ile kullanması uygundur. “Mahallinde tedavisi sürdürülebilir”.\nİlaç Güvenlik İzlem Formu Tarih ve Seri No: {TARIH} / {IGIF}\nHasta tarafından imzalı İlaç Kullanım Onay Formu Seri No: {ONAY}\nBaşlangıç DAS28 Skoru= {S0} Yeni DAS28 Skoru = {S1}"
     }
    ]
   },
   {
    "name": "Golimumab",
    "items": [
     {
      "t": "İlk rapor",
      "dur": "3 ay",
      "ilac": "Golimumab 50mg (SGKFYF) | kullanıma hazır enjektör | 1×1 | ayda bir | subkütan",
      "text": "Romatoid Artrit tanılı hasta; biri Methotrexate olmak üzere en az 3 farklı hastalık modifiye edici antiromatizmal ilacı (DMARD) (Sülfasalazin, Hidroksiklorokin) en az üçer ay kullanmış olmasına rağmen hastalık aktivitesi kontrol altına alınamamıştır. Hastalık Aktivite Skoru (DAS) 28>5,1’dir. Hastanın Golimumab aylık 50mg dozunda subkütan uygulanmak üzere 3(üç) ay süre ile kullanması uygundur. “Mahallinde tedavisi sürdürülebilir”.\nİlaç Güvenlik İzlem Formu Tarih ve Seri No: {TARIH} / {IGIF}\nHasta tarafından imzalı İlaç Kullanım Onay Formu Seri No: {ONAY}\nBaşlangıç DAS28 Skoru= {S0}"
     },
     {
      "t": "2. rapor",
      "dur": "3 ay",
      "ilac": "Golimumab 50mg (SGKFYF) | kullanıma hazır enjektör | 1×1 | ayda bir | subkütan",
      "text": "Romatoid Artrit tanılı, biri Methotrexate olmak üzere en az 3 farklı hastalık modifiye edici antiromatizmal ilacı (DMARD) (Sülfasalazin, Hidroksiklorokin) en az üçer ay kullanmış olmasına rağmen hastalık aktivitesi kontrol altına alınamayan [Hastalık Aktivite Skoru (DAS) 28>5,1 olan] hastaya Golimumab tedavisi 3(üç) ay süre ile uygulanmıştı. Hastada tedaviye cevap alınmıştır. DAS 28 skorunda 0,6 puandan fazla düşme mevcuttur. Golimumab tedavisine aylık 50mg dozunda subkütan uygulanmak üzere 3(üç) ay daha devam edilmesi uygundur. “Mahallinde tedavisi sürdürülebilir”.\nİlaç Güvenlik İzlem Formu Tarih ve Seri No: {TARIH} / {IGIF}\nHasta tarafından imzalı İlaç Kullanım Onay Formu Seri No: {ONAY}\nBaşlangıç DAS28 Skoru= {S0} Yeni DAS28 Skoru = {S1}"
     },
     {
      "t": "Devam raporu",
      "dur": "6 ay",
      "ilac": "Golimumab 50mg (SGKFYF) | kullanıma hazır enjektör | 1×1 | ayda bir | subkütan",
      "text": "Romatoid Artrit tanılı, biri Methotrexate olmak üzere en az 3 farklı hastalık modifiye edici antiromatizmal ilacı (DMARD) (Sülfasalazin, Hidroksiklorokin) en az üçer ay kullanmış olmasına rağmen hastalık aktivitesi kontrol altına alınamayan [Hastalık Aktivite Skoru (DAS) 28 5,1’den büyük olan] hastaya Golimumab tedavisi başlanmış ve tedaviye cevap alındığı için devam edilmişti. Hastanın DAS 28 skorunda toplam 1,2 puandan fazla düşme vardır. Mevcut tedaviye cevap alınmaktadır. Hastanın Golimumab tedavisini aylık 50mg dozunda subkütan uygulanmak üzere 6(altı) ay süre ile kullanması uygundur. “Mahallinde tedavisi sürdürülebilir”.\nİlaç Güvenlik İzlem Formu Tarih ve Seri No: {TARIH} / {IGIF}\nHasta tarafından imzalı İlaç Kullanım Onay Formu Seri No: {ONAY}\nBaşlangıç DAS28 Skoru= {S0} Yeni DAS28 Skoru = {S1}"
     }
    ]
   },
   {
    "name": "İnfliksimab",
    "items": [
     {
      "t": "İlk rapor",
      "dur": "3 ay",
      "ilac": "İnfliximab 100mg (3mg/kg) | liyofilize toz içeren flakon | 8 haftada bir | intravenöz",
      "text": "Romatoid Artrit tanılı hasta; biri Methotrexate olmak üzere en az 3 farklı hastalık modifiye edici antiromatizmal ilacı (DMARD) (Sülfasalazin, Hidroksiklorokin) en az üçer ay kullanmış olmasına rağmen hastalık aktivitesi kontrol altına alınamamıştır. Diğer anti-TNF ilaçlardan en az birini kullanmış ve cevap alınamamıştır. Hastalık Aktivite Skoru (DAS) 28>5,1’dir. Hastanın İnfliximab intravenöz yolla 3mg/kg dozunda hesaplanarak 0., 2. ve 6. haftalarda uygulanacak yükleme dozunu takiben her 8 haftada bir olmak üzere 3(üç) ay süre ile kullanması uygundur.\nİlaç Güvenlik İzlem Formu Tarih ve Seri No: {TARIH} / {IGIF}\nHasta tarafından imzalı İlaç Kullanım Onay Formu Seri No: {ONAY}\nBaşlangıç DAS28 Skoru= {S0}"
     },
     {
      "t": "2. rapor",
      "dur": "3 ay",
      "ilac": "İnfliximab 100mg (3mg/kg) | liyofilize toz içeren flakon | 8 haftada bir | intravenöz",
      "text": "Romatoid Artrit tanılı, biri Methotrexate olmak üzere en az 3 farklı hastalık modifiye edici antiromatizmal ilacı (DMARD) (Sülfasalazin, Hidroksiklorokin) en az üçer ay kullanmış olmasına ve diğer anti-TNF ilaçlardan en az birini kullanmasına rağmen hastalık aktivitesi kontrol altına alınamayan (cevap alınamayan) [Hastalık Aktivite Skoru (DAS28) >5,1 olan] hastaya İnfliximab tedavisi 3(üç) ay süre ile uygulanmıştı. Hastada tedaviye cevap alınmıştır. DAS 28 skorunda 0,6 puandan fazla düşme mevcuttur. İnfliximab tedavisine her 8 haftada bir 3mg/kg dozunda intravenöz uygulanmak üzere 3(üç) ay daha devam edilmesi uygundur.\nİlaç Güvenlik İzlem Formu Tarih ve Seri No: {TARIH} / {IGIF}\nHasta tarafından imzalı İlaç Kullanım Onay Formu Seri No: {ONAY}\nBaşlangıç DAS28 Skoru= {S0} Yeni DAS28 Skoru = {S1}"
     },
     {
      "t": "Devam raporu",
      "dur": "6 ay",
      "ilac": "İnfliximab 100mg (3mg/kg) | liyofilize toz içeren flakon | 8 haftada bir | intravenöz",
      "text": "Romatoid Artrit tanılı, biri Methotrexate olmak üzere en az 3 farklı hastalık modifiye edici antiromatizmal ilacı (DMARD) (Sülfasalazin, Hidroksiklorokin) en az üçer ay kullanmış olmasına ve diğer anti-TNF ilaçlardan en az birini kullanmasına rağmen hastalık aktivitesi kontrol altına alınamayan (cevap alınamayan) [Hastalık Aktivite Skoru (DAS28) >5,1 olan] hastaya İnfliximab tedavisi başlanmış ve tedaviye cevap alındığı için devam edilmişti. Hastanın DAS 28 skorunda toplam 1,2 puandan fazla düşme vardır. Mevcut tedaviye cevap alınmaktadır. Hastanın İnfliximab tedavisini her 8 haftada bir 3mg/kg dozunda intravenöz uygulanmak üzere 6(altı) ay süre ile kullanması uygundur.\nİlaç Güvenlik İzlem Formu Tarih ve Seri No: {TARIH} / {IGIF}\nHasta tarafından imzalı İlaç Kullanım Onay Formu Seri No: {ONAY}\nBaşlangıç DAS28 Skoru= {S0} Yeni DAS28 Skoru = {S1}"
     }
    ]
   },
   {
    "name": "Sertolizumab pegol",
    "items": [
     {
      "t": "İlk rapor",
      "dur": "3 ay",
      "ilac": "Sertolizumab Pegol 200mg (SGKFZS) | kullanıma hazır enjektör | 1×1 | 2 haftada bir | subkütan",
      "text": "Romatoid Artrit tanılı erişkin hastada; biri Metotreksat olmak üzere en az 3 farklı hastalık modifiye edici antiromatizmal ilaç en az üçer ay kullanılmış olmasına rağmen hastalık aktivitesi kontrol altına alınamamıştır. Hastalık Aktivite Skoru (DAS) 28 > 5,1 olan hastada ilk 3 doz 1×2 olmak üzere her 2 haftada bir Sertolizumab Pegol 200 mg yükleme dozu ile tedaviye başlanması uygun görülmüştür. “3(Üç) Yükleme Dozu” uygulamasından sonra, tedaviye 2 haftada bir 1×1 olarak Sertolizumab Pegol 200 mg ile devam edilmesi uygundur. “Mahallinde tedavisi sürdürülebilir”.\nİlaç Güvenlik İzlem Formu Tarih ve Seri No: {TARIH} / {IGIF}\nHasta tarafından imzalı İlaç Kullanım Onay Formu Seri No: {ONAY}\nBaşlangıç DAS28 Skoru= {S0}"
     },
     {
      "t": "2. rapor",
      "dur": "6 ay",
      "ilac": "Sertolizumab Pegol 200mg (SGKFZS) | kullanıma hazır enjektör | 1×1 | 2 haftada bir | subkütan",
      "text": "Romatoid Artrit tanılı, biri Methotrexate olmak üzere en az 3 farklı hastalık modifiye edici antiromatizmal ilacı (DMARD) (Sülfasalazin, Hidroksiklorokin) en az üçer ay kullanmış olmasına rağmen hastalık aktivitesi kontrol altına alınamayan [Hastalık Aktivite Skoru (DAS) 28>5,1 olan] hastaya Sertolizumab Pegol tedavisi 3(üç) ay süre ile uygulanmıştı. Hastada tedaviye cevap alınmıştır. DAS 28 skorunda 1,2 puandan fazla düşme mevcuttur. Sertolizumab Pegol tedavisine her 2 haftada bir 200mg 1×1 dozunda subkütan uygulanmak üzere 6(altı) ay daha devam edilmesi uygundur. “Mahallinde tedavisi sürdürülebilir”.\nİlaç Güvenlik İzlem Formu Tarih ve Seri No: {TARIH} / {IGIF}\nHasta tarafından imzalı İlaç Kullanım Onay Formu Seri No: {ONAY}\nBaşlangıç DAS28 Skoru= {S0} Yeni DAS28 Skoru = {S1}"
     },
     {
      "t": "Devam raporu",
      "dur": "6 ay",
      "ilac": "Sertolizumab Pegol 200mg (SGKFZS) | kullanıma hazır enjektör | 1×1 | 2 haftada bir | subkütan",
      "text": "Romatoid Artrit tanılı, biri Methotrexate olmak üzere en az 3 farklı hastalık modifiye edici antiromatizmal ilacı (DMARD) (Sülfasalazin, Hidroksiklorokin) en az üçer ay kullanmış olmasına rağmen hastalık aktivitesi kontrol altına alınamayan [Hastalık Aktivite Skoru (DAS) 28 5,1’den büyük olan] hastaya Sertolizumab Pegol tedavisi başlanmış ve tedaviye cevap alındığı için devam edilmişti. Hastanın DAS 28 skorunda toplam 1,2 puandan fazla düşme vardır. Mevcut tedaviye cevap alınmaktadır. Hastanın Sertolizumab Pegol tedavisini her 2 haftada bir 200mg 1×1 dozunda subkütan uygulanmak üzere 6(altı) ay süre ile kullanması uygundur. “Mahallinde tedavisi sürdürülebilir”.\nİlaç Güvenlik İzlem Formu Tarih ve Seri No: {TARIH} / {IGIF}\nHasta tarafından imzalı İlaç Kullanım Onay Formu Seri No: {ONAY}\nBaşlangıç DAS28 Skoru= {S0} Yeni DAS28 Skoru = {S1}"
     }
    ]
   },
   {
    "name": "Rituksimab",
    "items": [
     {
      "t": "İlk rapor",
      "dur": "6 ay",
      "ilac": "Rituksimab 500mg | konsantre solüsyon içeren flakon | 1×2 | 6 ayda bir (0 ve 15. gün infüzyon) | intravenöz",
      "text": "Aktif Romatoid Artriti bulunan; bir veya daha fazla anti TNF tedavilerine rağmen hastalığı kontrol edilemeyen (DAS 28 SKORU >5.1 olan) (veya TNF inhibitörü başlanması uygun olmayan/görülmeyen veya TNF inhibitörlerine karşı intoleransı olan) erişkin hastanın Methotrexate ile kombinasyon halinde Rituksimab intravenöz olarak her 6 ayda bir tekrarlanan 0. ve 2. haftalarda 1000mg ardışık iki doz şeklinde 6(altı) ay süre ile kullanması uygundur.\nİlaç Güvenlik İzlem Formu Tarih ve Seri No: {TARIH} / {IGIF}\nHasta tarafından imzalı İlaç Kullanım Onay Formu Seri No: {ONAY}\nBaşlangıç DAS28 Skoru= {S0}"
     },
     {
      "t": "Devam raporu",
      "dur": "6 ay",
      "ilac": "Rituksimab 500mg | konsantre solüsyon içeren flakon | 1×2 | 6 ayda bir (0 ve 15. gün infüzyon) | intravenöz",
      "text": "Aktif Romatoid Artriti bulunan; bir veya daha fazla anti TNF tedavilerine rağmen hastalığı kontrol edilemeyen (DAS 28 SKORU >5.1 olan) (veya TNF inhibitörü başlanması uygun olmayan/görülmeyen veya TNF inhibitörlerine karşı intoleransı olan) erişkin hastaya Methotrexate ile kombinasyon halinde Rituksimab tedavisi 6(altı) ay süre ile uygulanmıştı. Hastada tedaviye cevap alınmıştır. DAS 28 skorunda 1,2 puandan fazla düşme mevcuttur. Hastanın Methotrexate ile kombinasyon halinde Rituksimab tedavisini intravenöz olarak her 6 ayda bir tekrarlanan 0. ve 2. haftalarda 1000mg ardışık iki doz şeklinde 6(altı) ay süre ile kullanması uygundur.\nİlaç Güvenlik İzlem Formu Tarih ve Seri No: {TARIH} / {IGIF}\nHasta tarafından imzalı İlaç Kullanım Onay Formu Seri No: {ONAY}\nBaşlangıç DAS28 Skoru= {S0} Yeni DAS28 Skoru = {S1}"
     }
    ]
   },
   {
    "name": "Abatasept",
    "items": [
     {
      "t": "İlk rapor",
      "dur": "3 ay",
      "ilac": "Abatacept 250mg | liyofilize toz içeren flakon | 1×2 – 1×3 – 1×4 | 4 haftada bir | intravenöz · Abatacept 125mg | kullanıma hazır enjektör | 1×1 | haftada bir | subkütan",
      "text": "Aktif Romatoid Artriti bulunan hasta; biri Methotrexate olmak üzere en az 3 farklı hastalık modifiye edici antiromatizmal ilacı (DMARD) (Sülfasalazin, Hidroksiklorokin) en az üçer ay kullanmış olmasına veya en az bir anti TNF tedavisine rağmen hastalık aktivitesi kontrol altına alınamamıştır. Hastalık Aktivite Skoru (DAS) 28>5,1’dir. Hastanın Methotrexate kullanımına ilaveten Abatacept tedavisinin intravenöz formunu (vücut ağırlığı 60kg’dan az ise 500mg dozunda, 60-100kg arasında ise 750mg dozunda, >100kg ise 1000mg dozunda hesaplanarak) 0., 2. ve 4. haftalarda uygulanacak yükleme dozunu takiben her 4 haftada bir olmak üzere 3(üç) ay süre ile kullanması, subkütan formunu ise vücut ağırlığına göre yukarıda tarif edilmiş dozda bir seferlik İV yükleme uygulamasını takiben haftada bir kez 125 mg dozunda kullanımı uygundur.\nİlaç Güvenlik İzlem Formu Tarih ve Seri No: {TARIH} / {IGIF}\nHasta tarafından imzalı İlaç Kullanım Onay Formu Seri No: {ONAY}\nBaşlangıç DAS28 Skoru= {S0}"
     },
     {
      "t": "2. rapor",
      "dur": "3 ay",
      "ilac": "Abatacept 250mg | liyofilize toz içeren flakon | 1×2 – 1×3 – 1×4 | 4 haftada bir | intravenöz · Abatacept 125mg | kullanıma hazır enjektör | 1×1 | haftada bir | subkütan",
      "text": "Aktif Romatoid Artriti bulunan, biri Methotrexate olmak üzere en az 3 farklı hastalık modifiye edici antiromatizmal ilacı (DMARD) (Sülfasalazin, Hidroksiklorokin) en az üçer ay kullanmış olmasına veya en az bir anti TNF tedavisine rağmen hastalık aktivitesi kontrol altına alınamayan [Hastalık Aktivite Skoru (DAS) 28>5,1 olan] hastaya Methotrexate kullanımına ilaveten Abatacept tedavisi 3(üç) ay süre ile uygulanmıştı. Hastada tedaviye cevap alınmıştır. DAS 28 skorunda 0,6 puandan fazla düşme mevcuttur. Methotrexate kullanımına ilaveten Abatacept tedavisinin intravenöz formuna (vücut ağırlığı 60kg’dan az ise 500mg dozunda, 60-100kg arasında ise 750mg dozunda, >100kg ise 1000mg dozunda hesaplanarak) her 4 haftada bir, subkütan formuna ise haftada bir kez 125 mg dozunda olmak üzere 3(üç) ay daha devam edilmesi uygundur.\nİlaç Güvenlik İzlem Formu Tarih ve Seri No: {TARIH} / {IGIF}\nHasta tarafından imzalı İlaç Kullanım Onay Formu Seri No: {ONAY}\nBaşlangıç DAS28 Skoru= {S0} Yeni DAS28 Skoru = {S1}"
     },
     {
      "t": "Devam raporu",
      "dur": "6 ay",
      "ilac": "Abatacept 250mg | liyofilize toz içeren flakon | 1×2 – 1×3 – 1×4 | 4 haftada bir | intravenöz · Abatacept 125mg | kullanıma hazır enjektör | 1×1 | haftada bir | subkütan",
      "text": "Aktif Romatoid Artriti bulunan, biri Methotrexate olmak üzere en az 3 farklı hastalık modifiye edici antiromatizmal ilacı (DMARD) (Sülfasalazin, Hidroksiklorokin) en az üçer ay kullanmış olmasına veya en az bir anti TNF tedavisine rağmen hastalık aktivitesi kontrol altına alınamayan [Hastalık Aktivite Skoru (DAS) 28>5,1 olan] hastaya Methotrexate kullanımına ilaveten Abatacept tedavisi başlanmış ve tedaviye cevap alındığı için devam edilmişti. Hastanın DAS 28 skorunda toplam 1,2 puandan fazla düşme vardır. Mevcut tedaviye cevap alınmaktadır. Methotrexate kullanımına ilaveten Abatacept tedavisinin intravenöz formunu (vücut ağırlığı 60kg’dan az ise 500mg dozunda, 60-100kg arasında ise 750mg dozunda, >100kg ise 1000mg dozunda hesaplanarak) her 4 haftada bir, subkütan formunu ise haftada bir kez 125 mg dozunda olmak üzere 6(altı) ay süre ile kullanması uygundur.\nİlaç Güvenlik İzlem Formu Tarih ve Seri No: {TARIH} / {IGIF}\nHasta tarafından imzalı İlaç Kullanım Onay Formu Seri No: {ONAY}\nBaşlangıç DAS28 Skoru= {S0} Yeni DAS28 Skoru = {S1}"
     }
    ]
   },
   {
    "name": "Tosilizumab — subkütan",
    "items": [
     {
      "t": "İlk rapor",
      "dur": "3 ay",
      "ilac": "Tosilizumab 162mg | kullanıma hazır enjektör | 1×1 | haftada bir | subkütan",
      "text": "Aktif Romatoid Artriti bulunan hasta; biri Methotrexate olmak üzere en az 3 farklı hastalık modifiye edici antiromatizmal ilacı (DMARD) (Sülfasalazin, Hidroksiklorokin) en az üçer ay kullanmış olmasına veya en az bir anti TNF tedavisine rağmen hastalık aktivitesi kontrol altına alınamamıştır. Hastalık Aktivite Skoru (DAS) 28>5,1’dir. Hastanın Tosilizumab tedavisini subkütan yolla, haftada bir olmak üzere 3(üç) ay süre ile kullanması uygundur.\nİlaç Güvenlik İzlem Formu Tarih ve Seri No: {TARIH} / {IGIF}\nHasta tarafından imzalı İlaç Kullanım Onay Formu Seri No: {ONAY}\nBaşlangıç DAS28 Skoru= {S0}"
     },
     {
      "t": "2. rapor",
      "dur": "3 ay",
      "ilac": "Tosilizumab 162mg | kullanıma hazır enjektör | 1×1 | haftada bir | subkütan",
      "text": "Aktif Romatoid Artriti bulunan, biri Methotrexate olmak üzere en az 3 farklı hastalık modifiye edici antiromatizmal ilacı (DMARD) (Sülfasalazin, Hidroksiklorokin) en az üçer ay kullanmış olmasına veya en az bir anti TNF tedavisine rağmen hastalık aktivitesi kontrol altına alınamayan [Hastalık Aktivite Skoru (DAS) 28>5,1 olan] hastaya Tosilizumab tedavisi 3(üç) ay süre ile uygulanmıştı. Hastada tedaviye cevap alınmıştır. DAS 28 skorunda 0,6 puandan fazla düşme mevcuttur. Hastanın Tosilizumab tedavisine subkütan yolla, haftada bir olmak üzere 3(üç) ay süre daha devam etmesi uygundur.\nİlaç Güvenlik İzlem Formu Tarih ve Seri No: {TARIH} / {IGIF}\nHasta tarafından imzalı İlaç Kullanım Onay Formu Seri No: {ONAY}\nBaşlangıç DAS28 Skoru= {S0} Yeni DAS28 Skoru = {S1}"
     },
     {
      "t": "Devam raporu",
      "dur": "6 ay",
      "ilac": "Tosilizumab 162mg | kullanıma hazır enjektör | 1×1 | haftada bir | subkütan",
      "text": "Aktif Romatoid Artriti bulunan, biri Methotrexate olmak üzere en az 3 farklı hastalık modifiye edici antiromatizmal ilacı (DMARD) (Sülfasalazin, Hidroksiklorokin) en az üçer ay kullanmış olmasına veya en az bir anti TNF tedavisine rağmen hastalık aktivitesi kontrol altına alınamayan [Hastalık Aktivite Skoru (DAS) 28>5,1 olan] hastaya Tosilizumab tedavisi başlanmış ve tedaviye cevap alındığı için devam edilmişti. Hastanın DAS 28 skorunda toplam 1,2 puandan fazla düşme vardır. Mevcut tedaviye cevap alınmaktadır. Hastanın Tosilizumab tedavisine subkütan yolla, haftada bir olmak üzere 6(altı) ay süre daha devam etmesi uygundur.\nİlaç Güvenlik İzlem Formu Tarih ve Seri No: {TARIH} / {IGIF}\nHasta tarafından imzalı İlaç Kullanım Onay Formu Seri No: {ONAY}\nBaşlangıç DAS28 Skoru= {S0} Yeni DAS28 Skoru = {S1}"
     }
    ]
   },
   {
    "name": "Tosilizumab — intravenöz",
    "items": [
     {
      "t": "İlk rapor",
      "dur": "3 ay",
      "ilac": "Tosilizumab 400mg, 200mg, 80mg (8mg/kg) | konsantre solüsyon içeren flakon | 4 haftada bir | intravenöz",
      "text": "Aktif Romatoid Artriti bulunan hasta; biri Methotrexate olmak üzere en az 3 farklı hastalık modifiye edici antiromatizmal ilacı (DMARD) (Sülfasalazin, Hidroksiklorokin) en az üçer ay kullanmış olmasına veya en az bir anti TNF tedavisine rağmen hastalık aktivitesi kontrol altına alınamamıştır. Hastalık Aktivite Skoru (DAS) 28>5,1’dir. Hastanın Tosilizumab tedavisini her 4 haftada bir vücut ağırlığına göre 8mg/kg dozunda (maksimum 800mg olacak şekilde) intravenöz yolla olmak üzere 3(üç) ay süre ile kullanması uygundur.\nİlaç Güvenlik İzlem Formu Tarih ve Seri No: {TARIH} / {IGIF}\nHasta tarafından imzalı İlaç Kullanım Onay Formu Seri No: {ONAY}\nBaşlangıç DAS28 Skoru= {S0}"
     },
     {
      "t": "2. rapor",
      "dur": "3 ay",
      "ilac": "Tosilizumab 400mg, 200mg, 80mg (8mg/kg) | konsantre solüsyon içeren flakon | 4 haftada bir | intravenöz",
      "text": "Aktif Romatoid Artriti bulunan, biri Methotrexate olmak üzere en az 3 farklı hastalık modifiye edici antiromatizmal ilacı (DMARD) (Sülfasalazin, Hidroksiklorokin) en az üçer ay kullanmış olmasına veya en az bir anti TNF tedavisine rağmen hastalık aktivitesi kontrol altına alınamayan [Hastalık Aktivite Skoru (DAS) 28>5,1 olan] hastaya Tosilizumab tedavisi 3(üç) ay süre ile uygulanmıştı. Hastada tedaviye cevap alınmıştır. DAS 28 skorunda 0,6 puandan fazla düşme mevcuttur. Hastanın Tosilizumab tedavisine vücut ağırlığına göre 8mg/kg dozunda (maksimum 800mg olacak şekilde), her 4 haftada bir, intravenöz yolla olmak üzere 3(üç) ay süre daha devam etmesi uygundur.\nİlaç Güvenlik İzlem Formu Tarih ve Seri No: {TARIH} / {IGIF}\nHasta tarafından imzalı İlaç Kullanım Onay Formu Seri No: {ONAY}\nBaşlangıç DAS28 Skoru= {S0} Yeni DAS28 Skoru = {S1}"
     },
     {
      "t": "Devam raporu",
      "dur": "6 ay",
      "ilac": "Tosilizumab 400mg, 200mg, 80mg (8mg/kg) | konsantre solüsyon içeren flakon | 4 haftada bir | intravenöz",
      "text": "Aktif Romatoid Artriti bulunan, biri Methotrexate olmak üzere en az 3 farklı hastalık modifiye edici antiromatizmal ilacı (DMARD) (Sülfasalazin, Hidroksiklorokin) en az üçer ay kullanmış olmasına veya en az bir anti TNF tedavisine rağmen hastalık aktivitesi kontrol altına alınamayan [Hastalık Aktivite Skoru (DAS) 28>5,1 olan] hastaya Tosilizumab tedavisi başlanmış ve tedaviye cevap alındığı için devam edilmişti. Hastanın DAS 28 skorunda toplam 1,2 puandan fazla düşme vardır. Mevcut tedaviye cevap alınmaktadır. Hastanın Tosilizumab tedavisini vücut ağırlığına göre 8mg/kg dozunda (maksimum 800mg olacak şekilde), her 4 haftada bir, intravenöz yolla olmak üzere 6(altı) ay süre ile kullanması uygundur.\nİlaç Güvenlik İzlem Formu Tarih ve Seri No: {TARIH} / {IGIF}\nHasta tarafından imzalı İlaç Kullanım Onay Formu Seri No: {ONAY}\nBaşlangıç DAS28 Skoru= {S0} Yeni DAS28 Skoru = {S1}"
     }
    ]
   },
   {
    "name": "Barisitinib",
    "items": [
     {
      "t": "İlk rapor",
      "dur": "3 ay",
      "ilac": "Barisitinib 2-4mg | tablet | günlük 1×1 | oral",
      "text": "Romatoid Artrit tanılı hasta; en az bir Anti-TNF ajanı en az 3 ay süreyle kullanmış olmasına rağmen hastalık aktivitesi kontrol altına alınamamıştır. Hastalık Aktivite Skoru (DAS)28>5,1’dir. Hastanın Barisitinib günde 1 tablet günlük 4mg dozunda oral olmak üzere 3(üç) ay süre ile kullanması uygundur.\nİlaç Güvenlik İzlem Formu Tarih ve Seri No: {TARIH} / {IGIF}\nHasta tarafından imzalı İlaç Kullanım Onay Formu Seri No: {ONAY}\nBaşlangıç DAS28 Skoru= {S0}"
     },
     {
      "t": "2. rapor",
      "dur": "3 ay",
      "ilac": "Barisitinib 2-4mg | tablet | günlük 1×1 | oral",
      "text": "Romatoid Artrit tanılı, en az bir Anti-TNF ajanı en az 3 ay süreyle kullanmış olmasına rağmen hastalık aktivitesi kontrol altına alınamayan [Hastalık Aktivite Skoru (DAS) 28>5,1 olan] hastaya Barisitinib tedavisi 3(üç) ay süre ile uygulanmıştı. Hastada tedaviye cevap alınmıştır. DAS 28 skorunda 0,6 puandan fazla düşme mevcuttur. Barisitinib tedavisine günde 1 tablet, günlük 4mg dozunda oral olmak üzere 3(üç) ay daha devam edilmesi uygundur.\nİlaç Güvenlik İzlem Formu Tarih ve Seri No: {TARIH} / {IGIF}\nHasta tarafından imzalı İlaç Kullanım Onay Formu Seri No: {ONAY}\nBaşlangıç DAS28 Skoru= {S0} Yeni DAS28 Skoru = {S1}"
     },
     {
      "t": "Devam raporu",
      "dur": "6 ay",
      "ilac": "Barisitinib 2-4mg | tablet | günlük 1×1 | oral",
      "text": "Romatoid Artrit tanılı, en az bir Anti-TNF ajanı en az 3 ay süreyle kullanmış olmasına rağmen hastalık aktivitesi kontrol altına alınamayan [Hastalık Aktivite Skoru (DAS) 28 5,1’den büyük olan] hastaya Barisitinib tedavisi başlanmış ve tedaviye cevap alındığı için devam edilmişti. Hastanın DAS 28 skorunda toplam 1,2 puandan fazla düşme vardır. Mevcut tedaviye cevap alınmaktadır. Hastanın Barisitinib tedavisini günde 1 tablet, günlük 4mg dozunda, oral olmak üzere 6(ay) ay süre ile kullanması uygundur.\nİlaç Güvenlik İzlem Formu Tarih ve Seri No: {TARIH} / {IGIF}\nHasta tarafından imzalı İlaç Kullanım Onay Formu Seri No: {ONAY}\nBaşlangıç DAS28 Skoru= {S0} Yeni DAS28 Skoru = {S1}"
     }
    ]
   },
   {
    "name": "Tofasitinib",
    "items": [
     {
      "t": "İlk rapor",
      "dur": "3 ay",
      "ilac": "Tofacitinib 5mg, 11mg | tablet | günlük 2×1 | oral",
      "text": "Romatoid Artrit tanılı hasta; en az bir Anti-TNF ajanı en az 3 ay süreyle kullanmış olmasına rağmen hastalık aktivitesi kontrol altına alınamamıştır. Hastalık Aktivite Skoru (DAS) 28>5,1’dir. Hastanın Tofacitinib tedavisini 3(üç) ay süre ile kullanması uygundur.\nİlaç Güvenlik İzlem Formu Tarih ve Seri No: {TARIH} / {IGIF}\nHasta tarafından imzalı İlaç Kullanım Onay Formu Seri No: {ONAY}\nBaşlangıç DAS28 Skoru= {S0}"
     },
     {
      "t": "2. rapor",
      "dur": "3 ay",
      "ilac": "Tofacitinib 5mg, 11mg | tablet | günlük 2×1 | oral",
      "text": "Romatoid Artrit tanılı, en az bir Anti-TNF ajanı en az 3 ay süreyle kullanmış olmasına rağmen hastalık aktivitesi kontrol altına alınamayan [Hastalık Aktivite Skoru (DAS) 28>5,1 olan] hastaya Tofacitinib tedavisi 3(üç) ay süre ile uygulanmıştı. Hastada tedaviye cevap alınmıştır. DAS 28 skorunda 0,6 puandan fazla düşme mevcuttur. Tofacitinib tedavisine 3(üç) ay daha devam edilmesi uygundur.\nİlaç Güvenlik İzlem Formu Tarih ve Seri No: {TARIH} / {IGIF}\nHasta tarafından imzalı İlaç Kullanım Onay Formu Seri No: {ONAY}\nBaşlangıç DAS28 Skoru= {S0} Yeni DAS28 Skoru = {S1}"
     },
     {
      "t": "Devam raporu",
      "dur": "6 ay",
      "ilac": "Tofacitinib 5mg, 11mg | tablet | günlük 2×1 | oral",
      "text": "Romatoid Artrit tanılı, en az bir Anti-TNF ajanı en az 3 ay süreyle kullanmış olmasına rağmen hastalık aktivitesi kontrol altına alınamayan [Hastalık Aktivite Skoru (DAS) 28 5,1’den büyük olan] hastaya Tofacitinib tedavisi başlanmış ve tedaviye cevap alındığı için devam edilmişti. Hastanın DAS 28 skorunda toplam 1,2 puandan fazla düşme vardır. Mevcut tedaviye cevap alınmaktadır. Hastanın Tofacitinib tedavisini 6(ay) ay süre ile kullanması uygundur.\nİlaç Güvenlik İzlem Formu Tarih ve Seri No: {TARIH} / {IGIF}\nHasta tarafından imzalı İlaç Kullanım Onay Formu Seri No: {ONAY}\nBaşlangıç DAS28 Skoru= {S0} Yeni DAS28 Skoru = {S1}"
     }
    ]
   },
   {
    "name": "Upadasitinib",
    "items": [
     {
      "t": "İlk rapor",
      "dur": "3 ay",
      "ilac": "Upadasitinib 15mg | tablet | günlük 1×1 | oral",
      "text": "Romatoid Artrit tanılı hasta; en az bir Anti-TNF ajanı en az 3 ay süreyle kullanmış olmasına rağmen hastalık aktivitesi kontrol altına alınamamıştır. Hastalık Aktivite Skoru (DAS) 28>5,1’dir. Hastanın Upadasitinib günde 1 tablet günlük 15mg dozunda oral olmak üzere 3(üç) ay süre ile kullanması uygundur.\nİlaç Güvenlik İzlem Formu Tarih ve Seri No: {TARIH} / {IGIF}\nHasta tarafından imzalı İlaç Kullanım Onay Formu Seri No: {ONAY}\nBaşlangıç DAS28 Skoru= {S0}"
     },
     {
      "t": "2. rapor",
      "dur": "3 ay",
      "ilac": "Upadasitinib 15mg | tablet | günlük 1×1 | oral",
      "text": "Romatoid Artrit tanılı, en az bir Anti-TNF ajanı en az 3 ay süreyle kullanmış olmasına rağmen hastalık aktivitesi kontrol altına alınamayan [Hastalık Aktivite Skoru (DAS)28>5,1 olan] hastaya Upadasitinib tedavisi 3(üç) ay süre ile uygulanmıştı. Hastada tedaviye cevap alınmıştır. DAS 28 skorunda 0,6 puandan fazla düşme mevcuttur. Upadasitinib tedavisine günde 1 tablet, günlük 15mg dozunda oral olmak üzere 3(üç) ay daha devam edilmesi uygundur.\nİlaç Güvenlik İzlem Formu Tarih ve Seri No: {TARIH} / {IGIF}\nHasta tarafından imzalı İlaç Kullanım Onay Formu Seri No: {ONAY}\nBaşlangıç DAS28 Skoru= {S0} Yeni DAS28 Skoru = {S1}"
     },
     {
      "t": "Devam raporu",
      "dur": "6 ay",
      "ilac": "Upadasitinib 15mg | tablet | günlük 1×1 | oral",
      "text": "Romatoid Artrit tanılı, en az bir Anti-TNF ajanı en az 3 ay süreyle kullanmış olmasına rağmen hastalık aktivitesi kontrol altına alınamayan [Hastalık Aktivite Skoru (DAS)28>5,1 olan] hastaya Upadasitinib tedavisi başlanmış ve tedaviye cevap alındığı için devam edilmişti. Hastanın DAS 28 skorunda toplam 1,2 puandan fazla düşme vardır. Mevcut tedaviye cevap alınmaktadır. Hastanın Upadasitinib tedavisini günde 1 tablet, günlük 15mg dozunda, oral olmak üzere 6(ay) ay süre ile kullanması uygundur.\nİlaç Güvenlik İzlem Formu Tarih ve Seri No: {TARIH} / {IGIF}\nHasta tarafından imzalı İlaç Kullanım Onay Formu Seri No: {ONAY}\nBaşlangıç DAS28 Skoru= {S0} Yeni DAS28 Skoru = {S1}"
     }
    ]
   }
  ],
  "src": "FTR Online"
 },
 {
  "id": "axspa",
  "title": "Ankilozan spondilit / aksiyel SpA",
  "sub": "Teşhis kodu 09.01.6.2 · ICD M45",
  "groups": [
   {
    "name": "Adalimumab",
    "items": [
     {
      "t": "İlk rapor",
      "dur": "3 ay",
      "ilac": "Adalimumab 40mg | kullanıma hazır enjektör | 1×1 | iki haftada bir | subkütan",
      "text": "Aksiyel Tutulumlu Ankilozan Spondilit (AS) tanılı hastada; biri maksimum doz indometazin olmak üzere en az 3 nonsteroid antiinflamatuvar ilaç maksimum dozunda kullanılmış olmasına rağmen yeterli cevap alınamamıştır. Hastanın BASDAİ ölçümü >5 (bununla birlikte eritrosit sedimantasyon hızı >28 mm/s veya normalin üst sınırını aşan CRP değeri veya MR/sintigrafi ile gösterilmiş aktif sakroiliit/spondiliti vardır). Hastanın Adalimumab tedavisini iki haftada bir kez 40mg dozunda Subkütan uygulanmak üzere 3(üç) ay süre ile kullanması uygundur. “Mahallinde tedavisi sürdürülebilir”.\nİlaç Güvenlik İzlem Formu Tarih ve Seri No: {TARIH} / {IGIF}\nHasta tarafından imzalı İlaç Kullanım Onay Formu Seri No: {ONAY}\nBaşlangıç BASDAI= {S0}"
     },
     {
      "t": "Devam raporu",
      "dur": "6 ay",
      "ilac": "Adalimumab 40mg | kullanıma hazır enjektör | 1×1 | iki haftada bir | subkütan",
      "text": "Aksiyel Tutulumlu Ankilozan Spondilit (AS) tanılı veya Radyografik Olarak AS Kanıtı Olmayan Aksiyel Spondilartrit tanılı, biri maksimum doz indometazin olmak üzere en az 3 nonsteroid antiinflamatuvar ilaç maksimum dozunda kullanılmış olmasına rağmen yeterli cevap alınamayan hastaya Adalimumab tedavisi uygulanmıştı. Hastada tedaviye cevap alınmıştır ve tedaviye cevap devam etmektedir (BASDAİ’de 2 birimden fazla düzelme devam etmektedir). Hastanın Adalimumab tedavisini her 2 hafta bir 40mg dozunda Subkütan uygulanmak üzere 6(altı) ay süre ile kullanması uygundur. “Mahallinde tedavisi sürdürülebilir”.\nİlaç Güvenlik İzlem Formu Tarih ve Seri No: {TARIH} / {IGIF}\nHasta tarafından imzalı İlaç Kullanım Onay Formu Seri No: {ONAY}\nBaşlangıç BASDAI= {S0} Yeni BASDAI= {S1}"
     }
    ]
   },
   {
    "name": "Etanersept",
    "items": [
     {
      "t": "İlk rapor",
      "dur": "3 ay",
      "ilac": "Etanercept 50mg (SGKF0G) | kullanıma hazır enjektör | 1×1 | haftada bir | subkütan",
      "text": "Aksiyel Tutulumlu Ankilozan Spondilit (AS) tanılı hastada; biri maksimum doz indometazin olmak üzere en az 3 nonsteroid antiinflamatuvar ilaç maksimum dozunda kullanılmış olmasına rağmen yeterli cevap alınamamıştır. Hastanın BASDAİ ölçümü >5,1 (bununla birlikte eritrosit sedimantasyon hızı >28 mm/s veya normalin üst sınırını aşan CRP değeri veya MR/sintigrafi ile gösterilmiş aktif sakroiliit/spondiliti vardır). Hastanın Etanercept tedavisini haftalık 50mg dozunda subkütan uygulanmak üzere 3(üç) ay süre ile kullanması uygundur. “Mahallinde tedavisi sürdürülebilir”.\nİlaç Güvenlik İzlem Formu Tarih ve Seri No: {TARIH} / {IGIF}\nHasta tarafından imzalı İlaç Kullanım Onay Formu Seri No: {ONAY}\nBaşlangıç BASDAI= {S0}"
     },
     {
      "t": "Devam raporu",
      "dur": "6 ay",
      "ilac": "Etanercept 50mg (SGKF0G) | kullanıma hazır enjektör | 1×1 | haftada bir | subkütan",
      "text": "Aksiyel Tutulumlu Ankilozan Spondilit (AS) tanılı veya Radyografik Olarak AS Kanıtı Olmayan Aksiyel Spondilartrit tanılı, biri maksimum doz indometazin olmak üzere en az 3 nonsteroid antiinflamatuvar ilaç maksimum dozunda kullanılmış olmasına rağmen yeterli cevap alınamayan hastaya Etanercept tedavisi uygulanmıştı. Hastada tedaviye cevap alınmıştır ve tedaviye cevap devam etmektedir (BASDAİ’de 2 birimden fazla düzelme devam etmektedir). Hastanın Etanercept tedavisini haftalık 50mg dozunda Subkütan uygulanmak üzere 6(altı) ay süre ile kullanması uygundur. “Mahallinde tedavisi sürdürülebilir”.\nİlaç Güvenlik İzlem Formu Tarih ve Seri No: {TARIH} / {IGIF}\nHasta tarafından imzalı İlaç Kullanım Onay Formu Seri No: {ONAY}\nBaşlangıç BASDAI= {S0} Yeni BASDAI= {S1}"
     }
    ]
   },
   {
    "name": "Golimumab",
    "items": [
     {
      "t": "İlk rapor",
      "dur": "3 ay",
      "ilac": "Golimumab 50mg (SGKFYF) | kullanıma hazır enjektör | 1×1 | ayda bir | subkütan",
      "text": "Aksiyel Tutulumlu Ankilozan Spondilit (AS) tanılı hastada; biri maksimum doz indometazin olmak üzere en az 3 nonsteroid antiinflamatuvar ilaç maksimum dozunda kullanılmış olmasına rağmen yeterli cevap alınamamıştır. Hastanın BASDAİ ölçümü >5,1 (bununla birlikte eritrosit sedimantasyon hızı >28 mm/s veya normalin üst sınırını aşan CRP değeri veya MR/sintigrafi ile gösterilmiş aktif sakroiliit/spondiliti vardır). Hastanın Golimumab tedavisini aylık 50mg dozunda Subkütan uygulanmak üzere 3(üç) ay süre ile kullanması uygundur. “Mahallinde tedavisi sürdürülebilir”.\nİlaç Güvenlik İzlem Formu Tarih ve Seri No: {TARIH} / {IGIF}\nHasta tarafından imzalı İlaç Kullanım Onay Formu Seri No: {ONAY}\nBaşlangıç BASDAI= {S0}"
     },
     {
      "t": "Devam raporu",
      "dur": "6 ay",
      "ilac": "Golimumab 50mg (SGKFYF) | kullanıma hazır enjektör | 1×1 | ayda bir | subkütan",
      "text": "Aksiyel Tutulumlu Ankilozan Spondilit (AS) tanılı veya Radyografik Olarak AS Kanıtı Olmayan Aksiyel Spondilartrit tanılı, biri maksimum doz indometazin olmak üzere en az 3 nonsteroid antiinflamatuvar ilaç maksimum dozunda kullanılmış olmasına rağmen yeterli cevap alınamayan hastaya Golimumab tedavisi uygulanmıştı. Hastada tedaviye cevap alınmıştır ve tedaviye cevap devam etmektedir (BASDAİ’de 2 birimden fazla düzelme devam etmektedir). Hastanın Golimumab tedavisini aylık 50mg dozunda Subkütan uygulanmak üzere 6(altı) ay süre ile kullanması uygundur. “Mahallinde tedavisi sürdürülebilir”.\nİlaç Güvenlik İzlem Formu Tarih ve Seri No: {TARIH} / {IGIF}\nHasta tarafından imzalı İlaç Kullanım Onay Formu Seri No: {ONAY}\nBaşlangıç BASDAI= {S0} Yeni BASDAI= {S1}"
     }
    ]
   },
   {
    "name": "İnfliksimab",
    "items": [
     {
      "t": "İlk rapor",
      "dur": "3 ay",
      "ilac": "İnfliximab 100mg (5mg/kg) | liyofilize toz içeren flakon | 6-8 haftada bir | intravenöz",
      "text": "Aksiyel Tutulumlu Ankilozan Spondilit (AS) tanılı hastada; biri maksimum doz indometazin olmak üzere en az 3 nonsteroid antiinflamatuvar ilaç maksimum dozunda kullanılmış olmasına rağmen yeterli cevap alınamamıştır. Diğer anti-TNF ilaçlardan en az birini kullanmış ve cevap alınamamıştır. Hastanın BASDAİ ölçümü >5,1 (bununla birlikte eritrosit sedimantasyon hızı >28 mm/s veya normalin üst sınırını aşan CRP değeri veya MR/sintigrafi ile gösterilmiş aktif sakroiliit/spondiliti vardır). Hastanın İnfliximab tedavisini intravenöz yolla 5mg/kg dozunda hesaplanarak 0., 2. ve 6. haftalarda uygulanacak yükleme dozunu takiben her 6-8 haftada bir olmak üzere 3(üç) ay süre ile kullanması uygundur.\nİlaç Güvenlik İzlem Formu Tarih ve Seri No: {TARIH} / {IGIF}\nHasta tarafından imzalı İlaç Kullanım Onay Formu Seri No: {ONAY}\nBaşlangıç BASDAI= {S0}"
     },
     {
      "t": "Devam raporu",
      "dur": "6 ay",
      "ilac": "İnfliximab 100mg (5mg/kg) | liyofilize toz içeren flakon | 6-8 haftada bir | intravenöz",
      "text": "Aksiyel Tutulumlu Ankilozan Spondilit (AS) tanılı veya Radyografik Olarak AS Kanıtı Olmayan Aksiyel Spondilartrit tanılı, biri maksimum doz indometazin olmak üzere en az 3 nonsteroid antiinflamatuvar ilaç maksimum dozunda kullanılmış olmasına ve diğer anti-TNF ilaçlardan en az birini kullanılmasına rağmen yeterli cevap alınamayan hastaya İnfliximab tedavisi uygulanmıştı. Hastada tedaviye alınan cevap devam etmektedir (BASDAİ’de >2 birim düzelme). Hastanın her 6-8 haftada bir 6(altı) ay süre ile İV infliksimab kullanması uygundur.\nİlaç Güvenlik İzlem Formu Tarih ve Seri No: {TARIH} / {IGIF}\nHasta tarafından imzalı İlaç Kullanım Onay Formu Seri No: {ONAY}\nBaşlangıç BASDAI= {S0} Yeni BASDAI= {S1}"
     }
    ]
   },
   {
    "name": "Sekukinumab",
    "items": [
     {
      "t": "İlk rapor",
      "dur": "4 ay",
      "ilac": "Sekukinumab 150mg | SC enjeksiyon için liyofilize toz içeren flakon  | 1×1 | haftada bir | subkütan",
      "text": "Aktif ankilozan spondilitli erişkin hastada; biri maksimum doz indometazin olmak üzere en az 3 nonsteroid antiinflamatuvar ilaç maksimum dozunda kullanılmış olmasına rağmen yeterli cevap alınamamıştır. Hastanın BASDAİ ölçümü >5 (bununla birlikte eritrosit sedimantasyon hızı >28 mm/s veya normalin üst sınırını aşan CRP değeri veya MR/sintigrafi ile gösterilmiş aktif sakroiliit/spondiliti vardır). Hastanın Sekukinumab tedavisini subkütan olarak ilk 5(beş) hafta (0. 1. 2. 3. ve 4. haftalar) haftada bir yükleme dozu ile uygulamak suretiyle tedaviye başlaması, beşinci haftadan sonra her 4(dört) haftada bir 150mg dozunda 3(üç) ay idame dozda olmak üzere toplam 4(dört) ay kullanması uygundur.\nİlaç Güvenlik İzlem Formu Tarih ve Seri No: {TARIH} / {IGIF}\nHasta tarafından imzalı İlaç Kullanım Onay Formu Seri No: {ONAY}\nBaşlangıç BASDAI= {S0}"
     },
     {
      "t": "Devam raporu",
      "dur": "6 ay",
      "ilac": "Sekukinumab 150mg | SC enjeksiyon için liyofilize toz içeren flakon  | 1×1 | ayda bir | subkütan",
      "text": "Aktif ankilozan spondilitli erişkin hastada; biri maksimum doz indometazin olmak üzere en az 3 nonsteroid antiinflamatuvar ilaç maksimum dozunda kullanılmış olmasına rağmen yeterli cevap alınamayan hastaya Sekukinumab tedavisi 4(dört) ay süre ile uygulanmıştı. Hastada tedaviye cevap alınmıştır (BASDAİ’de 2 birimden fazla düzelme devam etmektedir). Hastanın Sekukinumab tedavisini her 4(dört) hafta bir 150mg dozunda subkütan uygulanmak üzere 6(altı) ay süre ile kullanması uygundur.\nİlaç Güvenlik İzlem Formu Tarih ve Seri No: {TARIH} / {IGIF}\nHasta tarafından imzalı İlaç Kullanım Onay Formu Seri No: {ONAY}\nBaşlangıç BASDAI= {S0} Yeni BASDAI= {S1}"
     }
    ]
   },
   {
    "name": "Sertolizumab pegol",
    "items": [
     {
      "t": "İlk rapor",
      "dur": "3 ay",
      "ilac": "Sertolizumab Pegol 200mg (SGKFZS) | kullanıma hazır enjektör | 1×2-1×1 | 2 haftada bir | subkütan",
      "text": "Aksiyel Tutulumlu Ankilozan Spondilit (AS) tanılı hastada; biri maksimum doz indometazin olmak üzere en az 3 nonsteroid antiinflamatuvar ilaç maksimum dozunda kullanılmış olmasına rağmen yeterli cevap alınamamıştır. Hastanın BASDAİ ölçümü >5,1 (bununla birlikte eritrosit sedimantasyon hızı >28 mm/s veya normalin üst sınırını aşan CRP değeri veya MR/sintigrafi ile gösterilmiş aktif sakroiliit/spondiliti vardır). Hastanın ilk 3 doz 1×2 olmak üzere her 2 haftada bir Sertolizumab Pegol 200 mg yükleme dozu ile tedaviye başlanması uygun görülmüştür. “3(Üç) Yükleme Dozu” uygulamasından sonra, tedaviye 2 haftada bir 1×1 Sertolizumab Pegol 200 mg ile devam etmesi uygundur. “Mahallinde tedavisi sürdürülebilir”.\nİlaç Güvenlik İzlem Formu Tarih ve Seri No: {TARIH} / {IGIF}\nHasta tarafından imzalı İlaç Kullanım Onay Formu Seri No: {ONAY}\nBaşlangıç BASDAI= {S0}"
     },
     {
      "t": "Devam raporu",
      "dur": "6 ay",
      "ilac": "Sertolizumab Pegol 200mg (SGKFZS) | kullanıma hazır enjektör | 1×2-1×1 | 2 haftada bir | subkütan",
      "text": "Aksiyel Tutulumlu Ankilozan Spondilit (AS) tanılı veya Radyografik Olarak AS Kanıtı Olmayan Aksiyel Spondilartrit tanılı, biri maksimum doz indometazin olmak üzere en az 3 nonsteroid antiinflamatuvar ilaç maksimum dozunda kullanılmış olmasına rağmen yeterli cevap alınamayan hastaya Sertolizumab Pegol tedavisi uygulanmıştı. Hastada tedaviye cevap alınmıştır ve tedaviye cevap devam etmektedir (BASDAİ’de 2 birimden fazla düzelme devam etmektedir). Hastanın Sertolizumab Pegol tedavisini her 2 haftada bir kez olmak üzere 200mg dozunda Subkütan uygulanmak üzere 6(altı) ay süre ile kullanması uygundur. “Mahallinde tedavisi sürdürülebilir”.\nİlaç Güvenlik İzlem Formu Tarih ve Seri No: {TARIH} / {IGIF}\nHasta tarafından imzalı İlaç Kullanım Onay Formu Seri No: {ONAY}\nBaşlangıç BASDAI= {S0} Yeni BASDAI= {S1}"
     }
    ]
   },
   {
    "name": "Tofasitinib",
    "items": [
     {
      "t": "İlk rapor",
      "dur": "3 ay",
      "ilac": "Tofacitinib 11mg (SGKG0Q) | tablet | 1×1 | günde bir | oral",
      "text": "Aksiyel Tutulumlu Ankilozan Spondilit (AS) tanılı hastada biri maksimum doz indometazin olmak üzere en az 3 nonsteroid antiinflamatuvar ilaç maksimum dozunda kullanılmış olmasına rağmen yeterli cevap alınamamıştır. Diğer anti-TNF ilaçlardan en az birini kullanmış ve cevap alınamamıştır. Hastanın Tofacitinib tablet kullanması uygundur.\nİlaç Güvenlik İzlem Formu Tarih ve Seri No: {TARIH} / {IGIF}\nHasta tarafından imzalı İlaç Kullanım Onay Formu Seri No: {ONAY}\nBaşlangıç BASDAI= {S0}"
     },
     {
      "t": "Devam raporu",
      "dur": "6 ay",
      "ilac": "Tofacitinib 11mg (SGKG0Q) | tablet | 1×1 | günde bir | oral",
      "text": "Aksiyel Tutulumlu Ankilozan Spondilit (AS) biri maksimum doz indometazin olmak üzere en az 3 nonsteroid antiinflamatuvar ilaç maksimum dozunda kullanılmış olmasına ve diğer anti-TNF ilaçlardan en az biri kullanılmasına rağmen yeterli cevap alınamayan hastaya Tofacitinib 1*11 mg tedavisi 3(üç) ay süre ile uygulanmıştır. Hastada tedaviye cevap alınmıştır (BASDAİ’de 2 birimden fazla düzelme devam etmektedir). Hastanın 6(altı) ay süre ile Tofactinib tablet kullanması uygundur.\nİlaç Güvenlik İzlem Formu Tarih ve Seri No: {TARIH} / {IGIF}\nHasta tarafından imzalı İlaç Kullanım Onay Formu Seri No: {ONAY}\nBaşlangıç BASDAI= {S0} Yeni BASDAI= {S1}"
     }
    ]
   },
   {
    "name": "Upadasitinib",
    "items": [
     {
      "t": "İlk rapor",
      "dur": "3 ay",
      "ilac": "Upadasitinib 15mg | tablet | günlük 1×1 | oral",
      "text": "Aksiyel Tutulumlu Ankilozan Spondilit (AS) tanılı hastada biri maksimum doz indometazin olmak üzere en az 3 nonsteroid antiinflamatuvar ilaç maksimum dozunda kullanılmış olmasına rağmen yeterli cevap alınamamıştır. Diğer anti-TNF ilaçlardan en az birini kullanmış ve cevap alınamamıştır. Hastanın Upadasitinib tablet kullanması uygundur.\nİlaç Güvenlik İzlem Formu Tarih ve Seri No: {TARIH} / {IGIF}\nHasta tarafından imzalı İlaç Kullanım Onay Formu Seri No: {ONAY}\nBaşlangıç BASDAI= {S0}"
     },
     {
      "t": "Devam raporu",
      "dur": "6 ay",
      "ilac": "Upadasitinib 15mg | tablet | günlük 1×1 | oral",
      "text": "Aksiyel Tutulumlu Ankilozan Spondilit (AS) biri maksimum doz indometazin olmak üzere en az 3 nonsteroid antiinflamatuvar ilaç maksimum dozunda kullanılmış olmasına ve diğer anti-TNF ilaçlardan en az biri kullanılmasına rağmen yeterli cevap alınamayan hastaya Upadasitinib tedavisi 3(üç) ay süre ile uygulanmıştır. Hastada tedaviye cevap alınmıştır (BASDAİ’de 2 birimden fazla düzelme devam etmektedir). Hastanın 6(altı) ay süre ile Upadasitinib tablet kullanması uygundur.\nİlaç Güvenlik İzlem Formu Tarih ve Seri No: {TARIH} / {IGIF}\nHasta tarafından imzalı İlaç Kullanım Onay Formu Seri No: {ONAY}\nBaşlangıç BASDAI= {S0} Yeni BASDAI= {S1}"
     }
    ]
   }
  ],
  "src": "FTR Online"
 },
 {
  "id": "psa",
  "title": "Psöriatik artrit",
  "sub": "Teşhis kodu 09.01.6.4 · ICD M07.0, M07.3",
  "groups": [
   {
    "name": "Adalimumab",
    "items": [
     {
      "t": "İlk rapor",
      "dur": "3 ay",
      "ilac": "Adalimumab 40mg | kullanıma hazır enjektör | 1×1 | iki haftada bir | subkütan",
      "text": "Psöriyatik Artrit tanılı hasta; en az 3 farklı hastalık modifiye edici antiromatizmal ilacı uygun dozunda en az üçer ay olmak üzere kullanmış olmasına rağmen hastalık aktivitesi kontrol altına alınamamıştır (bir ay arayla yapılmış iki ayrı muayenede en az üç hassas eklem ve en az üç şiş eklem mevcuttur). Hastanın Adalimumab tedavisini iki haftada bir kez 40mg dozunda subkütan uygulanmak üzere 3(üç) ay süre ile kullanması uygundur. “Mahallinde tedavisi sürdürülebilir”.\nİlaç Güvenlik İzlem Formu Tarih ve Seri No: {TARIH} / {IGIF}\nHasta tarafından imzalı İlaç Kullanım Onay Formu Seri No: {ONAY}"
     },
     {
      "t": "Devam raporu",
      "dur": "6 ay",
      "ilac": "Adalimumab 40mg | kullanıma hazır enjektör | 1×1 | iki haftada bir | subkütan",
      "text": "Psöriyatik Artrit tanılı; en az 3 farklı hastalık modifiye edici antiromatizmal ilacı uygun dozunda en az üçer ay olmak üzere kullanmış olmasına rağmen hastalık aktivitesi kontrol altına alınamayan (bir ay arayla yapılmış iki ayrı muayenede en az üç hassas eklem ve en az üç şiş eklem mevcut olan) hastaya Adalimumab tedavisi başlanılmıştı. Hastada tedaviye cevap alınmıştır ve tedaviye cevap devam etmektedir. PSARC’a göre düzelme gözlenmiştir. Hastanın Adalimumab tedavisini iki haftada bir kez 40mg dozunda subkütan uygulanmak üzere 6(altı) ay süre ile kullanması uygundur. “Mahallinde tedavisi sürdürülebilir”.\nİlaç Güvenlik İzlem Formu Tarih ve Seri No: {TARIH} / {IGIF}\nHasta tarafından imzalı İlaç Kullanım Onay Formu Seri No: {ONAY}"
     }
    ]
   },
   {
    "name": "Etanersept",
    "items": [
     {
      "t": "İlk rapor",
      "dur": "3 ay",
      "ilac": "Etanercept 50mg (SGKF0G) | kullanıma hazır enjektör | 1×1 | haftada bir | subkütan",
      "text": "Psöriyatik Artrit tanılı hasta; en az 3 farklı hastalık modifiye edici antiromatizmal ilacı uygun dozunda en az üçer ay olmak üzere kullanmış olmasına rağmen hastalık aktivitesi kontrol altına alınamamıştır (bir ay arayla yapılmış iki ayrı muayenede en az üç hassas eklem ve en az üç şiş eklem mevcuttur). Hastanın Etanercept tedavisini haftalık 50mg dozunda Subkütan uygulanmak üzere 3(üç) ay süre ile kullanması uygundur. “Mahallinde tedavisi sürdürülebilir”.\nİlaç Güvenlik İzlem Formu Tarih ve Seri No: {TARIH} / {IGIF}\nHasta tarafından imzalı İlaç Kullanım Onay Formu Seri No: {ONAY}"
     },
     {
      "t": "Devam raporu",
      "dur": "6 ay",
      "ilac": "Etanercept 50mg (SGKF0G) | kullanıma hazır enjektör | 1×1 | haftada bir | subkütan",
      "text": "Psöriyatik Artrit tanılı; en az 3 farklı hastalık modifiye edici antiromatizmal ilacı uygun dozunda en az üçer ay olmak üzere kullanmış olmasına rağmen hastalık aktivitesi kontrol altına alınamayan (bir ay arayla yapılmış iki ayrı muayenede en az üç hassas eklem ve en az üç şiş eklem mevcut olan) hastaya Etanercept tedavisi başlanılmıştı. Hastada tedaviye cevap alınmıştır ve tedaviye cevap devam etmektedir. PSARC’a göre düzelme gözlenmiştir. Hastanın Etanercept tedavisini haftalık 50mg dozunda subkütan uygulanmak üzere 6(altı) ay süre ile kullanması uygundur. “Mahallinde tedavisi sürdürülebilir”.\nİlaç Güvenlik İzlem Formu Tarih ve Seri No: {TARIH} / {IGIF}\nHasta tarafından imzalı İlaç Kullanım Onay Formu Seri No: {ONAY}"
     }
    ]
   },
   {
    "name": "Golimumab",
    "items": [
     {
      "t": "İlk rapor",
      "dur": "3 ay",
      "ilac": "Golimumab 50mg (SGKFYF) | kullanıma hazır enjektör | 1×1 | ayda bir | subkütan",
      "text": "Psöriyatik Artrit tanılı hasta; en az 3 farklı hastalık modifiye edici antiromatizmal ilacı uygun dozunda en az üçer ay olmak üzere kullanmış olmasına rağmen hastalık aktivitesi kontrol altına alınamamıştır (bir ay arayla yapılmış iki ayrı muayenede en az üç hassas eklem ve en az üç şiş eklem mevcuttur). Hastanın Golimumab tedavisini aylık 50mg dozunda subkütan uygulanmak üzere 3(üç) ay süre ile kullanması uygundur. “Mahallinde tedavisi sürdürülebilir”.\nİlaç Güvenlik İzlem Formu Tarih ve Seri No: {TARIH} / {IGIF}\nHasta tarafından imzalı İlaç Kullanım Onay Formu Seri No: {ONAY}"
     },
     {
      "t": "Devam raporu",
      "dur": "6 ay",
      "ilac": "Golimumab 50mg (SGKFYF) | kullanıma hazır enjektör | 1×1 | ayda bir | subkütan",
      "text": "Psöriyatik Artrit tanılı; en az 3 farklı hastalık modifiye edici antiromatizmal ilacı uygun dozunda en az üçer ay olmak üzere kullanmış olmasına rağmen hastalık aktivitesi kontrol altına alınamayan (bir ay arayla yapılmış iki ayrı muayenede en az üç hassas eklem ve en az üç şiş eklem mevcut olan) hastaya Golimumab tedavisi başlanılmıştı. Hastada tedaviye cevap alınmıştır ve tedaviye cevap devam etmektedir. PSARC’a göre düzelme gözlenmiştir. Hastanın Golimumab tedavisini aylık 50mg dozunda Subkütan uygulanmak üzere 6(altı) ay süre ile kullanması uygundur. “Mahallinde tedavisi sürdürülebilir”.\nİlaç Güvenlik İzlem Formu Tarih ve Seri No: {TARIH} / {IGIF}\nHasta tarafından imzalı İlaç Kullanım Onay Formu Seri No: {ONAY}"
     }
    ]
   },
   {
    "name": "İnfliksimab",
    "items": [
     {
      "t": "İlk rapor",
      "dur": "3 ay",
      "ilac": "İnfliximab 100mg (5mg/kg) | liyofilize toz içeren flakon | 6-8 haftada bir | intravenöz",
      "text": "Psöriyatik Artrit tanılı hasta; en az 3 farklı hastalık modifiye edici antiromatizmal ilacı uygun dozunda en az üçer ay olmak üzere kullanmış olmasına rağmen hastalık aktivitesi kontrol altına alınamamıştır (bir ay arayla yapılmış iki ayrı muayenede en az üç hassas eklem ve en az üç şiş eklem mevcuttur). Diğer anti-TNF ilaçlardan en az birini kullanmış ve cevap alınamamıştır. Hastanın İnfliximab tedavisini intravenöz yolla 5mg/kg dozunda hesaplanarak 0., 2. ve 6. haftalarda uygulanacak yükleme dozunu takiben her 6-8 haftada bir olmak üzere 3(üç) ay süre ile kullanması uygundur.\nİlaç Güvenlik İzlem Formu Tarih ve Seri No: {TARIH} / {IGIF}\nHasta tarafından imzalı İlaç Kullanım Onay Formu Seri No: {ONAY}"
     },
     {
      "t": "Devam raporu",
      "dur": "6 ay",
      "ilac": "İnfliximab 100mg (5mg/kg) | liyofilize toz içeren flakon | 6-8 haftada bir | intravenöz",
      "text": "Psöriyatik Artrit tanılı; en az 3 farklı hastalık modifiye edici antiromatizmal ilacı uygun dozunda en az üçer ay olmak üzere kullanmış olmasına ve diğer anti-TNF ilaçlardan en az birini kullanmasına rağmen hastalık aktivitesi kontrol altına alınamayan (cevap alınamayan) (bir ay arayla yapılmış iki ayrı muayenede en az üç hassas eklem ve en az üç şiş eklem mevcut olan) hastaya İnfliximab tedavisi başlanılmıştı. Hastada tedaviye cevap alınmıştır ve tedaviye cevap devam etmektedir. PSARC’a göre düzelme gözlenmiştir. Hastanın İnfliximab tedavisini intravenöz yolla 5mg/kg dozunda hesaplanarak her 6-8 haftada bir uygulanmak üzere 6(altı) ay süre ile kullanması uygundur.\nİlaç Güvenlik İzlem Formu Tarih ve Seri No: {TARIH} / {IGIF}\nHasta tarafından imzalı İlaç Kullanım Onay Formu Seri No: {ONAY}"
     }
    ]
   },
   {
    "name": "Sertolizumab pegol",
    "items": [
     {
      "t": "İlk rapor",
      "dur": "3 ay",
      "ilac": "Sertolizumab Pegol 200mg (SGKFZS) | kullanıma hazır enjektör | 1×2-1×1 | 2 haftada bir | subkütan",
      "text": "Psöriyatik Artrit tanılı hasta; en az 3 farklı hastalık modifiye edici antiromatizmal ilacı uygun dozunda en az üçer ay olmak üzere kullanmış olmasına rağmen hastalık aktivitesi kontrol altına alınamamıştır (bir ay arayla yapılmış iki ayrı muayenede en az üç hassas eklem ve en az üç şiş eklem mevcuttur). Hastanın ilk 3 doz 1×2 olmak üzere her 2 haftada bir Sertolizumab Pegol 200 mg yükleme dozu ile tedaviye başlanması uygun görülmüştür. “3(Üç) Yükleme Dozu” uygulamasından sonra, tedaviye 2 haftada bir 1×1 Sertolizumab Pegol 200 mg ile devam etmesi uygundur. “Mahallinde tedavisi sürdürülebilir”.\nİlaç Güvenlik İzlem Formu Tarih ve Seri No: {TARIH} / {IGIF}\nHasta tarafından imzalı İlaç Kullanım Onay Formu Seri No: {ONAY}"
     },
     {
      "t": "Devam raporu",
      "dur": "6 ay",
      "ilac": "Sertolizumab Pegol 200mg (SGKFZS) | kullanıma hazır enjektör | 1×2-1×1 | 2 haftada bir | subkütan",
      "text": "Psöriyatik Artrit tanılı; en az 3 farklı hastalık modifiye edici antiromatizmal ilacı uygun dozunda en az üçer ay olmak üzere kullanmış olmasına rağmen hastalık aktivitesi kontrol altına alınamayan (bir ay arayla yapılmış iki ayrı muayenede en az üç hassas eklem ve en az üç şiş eklem mevcut olan) hastaya Sertolizumab Pegol tedavisi başlanılmıştı. Hastada tedaviye cevap alınmıştır ve tedaviye cevap devam etmektedir. PSARC’a göre düzelme gözlenmiştir. Hastanın Sertolizumab Pegol tedavisini her 2 haftada bir kez olmak üzere 200mg dozunda Subkütan uygulanmak üzere 6(altı) ay süre ile kullanması uygundur. “Mahallinde tedavisi sürdürülebilir”.\nİlaç Güvenlik İzlem Formu Tarih ve Seri No: {TARIH} / {IGIF}\nHasta tarafından imzalı İlaç Kullanım Onay Formu Seri No: {ONAY}"
     }
    ]
   },
   {
    "name": "İksekizumab",
    "items": [
     {
      "t": "İlk rapor",
      "dur": "16 hafta",
      "ilac": "İksekizumab 80 mg | 1 ml kullanıma hazır 3 kalem | 4 haftada bir | subkütan",
      "text": "Psöriyatik Artrit tanılı hasta; en az 3 farklı hastalık modifiye edici antiromatizmal ilacı uygun dozunda en az üçer ay olmak üzere ve en az bir anti-TNF ajanı 3 ay süreyle kullanmış olmasına rağmen hastalık aktivitesi kontrol altına alınamamıştır (bir ay arayla yapılmış iki ayrı muayenede en az üç hassas eklem ve en az üç şiş eklem mevcuttur). Hastanın İksekizumab tedavisinin ilk dozunu 0. haftada subkütan yolla 160mg (80mg’lık iki enjeksiyon) olarak, sonraki dozları 4(dört) haftada bir 80mg (tek enjeksiyon) olmak üzere 16(onaltı) hafta süre ile kullanması uygundur.\nİlaç Güvenlik İzlem Formu Tarih ve Seri No: {TARIH} / {IGIF}\nHasta tarafından imzalı İlaç Kullanım Onay Formu Seri No: {ONAY}"
     },
     {
      "t": "Devam raporu",
      "dur": "6 ay",
      "ilac": "İksekizumab 80 mg | 1 ml kullanıma hazır 3 kalem | 4 haftada bir | subkütan",
      "text": "Daha öncesinde “En az 3 farklı hastalık modifiye edici antiromatizmal ilacı 3’er ay süre ile uygun dozda kullanmış ve sonrasında en az bir anti-TNF ajanı 3 ay süreyle kullanmış olmasına rağmen hastalık aktivitesi kontrol altına alınamamış” aktif psöriatik artritli hasta İksekizumab tedavisini 16(onaltı) hafta kullanmıştır. Hastada psöriatik artrit yanıt kriterlerine (PSARC) göre yeterli cevap alınmıştır. Hastanın İksekizumab tedavisini subkütan olarak, 4(dört) haftada bir, 80mg dozunda (1×1), 6(altı) ay süre ile kullanması uygundur.\nİlaç Güvenlik İzlem Formu Tarih ve Seri No: {TARIH} / {IGIF}\nHasta tarafından imzalı İlaç Kullanım Onay Formu Seri No: {ONAY}"
     }
    ]
   },
   {
    "name": "Sekukinumab",
    "items": [
     {
      "t": "150mg İlk rapor",
      "dur": "4 ay",
      "ilac": "Sekukinumab 150mg | SC enjeksiyon için liyofilize toz içeren flakon  | 1×1 | haftada bir | subkütan",
      "text": "En az 3 farklı hastalık modifiye edici antiromatizmal ilacı 3’er ay süre ile uygun dozda kullanmış ve sonrasında en az bir anti-TNF ajanı 3 ay süreyle kullanmış olmasına rağmen hastalık aktivitesi kontrol altına alınamayan (bir ay arayla yapılmış iki ayrı muayenede en az üç hassas eklem ve en az üç şiş eklem vardır) aktif psöriatik artritli hastanın Sekukinumab tedavisini 150mg dozunda (1×1), subkütan, ilk 5(beş) hafta (0. 1. 2. 3. ve 4. haftalar) haftada bir yükleme dozu olarak tedaviye başlaması, beşinci haftadan sonra her 4(dört) haftada bir 150mg dozunda (1×1) 3(üç) ay idame dozda olmak üzere toplam 4(dört) ay kullanması uygundur.\nİlaç Güvenlik İzlem Formu Tarih ve Seri No: {TARIH} / {IGIF}\nHasta tarafından imzalı İlaç Kullanım Onay Formu Seri No: {ONAY}"
     },
     {
      "t": "150mg Devam raporu",
      "dur": "6 ay",
      "ilac": "Sekukinumab 150mg | SC enjeksiyon için liyofilize toz içeren flakon  | 1×1 | ayda bir | subkütan",
      "text": "Daha öncesinde “En az 3 farklı hastalık modifiye edici antiromatizmal ilacı 3’er ay süre ile uygun dozda kullanmış ve sonrasında en az bir anti-TNF ajanı 3 ay süreyle kullanmış olmasına rağmen hastalık aktivitesi kontrol altına alınamamış aktif psöriatik artritli hasta” Sekukinumab tedavisini 150mg dozunda 16(onaltı) hafta kullanmıştır. Hastada psöriatik artrit yanıt kriterlerine (PSARC) göre yeterli cevap alınmıştır. Hastanın Sekukinumab tedavisini subkütan olarak, 4(dört) haftada bir, 150mg dozunda (1×1), 6(altı) ay süre ile kullanması uygundur.\nİlaç Güvenlik İzlem Formu Tarih ve Seri No: {TARIH} / {IGIF}\nHasta tarafından imzalı İlaç Kullanım Onay Formu Seri No: {ONAY}"
     },
     {
      "t": "300mg İlk rapor",
      "dur": "4 ay",
      "ilac": "Sekukinumab 150mg | SC enjeksiyon için liyofilize toz içeren flakon  | 1×2 | haftada bir | subkütan",
      "text": "En az 3 farklı hastalık modifiye edici antiromatizmal ilacı 3’er ay süre ile uygun dozda kullanmış ve sonrasında en az bir anti-TNF ajanı 3 ay süreyle kullanmış olmasına rağmen hastalık aktivitesi kontrol altına alınamayan (bir ay arayla yapılmış iki ayrı muayenede en az üç hassas eklem ve en az üç şiş eklem vardır) aktif psöriatik artritli hastanın Sekukinumab tedavisini 300mg dozunda (1×2), subkütan, ilk 5(beş) hafta (0. 1. 2. 3. ve 4. haftalar) haftada bir yükleme dozu olarak tedaviye başlaması, beşinci haftadan sonra her 4(dört) haftada bir 300mg dozunda (1×2) 3(üç) ay idame dozda olmak üzere toplam 4(dört) ay kullanması uygundur.\nİlaç Güvenlik İzlem Formu Tarih ve Seri No: {TARIH} / {IGIF}\nHasta tarafından imzalı İlaç Kullanım Onay Formu Seri No: {ONAY}"
     },
     {
      "t": "300mg Devam raporu",
      "dur": "6 ay",
      "ilac": "Sekukinumab 150mg | SC enjeksiyon için liyofilize toz içeren flakon | 1×2 | ayda bir | subkütan",
      "text": "Daha öncesinde “En az 3 farklı hastalık modifiye edici antiromatizmal ilacı 3’er ay süre ile uygun dozda kullanmış ve sonrasında en az bir anti-TNF ajanı 3 ay süreyle kullanmış olmasına rağmen hastalık aktivitesi kontrol altına alınamamış” aktif psöriatik artritli hasta Sekukinumab tedavisini 300mg dozunda 16(onaltı) hafta kullanmıştır. Hastada psöriatik artrit yanıt kriterlerine (PSARC) göre yeterli cevap alınmıştır. Hastanın Sekukinumab tedavisini subkütan olarak, 4(dört) haftada bir, 300mg dozunda (1×2), 6(altı) ay süre ile kullanması uygundur.\nİlaç Güvenlik İzlem Formu Tarih ve Seri No: {TARIH} / {IGIF}\nHasta tarafından imzalı İlaç Kullanım Onay Formu Seri No: {ONAY}"
     }
    ]
   },
   {
    "name": "Ustekinumab",
    "items": [
     {
      "t": "İlk rapor",
      "dur": "3 ay",
      "ilac": "Ustekinumab 45-90mg | kullanıma hazır enjektör | 1×1 | 0-4-12 haftada bir | subkütan",
      "text": "Aktif psöriatik artrit tanılı yetişkin hasta en az 3 farklı hastalık modifiye edici antiromatizmal ilacı üçer ay süre ile uygun dozda kullanmış ve sonrasında en az bir anti-TNF ajanı 3 ay süreyle kullanmış olmasına rağmen hastalık aktivitesi kontrol altına alınamamıştır (bir ay arayla yapılmış iki ayrı muayenede en az üç hassas eklem ve en az üç şiş eklem vardır). Hastanın Ustekinumab tedavisinin ilk 2 dozunu 0 ve 4. haftalarda, sonraki dozlarını her 12 haftada bir olmak üzere 45/90 mg dozunda subkütan olarak 3(üç) ay süre ile kullanması uygundur. “Mahallinde tedavisi sürdürülebilir”.\nİlaç Güvenlik İzlem Formu Tarih ve Seri No: {TARIH} / {IGIF}\nHasta tarafından imzalı İlaç Kullanım Onay Formu Seri No: {ONAY}"
     },
     {
      "t": "Devam raporu",
      "dur": "6 ay",
      "ilac": "Ustekinumab 45-90mg | kullanıma hazır enjektör | 1×1 | 12 haftada bir | subkütan",
      "text": "Aktif psöriatik artrit tanılı yetişkin hasta en az 3 farklı hastalık modifiye edici antiromatizmal ilacı üçer ay süre ile uygun dozda kullanmış ve sonrasında en az bir anti-TNF ajanı 3 ay süreyle kullanmış olmasına rağmen hastalık aktivitesi kontrol altına alınamamıştı (bir ay arayla yapılmış iki ayrı muayenede en az üç hassas eklem ve en az üç şiş eklem var idi). Ustekinumab tedavisinden 3 ay sonra yapılan değerlendirmesinde hastada psöriyatik artrit yanıt kriterlerine (PSARC) göre yanıt alınmıştır. Tedaviye yeterli cevap alınmıştır. Hastanın Ustekinumab tedavisini her 12 haftada bir olmak üzere 45/90 mg dozunda subkütan olarak 6(altı) ay süre ile kullanması uygundur. “Mahallinde tedavisi sürdürülebilir”.\n{TARIH} tarihli İlaç Güvenlik İzlem Formu Seri No: {IGIF}\nİlaç Kullanım Onay Formu Seri No: {ONAY}"
     }
    ]
   },
   {
    "name": "Tofasitinib",
    "items": [
     {
      "t": "İlk rapor",
      "dur": "3 ay",
      "ilac": "Tofacitinib 11mg (SGKG0Q) | tablet | 1×1 | günde bir | oral",
      "text": "Psöriyatik Artrit tanılı hasta; en az 3 farklı hastalık modifiye edici antiromatizmal ilacı uygun dozunda en az üçer ay olmak üzere kullanmış olmasına rağmen hastalık aktivitesi kontrol altına alınamamıştır (bir ay arayla yapılmış iki ayrı muayenede en az üç hassas eklem ve en az üç şiş eklem mevcuttur). Diğer anti-TNF ilaçlardan en az birini kullanmış ve cevap alınamamıştır. Hastanın günlük Tofacitinib tedavisini 3(üç) ay süre ile kullanması uygundur.\nİlaç Güvenlik İzlem Formu Tarih ve Seri No: {TARIH} / {IGIF}\nHasta tarafından imzalı İlaç Kullanım Onay Formu Seri No: {ONAY}"
     },
     {
      "t": "Devam raporu",
      "dur": "6 ay",
      "ilac": "Tofacitinib 11mg (SGKG0Q) | tablet | 1×1 | günde bir | oral",
      "text": "Psöriyatik Artrit tanılı hasta; en az 3 farklı hastalık modifiye edici antiromatizmal ilacı uygun dozunda en az üçer ay olmak üzere kullanmış olmasına ve diğer anti-TNF ilaçlardan en az birini kullanmasına rağmen hastalık aktivitesi kontrol altına alınamayan (cevap alınamayan) (bir ay arayla yapılmış iki ayrı muayenede en az üç hassas eklem ve en az üç şiş eklem mevcut olan) hastaya Tofacitinib tedavisi başlanmıştı. Hastada Tofacitinib tedavisi ile hastalık aktivitesi kontrol altına alınmış ve PSARC’a göre düzelme gözlenmiştir. Tofacitinib kullanımına 6(altı) ay süre ile devam edilmesi uygundur.\nİlaç Güvenlik İzlem Formu Tarih ve Seri No: {TARIH} / {IGIF}\nHasta tarafından imzalı İlaç Kullanım Onay Formu Seri No: {ONAY}"
     }
    ]
   },
   {
    "name": "Upadasitinib",
    "items": [
     {
      "t": "İlk rapor",
      "dur": "3 ay",
      "ilac": "Upadasitinib 15mg | tablet | günlük 1×1 | oral",
      "text": "Psöriyatik Artrit tanılı hasta; en az 3 farklı hastalık modifiye edici antiromatizmal ilacı uygun dozunda en az üçer ay olmak üzere kullanmış olmasına rağmen hastalık aktivitesi kontrol altına alınamamıştır (bir ay arayla yapılmış iki ayrı muayenede en az üç hassas eklem ve en az üç şiş eklem mevcuttur). Diğer anti-TNF ilaçlardan en az birini kullanmış ve cevap alınamamıştır. Hastanın günlük Upadasitinib tedavisini 3(üç) ay süre ile kullanması uygundur.\nİlaç Güvenlik İzlem Formu Tarih ve Seri No: {TARIH} / {IGIF}\nHasta tarafından imzalı İlaç Kullanım Onay Formu Seri No: {ONAY}"
     },
     {
      "t": "Devam raporu",
      "dur": "6 ay",
      "ilac": "Upadasitinib 15mg | tablet | günlük 1×1 | oral",
      "text": "Psöriyatik Artrit tanılı hasta; en az 3 farklı hastalık modifiye edici antiromatizmal ilacı uygun dozunda en az üçer ay olmak üzere kullanmış olmasına ve diğer anti-TNF ilaçlardan en az birini kullanmasına rağmen hastalık aktivitesi kontrol altına alınamayan (cevap alınamayan) (bir ay arayla yapılmış iki ayrı muayenede en az üç hassas eklem ve en az üç şiş eklem mevcut olan) hastaya Upadasitinib tedavisi başlanmıştı. Hastada Upadasitinib tedavisi ile hastalık aktivitesi kontrol altına alınmış ve PSARC’a göre düzelme gözlenmiştir. Upadasitinib kullanımına 6(altı) ay süre ile devam edilmesi uygundur.\nİlaç Güvenlik İzlem Formu Tarih ve Seri No: {TARIH} / {IGIF}\nHasta tarafından imzalı İlaç Kullanım Onay Formu Seri No: {ONAY}"
     }
    ]
   },
   {
    "name": "Apremilast",
    "items": [
     {
      "t": "İlk rapor",
      "dur": "16 hafta",
      "ilac": "Apremilast 10-20-30mg | tablet | günlük | oral",
      "text": "Aktif psoriatik artritli hastanın en az 3 faklı hastalık modifiye edici antiromatizmal ilacı uygun dozunda en az 3’er ay kullanmış olmasına rağmen hastalık aktivitesi kontrol altına alınamamıştır. Birer ay arayla yapılmış iki ayrı muayenede üçten fazla hassas ve üçten fazla şiş eklem vardır. Apremilast tedavisi başlangıç titrasyon paketi (14 günlük tedavi) ve idame tedavisini (2×1 30 mg apremilast) kullanması uygundur.\n1. Gün 1×1 10 mg Sabah\n2. Gün 2×1 10 mg Sabah-Akşam\n3. Gün 1×1 10 mg Sabah, 1×1 20 mg Akşam\n4. Gün 2×1 20 mg Sabah-Akşam\n5. Gün 1×1 20 mg Sabah, 1×1 30 mg Akşam\nSonrasında 2×1 30 mg/gün kullanılması uygundur.\nİlaç Güvenlik İzlem Formu Tarih ve Seri No: {TARIH} / {IGIF}\nHasta tarafından imzalı İlaç Kullanım Onay Formu Seri No: {ONAY}"
     },
     {
      "t": "Devam raporu",
      "dur": "6 ay",
      "ilac": "Apremilast 10-20-30mg | tablet | günlük | oral",
      "text": "Psöriyatik Artrit tanılı, en az 3 farklı hastalık modifiye edici antiromatizmal ilacı uygun dozunda en az üçer ay olmak üzere kullanmasına rağmen hastalık aktivitesi kontrol altına alınamayan (cevap alınamayan) hastaya Apremilast tedavisi başlanmıştı. Apremilast tedavisi başlangıç titrasyon paketi dahil olmak üzere idame paketi ile günde 2×1 30 mg olacak şekilde 16 hafta kullanılan hastada tedaviye yeterli cevap alınmış ve PSARC’a göre düzelme gözlenmiştir. Apremilast kullanımına 6(altı) ay süre ile devam edilmesi uygundur.\nİlaç Güvenlik İzlem Formu Tarih ve Seri No: {TARIH} / {IGIF}\nHasta tarafından imzalı İlaç Kullanım Onay Formu Seri No: {ONAY}"
     }
    ]
   }
  ],
  "src": "FTR Online"
 },
 {
  "id": "vaskulit",
  "title": "Vaskülitler, Behçet ve üveit",
  "sub": "GPA/MPA rituksimab · Takayasu ve DHA tosilizumab · Behçet infliksimab · üveit adalimumab",
  "groups": [
   {
    "name": "Rituksimab — GPA / MPA (09.01.3.9 · M31.3, M31.7)",
    "items": [
     {
      "t": "İlk rapor",
      "dur": "6 ay",
      "ilac": "Rituksimab 500mg | konsantre solüsyon içeren flakon | 1×2 | 6 ayda bir (0 ve 15. gün infüzyon) | intravenöz",
      "text": "Siklofosfamide dirençli veya siklofosfamid tedavisi verilemeyen ciddi, aktif granülomatöz polianjitis (GPA/ Wegener granülomatozu) / mikroskobik polianjitis (MPA) tanısı olan hastanın her 6 ayda bir tekrarlanan 0. ve 2. haftalarda 1000mg ardışık iki doz şeklinde 6(altı) ay süre ile intravenöz Rituksimab kullanması uygundur.\nİlaç Güvenlik İzlem Formu Tarih ve Seri No: {TARIH} / {IGIF}\nHasta tarafından imzalanan İlaç Kullanım Onay Formu Seri No: {ONAY}"
     },
     {
      "t": "Devam raporu",
      "dur": "6 ay",
      "ilac": "Rituksimab 500mg | konsantre solüsyon içeren flakon | 1×2 | 6 ayda bir (0 ve 15. gün infüzyon) | intravenöz",
      "text": "Siklofosfamide dirençli veya siklofosfamid tedavisi verilemeyen ciddi, aktif granülomatöz polianjitis (GPA/ Wegener granülomatozu) / mikroskobik polianjitis (MPA) tanıları olan hastada Rituksimab tedavisine yanıt alınmıştır. Hastanın Rituksimab tedavisine 0. ve 2. haftalarda 1000’er mg’lık ardışık iki doz şeklinde 6 ay süreyle devamı uygundur.\nİlaç Güvenlik İzlem Formu Tarih ve Seri No: {TARIH} / {IGIF}\nHasta tarafından imzalanan İlaç Kullanım Onay Formu Seri No: {ONAY}"
     }
    ]
   },
   {
    "name": "Tosilizumab — Takayasu arteriti (09.01.3.7 · M31.4)",
    "items": [
     {
      "t": "İlk rapor",
      "dur": "3 ay",
      "ilac": "Tosilizumab 162mg | kullanıma hazır enjektör | 1×1 | haftada bir | subkütan",
      "text": "Yeterli doz ve sürede sistemik kortikosteroid ve yeterli doz ve süre azatioprin, siklofosfamid, metotreksat, mikofenolat mofetil/ mikofenolat sodyum tedavilerinden en az ikisinin kullanıldığı ve yanıt alınamadığı Takayasu arteriti tanılı hastanın 3 ay süreyle, haftada bir kez, subkütan olarak Tocilizumab 162 mg kullanması uygundur.\nİlaç Güvenlik İzlem Formu Tarih ve Seri No: {TARIH} / {IGIF}\nHasta tarafından imzalanan İlaç Kullanım Onay Formu Seri No: {ONAY}"
     },
     {
      "t": "Devam raporu",
      "dur": "6 ay",
      "ilac": "Tosilizumab 162mg | kullanıma hazır enjektör | 1×1 | haftada bir | subkütan",
      "text": "Yeterli doz ve sürede sistemik kortikosteroid ve yeterli doz ve süre azatioprine, siklofosfamid, metotreksat, mikofenolat mofetil/ mikofenolat sodyum tedavilerinden en az ikisinin kullanıldığı ve yanıt alınamadığı Takayasu arteriti tanılı hastaya Tocilizumab tedavisi başlanmıştı. Hastada tedaviye cevap alınmıştır. Takayasu arteriti tanılı hastanın 6 ay süreyle, haftada bir kez, subkütan olarak Tocilizumab 162 mg kullanmasına devam edilmesi uygundur.\nİlaç Güvenlik İzlem Formu Tarih ve Seri No: {TARIH} / {IGIF}\nHasta tarafından imzalanan İlaç Kullanım Onay Formu Seri No: {ONAY}"
     }
    ]
   },
   {
    "name": "Tosilizumab — dev hücreli arterit (09.01.3.8 · M31.6)",
    "items": [
     {
      "t": "İlk rapor",
      "dur": "3 ay",
      "ilac": "Tosilizumab 162mg | kullanıma hazır enjektör | 1×1 | haftada bir | subkütan",
      "text": "Dev Hücreli Arteriti (DHA) bulunan hastanın, uzun süre ve yüksek doz kortikosteroid kullanımı kontrendikedir. Hastanın 3 ay süreyle, haftada bir kez, subkütan olarak Tocilizumab 162 mg kullanması uygundur.\nİlaç Güvenlik İzlem Formu Tarih ve Seri No: {TARIH} / {IGIF}\nHasta tarafından imzalanan İlaç Kullanım Onay Formu Seri No: {ONAY}",
      "note": "Teşhis: 09.01.3.8 Temporal arterit · ICD M31.6 (FTR sayfasında Takayasu kodu yazılmış)."
     },
     {
      "t": "Devam raporu",
      "dur": "6 ay",
      "ilac": "Tosilizumab 162mg | kullanıma hazır enjektör | 1×1 | haftada bir | subkütan",
      "text": "Dev Hücreli Arteriti (DHA) bulunan, uzun süre ve yüksek doz kortikosteroid kullanımı kontrendike olması nedeniyle başlanan Tocilizumab tedavisine yanıt alınmıştır. Hastanın 6 ay süreyle, haftada bir kez, subkütan olarak Tocilizumab 162 mg kullanımına devam edilmesi uygundur.\nİlaç Güvenlik İzlem Formu Tarih ve Seri No: {TARIH} / {IGIF}\nHasta tarafından imzalanan İlaç Kullanım Onay Formu Seri No: {ONAY}",
      "note": "Teşhis: 09.01.3.8 Temporal arterit · ICD M31.6 (FTR sayfasında Takayasu kodu yazılmış)."
     }
    ]
   },
   {
    "name": "İnfliksimab — Behçet hastalığı (teşhis kodu 15.02)",
    "items": [
     {
      "t": "Üveit — 1. rapor",
      "dur": "3 ay",
      "ilac": "İnfliksimab — 5 mg/kg IV, 0-2-6. hafta, sonra 8 haftada bir",
      "text": "Behçet hastalığı ile ilişkili üveit tanılı hastada lokal ve sistemik steroidler, azatiyoprin, siklosporin ve/veya interferon tedavilerine rağmen yanıt alınamamış olup birden fazla hastalık modifiye edici antiromatizmal ilaç en az 3 ay kullanılmıştır. Üveit tanısı göz hastalıkları uzman hekimi tarafından konulmuştur. Hastanın İnfliksimab etken maddeli ilacı 0., 2. ve 6. haftalarda ve ardından 8 haftada bir 5 mg/kg intravenöz infüzyon olarak 3 (üç) ay süre ile kullanması uygundur. Mahallinde tedavisi sürdürülebilir.\n{TARIH} tarihli İlaç Güvenlik İzlem Formu Seri No: {IGIF}. İlaç Kullanım Onay Formu doldurulmuş ve hasta tarafından imzalanmıştır; Onay Formu Seri No: {ONAY}."
     },
     {
      "t": "Üveit — devam",
      "dur": "6 ay",
      "ilac": "İnfliksimab — 8 haftada bir 5 mg/kg IV",
      "text": "Behçet hastalığı ile ilişkili üveit tanılı hastaya İnfliksimab tedavisi başlanmış ve tedaviye yeterli yanıt alınmıştır. Hastanın İnfliksimab etken maddeli ilacı 8 haftada bir 5 mg/kg intravenöz infüzyon olarak 6 (altı) ay süre ile kullanmaya devam etmesi uygundur. Mahallinde tedavisi sürdürülebilir.\n{TARIH} tarihli İlaç Güvenlik İzlem Formu Seri No: {IGIF}. İlaç Kullanım Onay Formu doldurulmuş ve hasta tarafından imzalanmıştır; Onay Formu Seri No: {ONAY}."
     },
     {
      "t": "Vaskülit — 1. rapor",
      "dur": "3 ay",
      "ilac": "İnfliksimab — 5 mg/kg IV, 0-2-6. hafta, sonra 8 haftada bir",
      "text": "Behçet hastalığı ile ilişkili vasküler tutulum tanılı hastada lokal ve sistemik steroidler, azatiyoprin, siklosporin ve/veya interferon tedavilerine rağmen yanıt alınamamış olup birden fazla hastalık modifiye edici antiromatizmal ilaç en az 3 ay kullanılmıştır. Hastanın İnfliksimab etken maddeli ilacı 0., 2. ve 6. haftalarda ve ardından 8 haftada bir 5 mg/kg intravenöz infüzyon olarak 3 (üç) ay süre ile kullanması uygundur. Mahallinde tedavisi sürdürülebilir.\n{TARIH} tarihli İlaç Güvenlik İzlem Formu Seri No: {IGIF}. İlaç Kullanım Onay Formu doldurulmuş ve hasta tarafından imzalanmıştır; Onay Formu Seri No: {ONAY}."
     },
     {
      "t": "Vaskülit — devam",
      "dur": "6 ay",
      "ilac": "İnfliksimab — 8 haftada bir 5 mg/kg IV",
      "text": "Behçet hastalığı ile ilişkili vasküler tutulum tanılı hastaya İnfliksimab tedavisi başlanmış ve tedaviye yeterli yanıt alınmıştır. Hastanın İnfliksimab etken maddeli ilacı 8 haftada bir 5 mg/kg intravenöz infüzyon olarak 6 (altı) ay süre ile kullanmaya devam etmesi uygundur. Mahallinde tedavisi sürdürülebilir.\n{TARIH} tarihli İlaç Güvenlik İzlem Formu Seri No: {IGIF}. İlaç Kullanım Onay Formu doldurulmuş ve hasta tarafından imzalanmıştır; Onay Formu Seri No: {ONAY}."
     },
     {
      "t": "Nörolojik — 1. rapor",
      "dur": "3 ay",
      "ilac": "İnfliksimab — 5 mg/kg IV, 0-2-6. hafta, sonra 8 haftada bir",
      "text": "Behçet hastalığı ile ilişkili nörolojik tutulum tanılı hastada lokal ve sistemik steroidler, azatiyoprin, siklosporin ve/veya interferon tedavilerine rağmen yanıt alınamamış olup birden fazla hastalık modifiye edici antiromatizmal ilaç en az 3 ay kullanılmıştır. Hastanın İnfliksimab etken maddeli ilacı 0., 2. ve 6. haftalarda ve ardından 8 haftada bir 5 mg/kg intravenöz infüzyon olarak 3 (üç) ay süre ile kullanması uygundur. Mahallinde tedavisi sürdürülebilir.\n{TARIH} tarihli İlaç Güvenlik İzlem Formu Seri No: {IGIF}. İlaç Kullanım Onay Formu doldurulmuş ve hasta tarafından imzalanmıştır; Onay Formu Seri No: {ONAY}."
     },
     {
      "t": "Nörolojik — devam",
      "dur": "6 ay",
      "ilac": "İnfliksimab — 8 haftada bir 5 mg/kg IV",
      "text": "Behçet hastalığı ile ilişkili nörolojik tutulum tanılı hastaya İnfliksimab tedavisi başlanmış ve tedaviye yeterli yanıt alınmıştır. Hastanın İnfliksimab etken maddeli ilacı 8 haftada bir 5 mg/kg intravenöz infüzyon olarak 6 (altı) ay süre ile kullanmaya devam etmesi uygundur. Mahallinde tedavisi sürdürülebilir.\n{TARIH} tarihli İlaç Güvenlik İzlem Formu Seri No: {IGIF}. İlaç Kullanım Onay Formu doldurulmuş ve hasta tarafından imzalanmıştır; Onay Formu Seri No: {ONAY}."
     },
     {
      "t": "GİS — 1. rapor",
      "dur": "3 ay",
      "ilac": "İnfliksimab — 5 mg/kg IV, 0-2-6. hafta, sonra 8 haftada bir",
      "text": "Behçet hastalığı ile ilişkili gastrointestinal tutulum tanılı hastada lokal ve sistemik steroidler, azatiyoprin, siklosporin ve/veya interferon tedavilerine rağmen yanıt alınamamış olup birden fazla hastalık modifiye edici antiromatizmal ilaç en az 3 ay kullanılmıştır. Hastanın İnfliksimab etken maddeli ilacı 0., 2. ve 6. haftalarda ve ardından 8 haftada bir 5 mg/kg intravenöz infüzyon olarak 3 (üç) ay süre ile kullanması uygundur. Mahallinde tedavisi sürdürülebilir.\n{TARIH} tarihli İlaç Güvenlik İzlem Formu Seri No: {IGIF}. İlaç Kullanım Onay Formu doldurulmuş ve hasta tarafından imzalanmıştır; Onay Formu Seri No: {ONAY}."
     },
     {
      "t": "GİS — devam",
      "dur": "6 ay",
      "ilac": "İnfliksimab — 8 haftada bir 5 mg/kg IV",
      "text": "Behçet hastalığı ile ilişkili gastrointestinal tutulum tanılı hastaya İnfliksimab tedavisi başlanmış ve tedaviye yeterli yanıt alınmıştır. Hastanın İnfliksimab etken maddeli ilacı 8 haftada bir 5 mg/kg intravenöz infüzyon olarak 6 (altı) ay süre ile kullanmaya devam etmesi uygundur. Mahallinde tedavisi sürdürülebilir.\n{TARIH} tarihli İlaç Güvenlik İzlem Formu Seri No: {IGIF}. İlaç Kullanım Onay Formu doldurulmuş ve hasta tarafından imzalanmıştır; Onay Formu Seri No: {ONAY}."
     }
    ]
   },
   {
    "name": "Adalimumab — non-enfeksiyöz üveit (romatoloji raporu)",
    "items": [
     {
      "t": "İlk rapor",
      "dur": "3 ay",
      "ilac": "Adalimumab 40mg | kullanıma hazır enjektör | 1×1 | iki haftada bir | subkütan",
      "text": "Kortikosteroidlere yetersiz yanıt vermiş, kortikosteroid kullanımının azaltılması gereken veya kortikosteroid tedavisine uygun olmayan non-enfeksiyöz orta, arka veya panüveiti olan hastadır. Üveit tanısı göz hastalıkları uzman hekimi tarafından konulmuştur. Hastanın 2 haftada bir 40 mg şeklinde subkütan uygulanmak üzere 3(üç) ay süreyle Adalimumab kullanması uygundur. “Mahallinde tedavisi sürdürülebilir”.\nİlaç Güvenlik İzlem Formu Tarih ve Seri No: {TARIH} / {IGIF}\nHasta tarafından imzalanan İlaç Kullanım Onay Formu Seri No: {ONAY}",
      "note": "Teşhis kodu 12.02.1 Kronik ve nükseden üveitler · ICD H20.8 · tanı: İridosiklit, diğer."
     },
     {
      "t": "Devam raporu",
      "dur": "6 ay",
      "ilac": "Adalimumab 40mg | kullanıma hazır enjektör | 1×1 | iki haftada bir | subkütan",
      "text": "Kortikosteroidlere yetersiz yanıt vermiş, kortikosteroid kullanımının azaltılması gereken veya kortikosteroid tedavisine uygun olmayan non-enfeksiyöz orta, arka veya panüveiti olan, üveit tanısının göz hastalıkları uzman hekimi tarafından konulduğu hastada 3 ay süre ile adalimumab tedavisi uygulanmıştı. Hastada tedaviye yanıt alınmıştır. Hastanın Adalimumab tedavisinin 2 haftada bir 40 mg şeklinde subkütan uygulanmak üzere 6 ay süreyle devam etmesi uygundur. “Mahallinde tedavisi sürdürülebilir”.\nİlaç Güvenlik İzlem Formu Tarih ve Seri No: {TARIH} / {IGIF}\nHasta tarafından imzalanan İlaç Kullanım Onay Formu Seri No: {ONAY}",
      "note": "Teşhis kodu 12.02.1 Kronik ve nükseden üveitler · ICD H20.8 · tanı: İridosiklit, diğer."
     }
    ]
   }
  ],
  "src": "FTR Online (Behçet: TRD-G)"
 },
 {
  "id": "otoinflam",
  "title": "FMF ve otoinflamatuvar hastalıklar",
  "sub": "Anakinra ve kanakinumab · AOSD M06.1 · TRAPS/HIDS/CAPS L50.8",
  "groups": [
   {
    "name": "Anakinra — erişkin Still hastalığı (ICD M06.1, kırılım: RA)",
    "items": [
     {
      "t": "1. rapor — başlangıç",
      "dur": "1 yıl",
      "ilac": "Anakinra — günde 100 mg subkutan",
      "text": "Orta-yüksek şiddette, aktif sistemik özellikleri olan erişkin başlangıçlı Still hastalığı tanılı hastada en az 3 ay süreyle metotreksat ve/veya diğer hastalık modifiye edici antiromatizmal ilaç tedavisine rağmen hastalık aktivitesi devam etmektedir. Hastanın Anakinra etken maddeli ilacı günde 100 mg subkutan olarak kullanması uygundur. Tedavi sağlık kurumunda uygulanacaktır.\nHasta Onay Formu mevzuata uygun olarak doldurulmuştur; Onay Formu Seri No: {ONAY}. İlaç Güvenlik İzlem Formu Seri No: {IGIF}."
     },
     {
      "t": "Devam",
      "dur": "1 yıl",
      "ilac": "Anakinra — günde 100 mg subkutan",
      "text": "Orta-yüksek şiddette, aktif sistemik özellikleri olan erişkin başlangıçlı Still hastalığı tanılı hastaya, en az 3 ay süreyle metotreksat ve/veya diğer hastalık modifiye edici antiromatizmal ilaç tedavisine rağmen hastalık aktivitesinin devam etmesi nedeniyle Anakinra tedavisi başlanmıştır. Tedavi ile hastalık aktivitesinde gerileme sağlanmıştır. Hastanın Anakinra etken maddeli ilacı günde 100 mg subkutan olarak kullanmaya devam etmesi uygundur. Mahallinde tedavisi sürdürülebilir.\nHasta Onay Formu mevzuata uygun olarak doldurulmuştur; Onay Formu Seri No: {ONAY}. İlaç Güvenlik İzlem Formu Seri No: {IGIF}."
     }
    ]
   },
   {
    "name": "Anakinra — amiloidozu olmayan FMF",
    "items": [
     {
      "t": "1. rapor — kolşisine rağmen ataklar",
      "dur": "3 ay",
      "ilac": "Anakinra — günde 100 mg subkutan",
      "note": "CRP değerleri: atak dönemlerine ait, en az 15 gün arayla, normalin üst sınırının ≥ 2 katı olmalı.",
      "text": "Amiloidoz saptanmamış Ailevi Akdeniz Ateşi tanılı hastada, yurt içi ve yurt dışı (ithal) kolşisin preparatlarının toplam en az 6 ay süreyle tolere edilebilen maksimum dozda kullanılmasına rağmen son 3 ay içinde akut faz reaktanları yüksekliği ile kanıtlanmış en az üç atak gelişmiştir. Hastalık aktivitesi klinik ve laboratuvar bulgularla doğrulanmıştır. Hastanın Anakinra etken maddeli ilacı günde 100 mg subkutan olarak 3 (üç) ay süre ile kullanması uygundur. Tedavi sağlık kurumunda uygulanacaktır.\nCRP (referans aralığı: …… mg/L): …… tarihinde …… mg/L; …… tarihinde …… mg/L; …… tarihinde …… mg/L.\nHasta Onay Formu mevzuata uygun olarak doldurulmuştur; Onay Formu Seri No: {ONAY}. İlaç Güvenlik İzlem Formu Seri No: {IGIF}."
     },
     {
      "t": "Devam — ataklar nedeniyle başlanan",
      "dur": "6 ay",
      "ilac": "Anakinra — günde 100 mg subkutan",
      "text": "Amiloidoz saptanmamış Ailevi Akdeniz Ateşi tanılı hastaya, yurt içi ve yurt dışı (ithal) kolşisin preparatlarının toplam en az 6 ay süreyle kullanılmasına rağmen son 3 ay içinde akut faz reaktanları yüksekliği ile kanıtlanmış en az üç atak geçirmesi nedeniyle Anakinra tedavisi başlanmıştır. Tedavi altında atak sıklığında azalma ve akut faz reaktanlarında belirgin düşüş izlenmiştir. Hastanın Anakinra etken maddeli ilacı günde 100 mg subkutan olarak 6 (altı) ay süre ile kullanmaya devam etmesi uygundur. Mahallinde tedavisi sürdürülebilir.\nBaşlangıç raporundaki CRP değerleri: …… tarihinde …… mg/L; …… tarihinde …… mg/L; …… tarihinde …… mg/L.\nHasta Onay Formu mevzuata uygun olarak doldurulmuştur; Onay Formu Seri No: {ONAY}. İlaç Güvenlik İzlem Formu Seri No: {IGIF}."
     },
     {
      "t": "1. rapor — kolşisin intoleransı",
      "dur": "3 ay",
      "ilac": "Anakinra — günde 100 mg subkutan",
      "note": "Konsültasyon notunun tarihini ve branşını yazın.",
      "text": "Amiloidoz saptanmamış Ailevi Akdeniz Ateşi tanılı hastada, yurt içi ve yurt dışı (ithal) kolşisin preparatlarına ciddi intolerans nedeniyle kolşisin tedavisi kullanılamamaktadır. Bu durum {TARIH} tarihli …… konsültasyon notu ile belgelenmiştir. Hastalık aktivitesi devam etmekte olup klinik ve laboratuvar bulgularla doğrulanmıştır. Hastanın Anakinra etken maddeli ilacı günde 100 mg subkutan olarak 3 (üç) ay süre ile kullanması uygundur. Tedavi sağlık kurumunda uygulanacaktır.\nHasta Onay Formu mevzuata uygun olarak doldurulmuştur; Onay Formu Seri No: {ONAY}. İlaç Güvenlik İzlem Formu Seri No: {IGIF}."
     },
     {
      "t": "Devam — intolerans nedeniyle başlanan",
      "dur": "6 ay",
      "ilac": "Anakinra — günde 100 mg subkutan",
      "text": "Amiloidoz saptanmamış Ailevi Akdeniz Ateşi tanılı hastada ciddi intolerans nedeniyle kolşisin kullanılamamaktadır; bu durum {TARIH} tarihli …… konsültasyon notu ile belgelenmiştir. Anakinra tedavisi altında atak sıklığında azalma ve akut faz reaktanlarında belirgin düşüş izlenmiştir. Hastanın Anakinra etken maddeli ilacı günde 100 mg subkutan olarak 6 (altı) ay süre ile kullanmaya devam etmesi uygundur. Mahallinde tedavisi sürdürülebilir.\nHasta Onay Formu mevzuata uygun olarak doldurulmuştur; Onay Formu Seri No: {ONAY}. İlaç Güvenlik İzlem Formu Seri No: {IGIF}."
     }
    ]
   },
   {
    "name": "Anakinra — amiloidozu olan FMF",
    "items": [
     {
      "t": "1. rapor — başlangıç",
      "dur": "1 yıl",
      "ilac": "Anakinra — günde 100 mg subkutan",
      "text": "Ailevi Akdeniz Ateşi tanılı hastada {TARIH} tarihli …… biyopsisi (patoloji rapor no: ……) ile AA tipi amiloidoz gösterilmiştir. Hastanın Anakinra etken maddeli ilacı günde 100 mg subkutan olarak 1 (bir) yıl süre ile kullanması uygundur. Tedavi sağlık kurumunda uygulanacaktır.\nHasta Onay Formu mevzuata uygun olarak doldurulmuştur; Onay Formu Seri No: {ONAY}. İlaç Güvenlik İzlem Formu Seri No: {IGIF}."
     },
     {
      "t": "Devam",
      "dur": "1 yıl",
      "ilac": "Anakinra — günde 100 mg subkutan",
      "text": "Ailevi Akdeniz Ateşi tanılı hastada {TARIH} tarihli …… biyopsisi (patoloji rapor no: ……) ile AA tipi amiloidoz gösterilmiştir. Anakinra tedavisi ile klinik bulgularda ve akut faz reaktanlarında gerileme izlenmiştir. Hastanın Anakinra etken maddeli ilacı günde 100 mg subkutan olarak 1 (bir) yıl süre ile kullanmaya devam etmesi uygundur. Mahallinde tedavisi sürdürülebilir.\nHasta Onay Formu mevzuata uygun olarak doldurulmuştur; Onay Formu Seri No: {ONAY}. İlaç Güvenlik İzlem Formu Seri No: {IGIF}."
     }
    ]
   },
   {
    "name": "Anakinra — TRAPS / HIDS-MKD ve CAPS (ICD L50.8)",
    "items": [
     {
      "t": "TRAPS / HIDS-MKD — 1. rapor",
      "dur": "3 ay",
      "ilac": "Anakinra — günde 100 mg subkutan",
      "note": "Tanıyı (TRAPS veya HIDS-MKD), geni ve varyantı yazın.",
      "text": "Genetik olarak patojenik varyant ile tanı almış periyodik ateş sendromu (……) hastasıdır (…… geni, …… varyantı; {TARIH} tarihli genetik rapor). Hastanın Anakinra etken maddeli ilacı günde 100 mg subkutan olarak 3 (üç) ay süre ile kullanması uygundur. Tedavi sağlık kurumunda uygulanacaktır.\nHasta Onay Formu mevzuata uygun olarak doldurulmuştur; Onay Formu Seri No: {ONAY}. İlaç Güvenlik İzlem Formu Seri No: {IGIF}."
     },
     {
      "t": "TRAPS / HIDS-MKD — devam",
      "dur": "1 yıl",
      "ilac": "Anakinra — günde 100 mg subkutan",
      "text": "Genetik olarak patojenik varyant ile tanı almış periyodik ateş sendromu (……) hastasıdır. Anakinra tedavisi ile klinik bulgularda ve akut faz reaktanlarında gerileme izlenmiştir. Hastanın Anakinra etken maddeli ilacı günde 100 mg subkutan olarak 1 (bir) yıl süre ile kullanmaya devam etmesi uygundur. Mahallinde tedavisi sürdürülebilir.\nHasta Onay Formu mevzuata uygun olarak doldurulmuştur; Onay Formu Seri No: {ONAY}. İlaç Güvenlik İzlem Formu Seri No: {IGIF}."
     },
     {
      "t": "CAPS — 1. rapor",
      "dur": "3 ay",
      "ilac": "Anakinra — günde 100 mg subkutan",
      "note": "Alt tipi (Muckle-Wells / NOMID-CINCA / FCAS) yazın.",
      "text": "Kriyopirin ilişkili periyodik sendrom (CAPS; ……) tanısı ile izlenen hastadır. Hastanın Anakinra etken maddeli ilacı günde 100 mg subkutan olarak 3 (üç) ay süre ile kullanması uygundur. Tedavi sağlık kurumunda uygulanacaktır.\nHasta Onay Formu mevzuata uygun olarak doldurulmuştur; Onay Formu Seri No: {ONAY}. İlaç Güvenlik İzlem Formu Seri No: {IGIF}."
     },
     {
      "t": "CAPS — devam",
      "dur": "3 ay",
      "ilac": "Anakinra — günde 100 mg subkutan",
      "text": "Kriyopirin ilişkili periyodik sendrom (CAPS; ……) tanısı ile izlenen hastada Anakinra tedavisi ile klinik bulgularda ve akut faz reaktanlarında gerileme izlenmiştir. Hastanın Anakinra etken maddeli ilacı günde 100 mg subkutan olarak 3 (üç) ay süre ile kullanmaya devam etmesi uygundur. Mahallinde tedavisi sürdürülebilir.\nHasta Onay Formu mevzuata uygun olarak doldurulmuştur; Onay Formu Seri No: {ONAY}. İlaç Güvenlik İzlem Formu Seri No: {IGIF}."
     }
    ]
   },
   {
    "name": "Kanakinumab — FMF",
    "items": [
     {
      "t": "Amiloidozu olmayan FMF — anakinra yanıtsızlığı",
      "dur": "3 ay",
      "ilac": "Kanakinumab — 4 haftada bir 150 mg subkutan",
      "note": "Anakinra intoleransı nedeniyle geçildiyse yanıtsızlık cümlesini intolerans + konsültasyon notu olarak değiştirin. < 40 kg hastada doz 2 mg/kg.",
      "text": "Ailevi Akdeniz Ateşi tanılı hastada 6 aydan uzun süre kolşisinin tolere edilebilen maksimum dozunun kullanılmasına rağmen son 3 ay içinde akut faz reaktanı yüksekliğinin eşlik ettiği en az 3 atak gelişmiştir. Hastaya anakinra tedavisi uygulanmış, ancak 3 ay düzenli kullanıma rağmen yeterli klinik ve laboratuvar yanıt alınamamıştır. Hastanın Kanakinumab etken maddeli ilacı 4 haftada bir 150 mg subkutan olarak 3 (üç) ay süre ile kullanması uygundur. Mahallinde tedavisi sürdürülebilir.\nCRP (referans aralığı: …… mg/L): …… tarihinde …… mg/L; …… tarihinde …… mg/L; …… tarihinde …… mg/L.\nHasta Onay Formu mevzuata uygun olarak doldurulmuştur; Onay Formu Seri No: {ONAY}. İlaç Güvenlik İzlem Formu Seri No: {IGIF}."
     },
     {
      "t": "Amiloidozu olan FMF — anakinra yanıtsızlığı",
      "dur": "1 yıl",
      "ilac": "Kanakinumab — 4 haftada bir 150 mg subkutan",
      "note": "Anakinra yan etkisi nedeniyle geçildiyse cümleyi değiştirip konsültasyon notunu belirtin. < 40 kg hastada doz 2 mg/kg.",
      "text": "Ailevi Akdeniz Ateşi tanılı hastada {TARIH} tarihli …… biyopsisi (patoloji rapor no: ……) ile AA tipi amiloidoz gösterilmiştir. Hastaya anakinra tedavisi uygulanmış, ancak 3 ay düzenli kullanıma rağmen yeterli yanıt alınamamıştır. Hastanın Kanakinumab etken maddeli ilacı 4 haftada bir 150 mg subkutan olarak 1 (bir) yıl süre ile kullanması uygundur. Mahallinde tedavisi sürdürülebilir.\nHasta Onay Formu mevzuata uygun olarak doldurulmuştur; Onay Formu Seri No: {ONAY}. İlaç Güvenlik İzlem Formu Seri No: {IGIF}."
     },
     {
      "t": "Devam",
      "dur": "3 ay (amiloidozlu FMF 1 yıl)",
      "ilac": "Kanakinumab — 4 haftada bir 150 mg subkutan",
      "note": "6 ay ataksız ve akut faz normal ise SUT'a göre doz aralığını açıp cümleye ekleyin.",
      "text": "Ailevi Akdeniz Ateşi tanılı hastaya kolşisin ve anakinra tedavilerine yeterli yanıt alınamaması nedeniyle Kanakinumab tedavisi başlanmıştır. Tedavi altında atak sıklık ve şiddetinde azalma ve akut faz reaktanlarında gerileme izlenmiştir (başlangıç CRP: {S0} mg/L, güncel CRP: {S1} mg/L). Hastanın Kanakinumab etken maddeli ilacı 4 haftada bir 150 mg subkutan olarak kullanmaya devam etmesi uygundur. Mahallinde tedavisi sürdürülebilir.\nHasta Onay Formu mevzuata uygun olarak doldurulmuştur; Onay Formu Seri No: {ONAY}. İlaç Güvenlik İzlem Formu Seri No: {IGIF}."
     }
    ]
   }
  ],
  "src": "TRD-G"
 },
 {
  "id": "bilgi",
  "title": "Rapor bilgileri ve kodlar",
  "sub": "Teşhis kodları, İGİF, csDMARD rapor notları",
  "html": "\n <h3>Teşhis kodları (SUT Ek-4/D)</h3>\n <table>\n <tr><th>09.01.5.1</th><td>Romatoid artrit — M05–M06, M08.0, M08.2, M08.3 (erişkin Still için M06.1, kırılım RA)</td></tr>\n <tr><th>09.01.6.2</th><td>Ankilozan spondilit — M45</td></tr>\n <tr><th>09.01.6.1</th><td>Andiferansiye spondiloartropati — M46.5, M46.8–M46.9</td></tr>\n <tr><th>09.01.6.4</th><td>Psöriatik artrit — M07.0, M07.3</td></tr>\n <tr><th>09.01.6.3</th><td>Enteropatik artropatiler — M07.4–M07.6</td></tr>\n <tr><th>09.01.1</th><td>SLE ve ilişkili sendromlar — M32</td></tr>\n <tr><th>09.01.4 / 09.01.10</th><td>Skleroderma, MKBH — M34.9, M35.1 / Progresif sistemik skleroz — M34.0</td></tr>\n <tr><th>09.01.5.2</th><td>Sjögren sendromu — M35.0</td></tr>\n <tr><th>09.01.7.1 / 7.2</th><td>Dermatomiyozit — M33.0, M33.1, M33.9 / Polimiyozit — M33.2</td></tr>\n <tr><th>09.01.3.x</th><td>Vaskülitler: 3.1 EGPA M30.1 · 3.5 PAN M30.0 · 3.6 PMR M35.3 · 3.7 Takayasu M31.4 · 3.8 Temporal arterit M31.6 · 3.9 GPA M31.3 · 3.10 MPA M31.7</td></tr>\n <tr><th>15.02</th><td>Behçet hastalığı — M35.2</td></tr>\n <tr><th>L50.8</th><td>TRAPS, HIDS/MKD, CAPS (anakinra/kanakinumab)</td></tr>\n <tr><th>05.03</th><td>Diffüz interstisyel akciğer hastalıkları — J84 (nintedanib IPF/PF-İAH); SSc-İAH için 09.01.10 M34.0</td></tr>\n </table>\n <h3>İlaç Güvenlik İzlem Formu (İGİF)</h3>\n <ul>\n <li>Biyolojikler için TÜFAM yerine e-reçete üzerinden İGİF oluşturulur; enfeksiyon hastalıkları veya göğüs hastalıkları onayı olmadan ilaç reçeteye düşmez.</li>\n <li>Her 6 ayda yenilenir; yeni form önceki formdan en erken 170 gün sonra oluşturulabilir.</li>\n <li>Kod yalnızca oluşturan hekimde görünür — kodu hastaya verin (SMS ile de gider). Raporda ve tercihen reçetede belirtin.</li>\n <li>JAK inhibitörleri ve rituksimab için halen TÜFAM formu kullanılmaktadır (kılavuz tarihi itibarıyla).</li>\n </ul>\n <h3>csDMARD ve diğer ilaçlar için rapor notları</h3>\n <table>\n <tr><th>Metotreksat</th><td>RA, PsA, AS, bağ dokusu, SLE, skleroderma. Oral 2,5 mg: örn. 1×6 tb/hafta. SC formlar ilgili mg 1×/hafta yazılıp doz şeması açıklamaya eklenir.</td></tr>\n <tr><th>Leflunomid</th><td>RA ve PsA (10 mg ödenmez). 1×1/gün veya doğrudan mg; doz şeması açıklamaya yazılmalı.</td></tr>\n <tr><th>Hidroksiklorokin</th><td>2×1 tb veya 2×200 mg; RA, bağ dokusu, SLE, skleroderma.</td></tr>\n <tr><th>Sulfasalazin</th><td>2×2 / 3×2 tb (maks. ödeme 3×2); RA ve AS'de rapor çıkarılabilir; doz şeması açıklamaya.</td></tr>\n <tr><th>Azatioprin / MMF / siklofosfamid</th><td>Uzman hekim raporu, 2 yıla kadar; vaskülit, SSc, RA, Sjögren, Behçet vb. için SB ek onayı alınmadan kullanılabilecek endikasyon dışı listede (272).</td></tr>\n <tr><th>Bosentan</th><td>SSc dijital ülser: KKB + IV iloprost ≥3 ay yanıtsız, >4 dijital ülser (≥1'i >2 mm derin, ağrılı). 3. basamak, romatolog, 6 ay; her reçetede Hasta Kayıt Formu-1.</td></tr>\n <tr><th>Sildenafil / tadalafil</th><td>KKB ve vazodilatöre dirençli dijital ülser/Raynaud — I73.0 hem teşhiste hem raporda; tadalafil 1×20 mg.</td></tr>\n <tr><th>Nintedanib (SSc-İAH)</th><td>DLCO ≤ %30 [kılavuz metni], FVC ≥ %50, HRCT'de > %10 fibrozis; en az bir romatolog + bir göğüs uzmanı; 1 yıl; FVC ≥ %10 düzelme → sonlandırma, ≥ %10 kötüleşme yoksa devam.</td></tr>\n </table>\n <p class=\"note warn\">Kılavuzdaki nintedanib SSc-İAH DLCO eşiği (\"≤ %30\") IPF ölçütüyle (DLCO &gt; %35) çelişkili görünmektedir; rapor öncesi SUT 4.2.x metninden doğrulayın.</p>\n "
 }
];
