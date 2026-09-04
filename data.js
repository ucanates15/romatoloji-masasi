/* Romatoloji Masası — içerik verisi
   SUT özetleri: SUT 4.2.1.C (biyolojik ajanlar ve JAK inhibitörleri kullanım ilkeleri).
   Son değişiklik dikkate alınan: 23.05.2026 RG (yürürlük 05.06.2026). Rapor yazmadan önce yürürlükteki metni doğrulayın. */

const SUT_STAMP = "SUT 4.2.1.C özeti — 23.05.2026 Resmî Gazete değişikliği (yürürlük 05.06.2026) dikkate alındı. Son gözden geçirme: Eylül 2026.";

const SUT = [
{
 id:"genel", title:"Genel kurallar", sub:"Tüm biyolojik/hedefe yönelik ajanlar için ortak hükümler",
 html:`
 <h3>Rapor ve reçete</h3>
 <table>
 <tr><th>Rapor türü</th><td>Sağlık kurulu raporu. Başlangıç raporları genellikle <b>3 ay</b>, idame raporları <b>6 ay</b> süreli (istisnalar ilaç bölümlerinde).</td></tr>
 <tr><th>Raporda kim olmalı</th><td>Tüm romatoloji uzmanları; ya da üniversite / eğitim-araştırma hastanesinde klinik immünoloji veya FTR uzmanı.</td></tr>
 <tr><th>Kim reçete eder</th><td>Raporu düzenleyen uzmanlar veya iç hastalıkları / çocuk sağlığı ve hastalıkları uzmanları.</td></tr>
 <tr><th>Skorlar raporda</th><td>Başlangıç ve güncel DAS28 / BASDAİ / PsARC değerleri her raporda yazılmalı; DAS28'e 6 ayda bir bakılır.</td></tr>
 </table>
 <h3>Ara verme ve kombinasyon</h3>
 <table>
 <tr><th>Tedaviye ara</th><td>Rituksimab için <b>12 ay</b>, diğer etkin maddeler için <b>6 ay</b> ve üzeri ara → yeniden <b>başlangıç kriterleri</b> aranır.</td></tr>
 <tr><th>Kombinasyon</th><td>Aynı hastada iki farklı tanı ile iki farklı anti-TNF ve/veya iki biyolojik ajanın birlikte kullanımı ödenmez. Anti-TNF'ler csDMARD ile kombine edilebilir.</td></tr>
 <tr><th>Tanı değişikliği</th><td>Aynı ilaca devam ederken tanı değişirse (ör. RA → AS) yeni rapor <b>idame kriterleri</b> ile düzenlenir (Aralık 2025 netleştirmesi).</td></tr>
 </table>
 <h3>Uygulama yeri</h3>
 <p>İV formlar FTR / iç hastalıkları / çocuk uzmanı bulunan kurumda uygulanır. SC formların ilk dozu hekim gözetiminde yapılır; raporda <b>"Mahallinde tedavisi sürdürülebilir"</b> ibaresi varsa 12 haftalık dozlar halinde reçete edilebilir.</p>
 <div class="note sut"><b>23.05.2026 değişikliği:</b> Erişkin RA, AS ve PsA'da infliksimab için var olan "önce başka bir anti-TNF kullanmış ve yanıt alamamış olma" şartı <b>golimumab ve sertolizumab</b> için de getirildi. İlk basamak anti-TNF olarak fiilen <b>adalimumab veya etanersept</b> kullanılır. <b>İstisna:</b> RA/AS/PsA'da gebelik raporda belirtilirse sertolizumab için bu şart aranmaz. Yürürlük: 05.06.2026.</div>
 `
},
{
 id:"ra", title:"Romatoid artrit", sub:"Anti-TNF, rituksimab, abatasept, tosilizumab, JAK inhibitörleri",
 html:`
 <details class="sut-drug" open><summary>Anti-TNF (adalimumab, etanersept; 2. basamak: infliksimab, golimumab, sertolizumab)<span class="tag">4.2.1.C-1</span></summary><div class="sut-body">
 <table>
 <tr><th>Başlangıç</th><td>Biri metotreksat olmak üzere <b>≥3 farklı csDMARD</b>, her biri <b>≥3 ay</b> kullanılmış olmasına rağmen <b>DAS28 &gt; 5,1</b>. 3 ay süreli sağlık kurulu raporu.</td></tr>
 <tr><th>3. ay</th><td>DAS28'de <b>&gt;0,6</b> düşme (sertolizumab için &gt;1,2) → 3 ay (sertolizumab 6 ay) daha devam; yeni rapor.</td></tr>
 <tr><th>6. ay ve sonrası</th><td>Başlangıca göre toplam <b>&gt;1,2</b> düşme → 6 aylık raporlarla devam. 6 ayda bir DAS28; başlangıç ve güncel skor her raporda yazılır. Toplam düşme ≤1,2 ise tedavi sonlandırılır.</td></tr>
 <tr><th>İnfliksimab / golimumab / sertolizumab</th><td><span class="pill new">05.06.2026</span> Yukarıdaki koşullarda <b>en az bir başka anti-TNF</b> kullanılmış ve yanıt alınamamış olmalı. İnfliksimab için istisna: dirençli GİS tutulumu veya <b>BKİ ≥ 35</b> raporda belirtilirse ön koşul aranmaz. Sertolizumab için istisna: <b>gebelik</b> raporda belirtilirse ön koşul aranmaz.</td></tr>
 </table>
 </div></details>

 <details class="sut-drug"><summary>Rituksimab<span class="tag">4.2.1.C-2</span></summary><div class="sut-body">
 <table>
 <tr><th>Başlangıç</th><td>Metotreksat ile kombine; ≥1 anti-TNF'e rağmen <b>DAS28 &gt; 5,1</b>, ya da anti-TNF uygun değil / intolerans. Romatoloji, klinik immünoloji veya FTR uzmanı reçete eder.</td></tr>
 <tr><th>Rapor</th><td><b>6 aylık</b> sağlık kurulu raporları. İlk raporun sonunda DAS28'de toplam <b>&gt;1,2</b> düşme → devam. Sonrasında 6 ayda bir DAS28.</td></tr>
 <tr><th>Rapor heyeti</th><td>Romatoloji uzmanı olan kurumda en az bir romatolog; üniversite/EAH'de romatoloji, klinik immünoloji veya FTR uzmanı.</td></tr>
 <tr><th>Ara verme</th><td>12 ay ve üzeri ara → başlangıç kriterleri yeniden aranır.</td></tr>
 </table>
 </div></details>

 <details class="sut-drug"><summary>Abatasept<span class="tag">4.2.1.C-3</span></summary><div class="sut-body">
 <table>
 <tr><th>Başlangıç</th><td>Biri MTX olmak üzere ≥3 csDMARD (≥3'er ay) <b>veya</b> ≥1 anti-TNF'e rağmen <b>DAS28 &gt; 5,1</b>. MTX ile birlikte. 3 aylık rapor.</td></tr>
 <tr><th>Yanıt</th><td>Anti-TNF ile aynı şema: 3. ayda &gt;0,6; 6. ayda toplam &gt;1,2; sonra 6 ayda bir DAS28.</td></tr>
 </table>
 </div></details>

 <details class="sut-drug"><summary>Tosilizumab<span class="tag">4.2.1.C-5</span></summary><div class="sut-body">
 <table>
 <tr><th>Başlangıç</th><td>Biri MTX olmak üzere ≥3 csDMARD (≥3'er ay) <b>veya</b> ≥1 anti-TNF'e rağmen <b>DAS28 &gt; 5,1</b>. MTX ile birlikte. 3 aylık rapor.</td></tr>
 <tr><th>Yanıt</th><td>3. ayda &gt;0,6; 6. ayda toplam &gt;1,2; sonra 6 ayda bir DAS28.</td></tr>
 </table>
 </div></details>

 <details class="sut-drug"><summary>Tofasitinib, upadasitinib, barisitinib<span class="tag">4.2.1.C-6</span></summary><div class="sut-body">
 <table>
 <tr><th>Başlangıç</th><td><b>≥1 anti-TNF</b> ajanı <b>≥3 ay</b> kullanmış olmasına rağmen <b>DAS28 &gt; 5,1</b>, veya ≥1 anti-TNF'e intolerans. 3 aylık rapor.</td></tr>
 <tr><th>Yanıt</th><td>3. ayda &gt;0,6; 6. ayda toplam &gt;1,2; sonra 6 ayda bir DAS28. Toplam düşme ≤1,2 ise sonlandırılır.</td></tr>
 <tr><th>Rapor</th><td>En fazla 6 ay süreli; romatoloji veya üniversite/EAH'de klinik immünoloji / FTR uzmanı. İç hastalıkları uzmanı reçete edebilir.</td></tr>
 </table>
 </div></details>
 <div class="note">Tüm RA ajanları için başlangıç eşiği DAS28 &gt; 5,1; yanıt eşikleri Δ &gt; 0,6 (3. ay) ve toplam Δ &gt; 1,2 (6. ay). <a href="#/calc/das28">DAS28 hesaplayıcıda</a> eşikler işaretlidir. Hazır metinler: <a href="#/tpl/ra">RA rapor şablonları</a>.</div>
 `
},
{
 id:"axspa", title:"Ankilozan spondilit / aksiyel SpA", sub:"Anti-TNF, sekukinumab, tofasitinib, upadasitinib, nr-axSpA",
 html:`
 <details class="sut-drug" open><summary>Anti-TNF — aksiyel tutulum (AS ve nr-axSpA)<span class="tag">4.2.1.C-1 (2)</span></summary><div class="sut-body">
 <table>
 <tr><th>Başlangıç</th><td>Biri maksimum doz <b>indometazin</b> olmak üzere <b>≥3 NSAİİ</b> maksimum dozda kullanılmasına rağmen <b>BASDAİ &gt; 5</b>, ve şunlardan en az biri: <b>ESH &gt; 28 mm/s</b>, ÜSN üstünde CRP, MR/sintigrafi ile aktif sakroileit/spondilit. 3 aylık rapor.</td></tr>
 <tr><th>3. ay</th><td>BASDAİ'de <b>≥2 birim</b> düzelme yoksa devamı ödenmez. Yanıt varsa 6 aylık raporla devam.</td></tr>
 <tr><th>İnfliksimab / golimumab / sertolizumab</th><td><span class="pill new">05.06.2026</span> Önce en az bir başka anti-TNF kullanılmış ve yanıt alınamamış olmalı. İnfliksimab istisnası: dirençli GİS tutulumu veya BKİ ≥ 35. Sertolizumab istisnası: gebelik.</td></tr>
 </table>
 </div></details>

 <details class="sut-drug"><summary>Anti-TNF — periferik tutulumlu AS<span class="tag">4.2.1.C-1 (3)</span></summary><div class="sut-body">
 <table>
 <tr><th>Başlangıç</th><td>Maksimum doz NSAİİ ile birlikte <b>sulfasalazin veya metotreksat</b> kullanılmasına rağmen <b>BASDAİ &gt; 5</b>, ve ESH &gt; 28 mm/s veya ÜSN üstünde CRP. 3 aylık rapor.</td></tr>
 <tr><th>3. ay</th><td>BASDAİ'de ≥2 birim düzelme → 6 aylık raporla devam.</td></tr>
 </table>
 </div></details>

 <details class="sut-drug"><summary>Sekukinumab<span class="tag">4.2.1.C-9</span></summary><div class="sut-body">
 <table>
 <tr><th>Başlangıç</th><td>Biri maksimum doz indometazin olmak üzere ≥3 NSAİİ'ye rağmen <b>BASDAİ &gt; 5</b> ve şunlardan en az biri: ESH &gt; 28, ÜSN üstü CRP, MR/sintigrafide aktif sakroileit/spondilit. Anti-TNF ön koşulu <b>yok</b>.</td></tr>
 <tr><th>16. hafta</th><td>BASDAİ'de <b>≥2 birim</b> düzelme → devam; yoksa sonlandırılır.</td></tr>
 <tr><th>Rapor</th><td>6'şar aylık. 6 ay ve üzeri ara → başlangıç kriterleri yeniden.</td></tr>
 </table>
 </div></details>

 <details class="sut-drug"><summary>Tofasitinib, upadasitinib (AS)<span class="tag">4.2.1.C-6 (4)</span></summary><div class="sut-body">
 <table>
 <tr><th>Başlangıç</th><td>Aksiyel veya periferik tutulumlu AS'de <b>≥1 anti-TNF</b>'e yetersiz yanıt veya intolerans. 3 aylık rapor.</td></tr>
 <tr><th>12. hafta</th><td>BASDAİ'de ≥2 birim düzelme → 6 aylık raporla devam.</td></tr>
 </table>
 </div></details>

 <details class="sut-drug"><summary>Upadasitinib (nr-axSpA)<span class="tag">4.2.1.C-6 (5)</span></summary><div class="sut-body">
 <table>
 <tr><th>Başlangıç</th><td>≥1 anti-TNF'e yetersiz yanıt veya intolerans. 3 aylık rapor.</td></tr>
 <tr><th>12. hafta</th><td>BASDAİ'de ≥2 birim düzelme → 6 aylık raporla devam.</td></tr>
 </table>
 </div></details>
 <div class="note">Tüm axSpA ajanları için başlangıç eşiği BASDAİ &gt; 5 ve yanıt eşiği Δ ≥ 2. <a href="#/calc/basdai">BASDAİ hesaplayıcıda</a> işaretlidir. Hazır metinler: <a href="#/tpl/axspa">AS/axSpA rapor şablonları</a>.</div>
 `
},
{
 id:"psa", title:"Psöriatik artrit", sub:"Anti-TNF, sekukinumab, iksekizumab, ustekinumab, JAK, apremilast",
 html:`
 <div class="note">PsA'da SUT aktivite tanımı: <b>bir ay arayla iki ayrı muayenede ≥3 hassas ve ≥3 şiş eklem</b>. Yanıt değerlendirmesi <b>PsARC</b> ile. <a href="#/calc/psarc">PsARC hesaplayıcı</a> · <a href="#/tpl/psa">PsA rapor şablonları</a>.</div>
 <details class="sut-drug" open><summary>Anti-TNF<span class="tag">4.2.1.C-1 (5)</span></summary><div class="sut-body">
 <table>
 <tr><th>Başlangıç</th><td><b>≥3 farklı csDMARD</b>, uygun dozda, her biri <b>≥3 ay</b> kullanılmasına rağmen aktif hastalık (≥3 hassas + ≥3 şiş eklem, 1 ay arayla 2 muayene).</td></tr>
 <tr><th>3. ay</th><td>PsARC yanıtı yoksa devamı ödenmez. Yanıt varsa 6 aylık raporla devam.</td></tr>
 <tr><th>İnfliksimab / golimumab / sertolizumab</th><td><span class="pill new">05.06.2026</span> Önce en az bir başka anti-TNF kullanılmış ve yanıt alınamamış olmalı (istisnalar: infliksimab için dirençli GİS tutulumu / BKİ ≥ 35; sertolizumab için gebelik).</td></tr>
 </table>
 </div></details>

 <details class="sut-drug"><summary>Sekukinumab, iksekizumab<span class="tag">4.2.1.C-9 (3), C-10 (2)</span></summary><div class="sut-body">
 <table>
 <tr><th>Başlangıç</th><td>≥3 csDMARD (3'er ay) <b>ve sonrasında ≥1 anti-TNF ≥3 ay</b> kullanılmasına rağmen aktif hastalık.</td></tr>
 <tr><th>16. hafta</th><td>PsARC yanıtı → devam; yoksa sonlandırılır.</td></tr>
 <tr><th>Rapor</th><td>6'şar aylık; romatoloji veya FTR uzmanı.</td></tr>
 </table>
 </div></details>

 <details class="sut-drug"><summary>Ustekinumab<span class="tag">4.2.1.C-4 (2)</span></summary><div class="sut-body">
 <table>
 <tr><th>Başlangıç</th><td>≥3 csDMARD (3'er ay) ve sonrasında ≥1 anti-TNF 3 ay kullanılmasına rağmen aktif hastalık. En fazla 3 aylık başlangıç raporu.</td></tr>
 <tr><th>3. ay</th><td>PsARC yanıtı → 6 aylık raporla devam.</td></tr>
 </table>
 </div></details>

 <details class="sut-drug"><summary>Tofasitinib, upadasitinib<span class="tag">4.2.1.C-6 (3)</span></summary><div class="sut-body">
 <table>
 <tr><th>Başlangıç</th><td>≥3 csDMARD (3'er ay) ve sonrasında ≥1 anti-TNF ≥3 ay kullanılmasına rağmen aktif hastalık, veya anti-TNF intoleransı.</td></tr>
 <tr><th>12. hafta</th><td>PsARC yanıtı → devam; yoksa sonlandırılır. 6'şar aylık raporlar, romatoloji uzmanı.</td></tr>
 </table>
 </div></details>

 <details class="sut-drug"><summary>Apremilast<span class="tag">4.2.1.C-13</span></summary><div class="sut-body">
 <table>
 <tr><th>Başlangıç</th><td>≥3 csDMARD (uygun doz, 3'er ay) kullanılmasına rağmen aktif hastalık. Anti-TNF ön koşulu <b>yok</b>.</td></tr>
 <tr><th>16. hafta</th><td>PsARC yanıtı → 6 aylık raporla devam.</td></tr>
 <tr><th>Rapor</th><td>En fazla 6 ay; romatoloji veya üniversite/EAH'de klinik immünoloji / FTR. 6 ay+ ara → başlangıç kriterleri.</td></tr>
 </table>
 </div></details>
 `
},
{
 id:"fmf", title:"Ailevi Akdeniz ateşi", sub:"Anakinra ve kanakinumab — kolşisin direnci / amiloidoz (≥2 yaş, >7,5 kg)",
 html:`
 <details class="sut-drug" open><summary>Amiloidozu olmayan FMF<span class="tag">4.2.1.C-7 (2a)</span></summary><div class="sut-body">
 <table>
 <tr><th>Kolşisin</th><td>Tolere edilen maksimum dozda; önce yurt içi, yanıt yoksa yurt dışı preparat; toplam <b>≥6 ay</b>.</td></tr>
 <tr><th>Anakinra başlangıç</th><td>Kolşisine rağmen son 3 ayda akut faz yüksekliği ile kanıtlanmış <b>≥3 atak</b>: atak dönemlerine ait, <b>en az 15 gün arayla</b> ölçülmüş, <b>ÜSN'nin ≥2 katı CRP</b> değerleri tarih ve sonuçlarıyla raporda yazılmalı. Kolşisine ciddi intoleransta doğrudan anakinra ile başlanabilir. Yanıt alınırsa idamede anakinra ile devam. 6 ay+ ara/kesilme sonrası: son 6 ayda ≥3 atak belgelenirse başlangıç kriteri aranmadan devam.</td></tr>
 <tr><th>Kanakinumaba geçiş</th><td>Aralıksız <b>3 ay</b> düzenli anakinraya rağmen son 3 ayda ≥3 atak (<b>18 yaş altında 2 atak</b>; aynı CRP belgeleme kuralı) veya anakinrayı engelleyen ciddi yan etki (ilgili branş hekimince belgelenmiş; notun tarihi ve branşı raporda).</td></tr>
 <tr><th>Kanakinumab devam</th><td>Düzenli 3 ay sonrası atak sıklık/şiddetinin azaldığı raporda belirtilirse devam. 6 ay+ ara: bu sürede ≥3 atak belgelenirse başlangıç kriteri aranmadan devam.</td></tr>
 <tr><th>Doz aralığı açma</th><td>Tedavi altında <b>6 ay ataksız + akut faz normal</b> → takip eden 6 ayda aralık 2 ayda bire; atak yoksa sonraki 6 ayda 3 ayda bire; 6 ay boyunca normal CRP ile atak yoksa kanakinumab <b>sonlandırılır</b>.</td></tr>
 <tr><th>Rapor</th><td>Resmî 3. basamakta, en az bir romatoloji uzmanı içeren sağlık kurulu raporu; romatoloji uzmanı reçete eder. Anakinra raporu 3 ay, kanakinumab 3 ay. Sağlık Bakanlığı endikasyon dışı onayı da gerekir.</td></tr>
 </table>
 </div></details>
 <details class="sut-drug"><summary>Amiloidozu olan FMF<span class="tag">4.2.1.C-7 (2b)</span></summary><div class="sut-body">
 <table>
 <tr><th>Koşul</th><td>Herhangi bir dokuda biyopsi ile AA tipi amiloid kanıtı → <b>anakinra</b> ile başlanır (3 ay).</td></tr>
 <tr><th>Kanakinumaba geçiş</th><td>3 ay anakinraya yeterli yanıt yoksa (gerekçe romatoloji/nefroloji uzmanınca raporda) veya ciddi yan etki (belgelenmiş) → kanakinumab.</td></tr>
 <tr><th>Rapor</th><td>En fazla <b>1 yıl</b>; en az bir romatoloji ve/veya nefroloji uzmanı; 3. basamakta bu uzmanlarca reçete. Yanıt alınanlarda doz aralığı açılarak 1 yıllık raporla devam.</td></tr>
 </table>
 </div></details>
 <div class="note sut">Hazır rapor metinleri için <a href="#/tpl/otoinflam">FMF ve otoinflamatuvar şablonlar</a>.</div>
 `
},
{
 id:"vaskulit", title:"Vaskülitler", sub:"GPA/MPA'da rituksimab; dev hücreli arteritte tosilizumab ve upadasitinib",
 html:`
 <details class="sut-drug" open><summary>Rituksimab — GPA ve MPA<span class="tag">4.2.1.C-2 (2)</span></summary><div class="sut-body">
 <table>
 <tr><th>Koşul</th><td>Siklofosfamide dirençli veya siklofosfamid verilemeyen <b>ciddi, aktif</b> GPA/MPA; glukokortikoid ile kombine.</td></tr>
 <tr><th>Rapor</th><td>Romatoloji, klinik immünoloji veya nefroloji uzmanının bulunduğu <b>1 ay</b> süreli rapor. 6 aydan önce tekrarlanamaz; her 6 ay sonrası kullanım için gerekliliğin belirtildiği yeni rapor.</td></tr>
 </table>
 </div></details>
 <details class="sut-drug"><summary>Tosilizumab — dev hücreli arterit<span class="tag">4.2.1.C-5 (4)</span></summary><div class="sut-body">
 <table>
 <tr><th>Koşul</th><td>Uzun süreli / yüksek doz glukokortikoidin kontrendike olduğu erişkin DHA. <span class="pill new">Aralık 2025</span> ile yüksek doz steroid kullanımı/kontrendikasyonu bağlamında düzenlendi.</td></tr>
 <tr><th>Form ve rapor</th><td>SC form; 3 aylık başlangıç raporu, yanıt varsa 6 aylık raporlarla devam. Romatoloji veya immünoloji-alerji uzmanı.</td></tr>
 </table>
 </div></details>
 <details class="sut-drug"><summary>Upadasitinib — dev hücreli arterit<span class="tag">4.2.1.C-6 (11)</span></summary><div class="sut-body">
 <p><span class="pill new">Aralık 2025</span> DHA endikasyonu SUT'a eklendi; yüksek doz steroid kullanımı/kontrendikasyonu bağlamında düzenlendi. Ayrıntılı koşulları yürürlükteki metinden doğrulayın.</p>
 </div></details>
 `
},
{
 id:"jia", title:"Juvenil idiyopatik artrit", sub:"Poliartiküler ve sistemik JİA — kısa özet",
 html:`
 <details class="sut-drug" open><summary>Poliartiküler JİA<span class="tag">4.2.1.C-1 (1b), C-3 (2), C-5 (2)</span></summary><div class="sut-body">
 <table>
 <tr><th>Anti-TNF</th><td>NSAİİ + ≥1 csDMARD ≥3 ay; <b>ACR Pedi 30</b> yanıtı yok → 3 aylık rapor. Üveit varsa ilk seçenek <b>adalimumab</b>. 3. ayda ACR Pedi 30 → devam; 6. ayda <b>ACR Pedi 50</b> → 6 aylık raporlar.</td></tr>
 <tr><th>Abatasept</th><td>3 aylık anti-TNF'e rağmen ACR Pedi 30 yok; MTX ile kombine; çocuk romatoloji uzmanı, üniversite/EAH.</td></tr>
 <tr><th>Tosilizumab</th><td>≥2 yaş; NSAİİ ve/veya MTX veya anti-TNF ile 3 ay sonunda ACR Pedi 30 yok.</td></tr>
 <tr><th>18 yaş sonrası</th><td>DAS28 esas alınır; ancak &lt;18 yaşta ACR Pedi yanıtı alınmış hastada DAS28 şartı aranmadan devam edilebilir. Alevlenmede erişkin koşulları geçerli.</td></tr>
 </table>
 </div></details>
 <details class="sut-drug"><summary>Sistemik JİA<span class="tag">4.2.1.C-5 (3), C-7 (1)</span></summary><div class="sut-body">
 <table>
 <tr><th>Tosilizumab / anakinra</th><td>NSAİİ + sistemik steroid ile 3 ay sonunda remisyon yok (sistemik tip) veya ACR Pedi 50 yok (artrit tipi). 3 ayda bir <b>ACR Pedi 50</b> aranır.</td></tr>
 <tr><th>Kanakinumab</th><td>Tosilizumab/anakinra ile 3 aya rağmen ACR Pedi 50 yok. Takipte <b>ACR Pedi 70</b> aranır. Hasta bazında Sağlık Bakanlığı onayı.</td></tr>
 </table>
 </div></details>
 `
}
];

/* ---------- Sınıflama kriterleri ----------
   mode: "sum" = işaretlenenler toplanır; "max" = alan içinde en yüksek puan alınır (radyo); "custom" = özel mantık */
const CRITERIA = [
{
 id:"ra2010", group:"İnflamatuvar artritler", title:"Romatoid artrit", source:"2010 ACR/EULAR", threshold:6,
 entry:"En az bir eklemde başka hastalıkla açıklanamayan kesin klinik sinovit.",
 domains:[
  {name:"Eklem tutulumu", mode:"max", items:[
   {label:"1 büyük eklem", pts:0},{label:"2–10 büyük eklem", pts:1},{label:"1–3 küçük eklem (büyük eklem tutulumu olsun/olmasın)", pts:2},
   {label:"4–10 küçük eklem", pts:3},{label:">10 eklem (en az 1 küçük eklem)", pts:5}]},
  {name:"Seroloji", mode:"max", items:[
   {label:"RF ve ACPA negatif", pts:0},{label:"Düşük pozitif RF veya ACPA (≤3× ÜSN)", pts:2},{label:"Yüksek pozitif RF veya ACPA (>3× ÜSN)", pts:3}]},
  {name:"Akut faz reaktanları", mode:"max", items:[{label:"CRP ve ESH normal", pts:0},{label:"CRP veya ESH anormal", pts:1}]},
  {name:"Semptom süresi", mode:"max", items:[{label:"< 6 hafta", pts:0},{label:"≥ 6 hafta", pts:1}]}
 ],
 note:"Erozif hastalığı olan veya geçmişte kriterleri karşılamış hastalar da RA olarak sınıflanır."
},
{
 id:"asas", group:"İnflamatuvar artritler", title:"Aksiyel spondiloartrit", source:"2009 ASAS", mode:"custom",
 entry:"≥3 aydır bel ağrısı ve başlangıç yaşı < 45.",
 custom:"asas"
},
{
 id:"caspar", group:"İnflamatuvar artritler", title:"Psöriatik artrit", source:"2006 CASPAR", threshold:3,
 entry:"İnflamatuvar eklem hastalığı (periferik eklem, omurga veya entez).",
 domains:[
  {name:"Psöriazis kanıtı", mode:"max", items:[{label:"Yok", pts:0},{label:"Kişisel psöriazis öyküsü veya ailede (1. veya 2. derece) psöriazis", pts:1},{label:"Mevcut psöriazis", pts:2}]},
  {name:"Diğer", mode:"sum", items:[
   {label:"Tipik psöriatik tırnak distrofisi (onikoliz, pitting, hiperkeratoz)", pts:1},
   {label:"RF negatif", pts:1},
   {label:"Daktilit — mevcut veya romatolog tarafından kaydedilmiş öykü", pts:1},
   {label:"Radyografide jukstaartiküler yeni kemik oluşumu (el/ayak; osteofit hariç)", pts:1}]}
 ]
},
{
 id:"gout2015", group:"İnflamatuvar artritler", title:"Gut", source:"2015 ACR/EULAR", threshold:8,
 entry:"Periferik eklem veya bursada en az bir şişlik, ağrı veya hassasiyet epizodu.",
 sufficient:"Semptomatik eklem/bursa/tofüste MSÜ kristalinin gösterilmesi → doğrudan gut.",
 domains:[
  {name:"Semptomatik epizodun eklem/bursa paterni", mode:"max", items:[{label:"Diğer eklemler", pts:0},{label:"Ayak bileği veya orta ayak (1. MTF olmadan, mono/oligoartiküler)", pts:1},{label:"1. MTF tutulumu", pts:2}]},
  {name:"Epizod özellikleri (eritem; dokunmaya tahammülsüzlük; yürüme/kullanma güçlüğü)", mode:"max", items:[{label:"Hiçbiri", pts:0},{label:"1 özellik", pts:1},{label:"2 özellik", pts:2},{label:"3 özellik", pts:3}]},
  {name:"Zamansal seyir (≥2: ağrı 24 saatte maks., ≤14 günde çözülme, epizodlar arası tam düzelme)", mode:"max", items:[{label:"Tipik epizod yok", pts:0},{label:"Bir tipik epizod", pts:1},{label:"Tekrarlayan tipik epizodlar", pts:2}]},
  {name:"Tofüs", mode:"max", items:[{label:"Yok", pts:0},{label:"Klinik tofüs kanıtı", pts:4}]},
  {name:"Serum ürat (ürat düşürücü tedavi almıyorken, atak dışı)", mode:"max", items:[{label:"< 4 mg/dL", pts:-4},{label:"4 – <6 mg/dL", pts:0},{label:"6 – <8 mg/dL", pts:2},{label:"8 – <10 mg/dL", pts:3},{label:"≥ 10 mg/dL", pts:4}]},
  {name:"Sinovyal sıvı (semptomatik eklem/bursa)", mode:"max", items:[{label:"Yapılmadı", pts:0},{label:"MSÜ negatif", pts:-2}]},
  {name:"Görüntüleme", mode:"sum", items:[{label:"Ürat birikimi: USG'de çift kontur veya DECT'te ürat", pts:4},{label:"Gut ilişkili hasar: el/ayak grafisinde ≥1 erozyon", pts:4}]}
 ]
},
{
 id:"pmr2012", group:"İnflamatuvar artritler", title:"Polimiyaljiya romatika", source:"2012 EULAR/ACR", mode:"custom", custom:"pmr",
 entry:"Yaş ≥ 50, bilateral omuz ağrısı, anormal CRP ve/veya ESH (üçü de zorunlu)."
},
{
 id:"still", group:"İnflamatuvar artritler", title:"Erişkin Still hastalığı", source:"1992 Yamaguchi", mode:"custom", custom:"still",
 entry:"Enfeksiyon, malignite ve diğer romatizmal hastalıklar dışlanmalı."
},
{
 id:"fmf", group:"Otoinflamatuvar", title:"Ailevi Akdeniz ateşi", source:"2019 Eurofever/PRINTO · 1997 Livneh", mode:"custom", custom:"fmf"
},
{
 id:"sle2019", group:"Bağ dokusu hastalıkları", title:"Sistemik lupus eritematozus", source:"2019 EULAR/ACR", threshold:10,
 entry:"HEp-2 hücrelerinde ANA ≥ 1:80 (veya eşdeğer pozitif test) — giriş kriteri karşılanmadan sınıflama yapılmaz.",
 requireClinical:true,
 domains:[
  {name:"Konstitüsyonel", mode:"max", items:[{label:"Ateş (>38,3 °C)", pts:2}]},
  {name:"Hematolojik", mode:"max", items:[{label:"Lökopeni (<4000/mm³)", pts:3},{label:"Trombositopeni (<100.000/mm³)", pts:4},{label:"Otoimmün hemoliz", pts:4}]},
  {name:"Nöropsikiyatrik", mode:"max", items:[{label:"Deliryum", pts:2},{label:"Psikoz", pts:3},{label:"Nöbet", pts:5}]},
  {name:"Mukokütanöz", mode:"max", items:[{label:"Skarsız alopesi", pts:2},{label:"Oral ülser", pts:2},{label:"Subakut kütanöz veya diskoid lupus", pts:4},{label:"Akut kütanöz lupus", pts:6}]},
  {name:"Serozal", mode:"max", items:[{label:"Plevral veya perikardiyal efüzyon", pts:5},{label:"Akut perikardit", pts:6}]},
  {name:"Kas-iskelet", mode:"max", items:[{label:"Eklem tutulumu (sinovit ≥2 eklem veya hassasiyet ≥2 eklem + ≥30 dk sabah tutukluğu)", pts:6}]},
  {name:"Renal", mode:"max", items:[{label:"Proteinüri > 0,5 g/24 saat", pts:4},{label:"Böbrek biyopsisi: sınıf II veya V lupus nefriti", pts:8},{label:"Böbrek biyopsisi: sınıf III veya IV lupus nefriti", pts:10}]},
  {name:"Antifosfolipid antikorları", mode:"max", immun:true, items:[{label:"aKL, anti-β2GPI veya lupus antikoagülanı pozitif", pts:2}]},
  {name:"Kompleman", mode:"max", immun:true, items:[{label:"Düşük C3 veya düşük C4", pts:3},{label:"Düşük C3 ve düşük C4", pts:4}]},
  {name:"SLE'ye özgü antikorlar", mode:"max", immun:true, items:[{label:"Anti-dsDNA veya anti-Sm pozitif", pts:6}]}
 ],
 note:"Her alandan yalnızca en yüksek puanlı madde sayılır. En az bir klinik alan zorunlu. SLE'den daha olası bir açıklaması olan bulgu puanlanmaz."
},
{
 id:"sjogren2016", group:"Bağ dokusu hastalıkları", title:"Primer Sjögren sendromu", source:"2016 ACR/EULAR", threshold:4,
 entry:"En az bir oküler veya oral kuruluk semptomu (veya ESSDAI'de ≥1 alanda pozitiflik).",
 exclusions:["Baş-boyun radyoterapisi öyküsü","Aktif hepatit C (PCR ile)","AIDS","Sarkoidoz","Amiloidoz","Graft-versus-host hastalığı","IgG4 ilişkili hastalık"],
 domains:[{name:"Maddeler", mode:"sum", items:[
  {label:"Labial tükürük bezi biyopsisinde fokal lenfositik sialadenit, fokus skoru ≥ 1 / 4 mm²", pts:3},
  {label:"Anti-SSA/Ro pozitif", pts:3},
  {label:"Oküler boyanma skoru ≥ 5 (veya van Bijsterveld ≥ 4) en az bir gözde", pts:1},
  {label:"Schirmer ≤ 5 mm / 5 dk en az bir gözde", pts:1},
  {label:"Uyarılmamış tam tükürük akış hızı ≤ 0,1 mL/dk", pts:1}]}]
},
{
 id:"ssc2013", group:"Bağ dokusu hastalıkları", title:"Sistemik skleroz", source:"2013 ACR/EULAR", threshold:9,
 sufficient:"Her iki elde parmaklarda MKF eklemlerin proksimaline uzanan deri kalınlaşması → 9 puan, tek başına yeterli.",
 domains:[
  {name:"Parmaklarda deri kalınlaşması (MKF proksimaline uzanan kalınlaşma yoksa)", mode:"max", items:[{label:"Yok", pts:0},{label:"Şiş (puffy) parmaklar", pts:2},{label:"Sklerodaktili (MKF distali, PİF proksimali)", pts:4},{label:"MKF proksimaline uzanan deri kalınlaşması (yeterli kriter)", pts:9}]},
  {name:"Parmak ucu lezyonları", mode:"max", items:[{label:"Yok", pts:0},{label:"Dijital ülser", pts:2},{label:"Parmak ucu çukur skarları (pitting scars)", pts:3}]},
  {name:"Diğer", mode:"sum", items:[
   {label:"Telenjiektazi", pts:2},
   {label:"Anormal tırnak yatağı kapillerleri", pts:2},
   {label:"Pulmoner arteriyel hipertansiyon ve/veya interstisyel akciğer hastalığı", pts:2},
   {label:"Raynaud fenomeni", pts:3},
   {label:"SSc ilişkili otoantikor (antisentromer, anti-topoizomeraz I, anti-RNA polimeraz III)", pts:3}]}
 ],
 note:"Parmak tutulumu olmayan skleroderma benzeri hastalıkları ve SSc'yi daha iyi açıklayan başka hastalığı olanlara uygulanmaz."
},
{
 id:"iim2017", group:"Bağ dokusu hastalıkları", title:"İdiyopatik inflamatuvar miyopatiler", source:"2017 EULAR/ACR", mode:"custom", custom:"iim",
 entry:"Miyoziti daha iyi açıklayan başka bir neden yok."
},
{
 id:"igg4rd", group:"Bağ dokusu hastalıkları", title:"IgG4 ilişkili hastalık", source:"2019 ACR/EULAR", threshold:20, mode:"custom", custom:"igg4",
 entry:"Tipik bir organda (pankreas, tükürük bezleri, safra yolları, orbita, böbrek, akciğer, aort, retroperiton, pakimeninks, tiroid) karakteristik klinik/radyolojik tutulum veya bu organlardan birinin biyopsisinde IgG4-İH ile uyumlu patoloji."
},
{
 id:"gca2022", group:"Vaskülitler", title:"Dev hücreli arterit", source:"2022 ACR/EULAR", threshold:6,
 entry:"Tanı anında yaş ≥ 50 (mutlak koşul). Orta/büyük damar vasküliti tanısı konmuş hastada uygulanır.",
 domains:[
  {name:"Klinik", mode:"sum", items:[
   {label:"Omuz/boyunda sabah tutukluğu", pts:2},{label:"Ani görme kaybı", pts:3},{label:"Çene veya dil kladikasyosu", pts:2},
   {label:"Yeni temporal baş ağrısı", pts:2},{label:"Skalp hassasiyeti", pts:2},{label:"Temporal arter muayenesinde anormallik", pts:2}]},
  {name:"Laboratuvar, görüntüleme, biyopsi", mode:"sum", items:[
   {label:"Maksimum ESH ≥ 50 mm/s veya CRP ≥ 10 mg/L", pts:3},
   {label:"Temporal arter biyopsisi pozitif veya USG'de halo bulgusu", pts:5},
   {label:"Bilateral aksiller tutulum (görüntüleme)", pts:2},
   {label:"FDG-PET'te tüm aortada aktivite", pts:2}]}
 ]
},
{
 id:"tak2022", group:"Vaskülitler", title:"Takayasu arteriti", source:"2022 ACR/EULAR", threshold:5,
 entry:"Tanı anında yaş ≤ 60 ve görüntülemede vaskülit kanıtı (ikisi de mutlak).",
 domains:[
  {name:"Klinik", mode:"sum", items:[
   {label:"Kadın cinsiyet", pts:1},{label:"Anjina veya iskemik kardiyak ağrı", pts:2},{label:"Kol veya bacak kladikasyosu", pts:2},
   {label:"Arteriyel üfürüm", pts:2},{label:"Üst ekstremitede azalmış nabız", pts:2},{label:"Karotis anormalliği (azalmış nabız veya hassasiyet)", pts:2},
   {label:"Kollar arası sistolik basınç farkı ≥ 20 mmHg", pts:1}]},
  {name:"Görüntüleme — etkilenen arteriyel bölge sayısı", mode:"max", items:[{label:"Bir bölge", pts:1},{label:"İki bölge", pts:2},{label:"Üç veya daha fazla bölge", pts:3}]},
  {name:"Görüntüleme — diğer", mode:"sum", items:[{label:"Eşlenik arterlerde simetrik tutulum", pts:1},{label:"Abdominal aort tutulumu + renal veya mezenterik tutulum", pts:3}]}
 ]
},
{
 id:"gpa2022", group:"Vaskülitler", title:"Granülomatöz polianjit", source:"2022 ACR/EULAR", threshold:5,
 entry:"Küçük/orta damar vasküliti tanısı konmuş, taklitçiler dışlanmış hastada uygulanır.",
 domains:[
  {name:"Klinik", mode:"sum", items:[
   {label:"Nazal tutulum: kanlı akıntı, ülser, kabuklanma, tıkanıklık, septum defekti/perforasyonu", pts:3},
   {label:"Kıkırdak tutulumu: kulak/burun kıkırdağı inflamasyonu, ses kısıklığı/stridor, endobronşiyal tutulum, semer burun", pts:2},
   {label:"İletim tipi veya sensörinöral işitme kaybı", pts:1}]},
  {name:"Laboratuvar, görüntüleme, biyopsi", mode:"sum", items:[
   {label:"c-ANCA veya anti-PR3 pozitif", pts:5},
   {label:"Akciğer görüntülemede nodül, kitle veya kavitasyon", pts:2},
   {label:"Biyopside granülom, ekstravasküler granülomatöz inflamasyon veya dev hücre", pts:2},
   {label:"Görüntülemede nazal/paranazal sinüs inflamasyonu, konsolidasyon, efüzyon veya mastoidit", pts:1},
   {label:"Pauci-immün glomerülonefrit", pts:1},
   {label:"p-ANCA veya anti-MPO pozitif", pts:-1},
   {label:"Eozinofil ≥ 1×10⁹/L", pts:-4}]}
 ]
},
{
 id:"mpa2022", group:"Vaskülitler", title:"Mikroskobik polianjit", source:"2022 ACR/EULAR", threshold:5,
 entry:"Küçük/orta damar vasküliti tanısı konmuş, taklitçiler dışlanmış hastada uygulanır.",
 domains:[
  {name:"Klinik", mode:"sum", items:[{label:"Nazal tutulum (kanlı akıntı, ülser, kabuklanma, tıkanıklık, septum defekti)", pts:-3}]},
  {name:"Laboratuvar, görüntüleme, biyopsi", mode:"sum", items:[
   {label:"p-ANCA veya anti-MPO pozitif", pts:6},
   {label:"Akciğer görüntülemede fibrozis veya interstisyel akciğer hastalığı", pts:3},
   {label:"Pauci-immün glomerülonefrit", pts:3},
   {label:"c-ANCA veya anti-PR3 pozitif", pts:-1},
   {label:"Eozinofil ≥ 1×10⁹/L", pts:-4}]}
 ]
},
{
 id:"egpa2022", group:"Vaskülitler", title:"Eozinofilik granülomatöz polianjit", source:"2022 ACR/EULAR", threshold:6,
 entry:"Küçük/orta damar vasküliti tanısı konmuş, taklitçiler dışlanmış hastada uygulanır.",
 domains:[
  {name:"Klinik", mode:"sum", items:[{label:"Obstrüktif hava yolu hastalığı", pts:3},{label:"Nazal polip", pts:3},{label:"Mononöritis multipleks", pts:1}]},
  {name:"Laboratuvar ve biyopsi", mode:"sum", items:[
   {label:"Eozinofil ≥ 1×10⁹/L", pts:5},
   {label:"Biyopside ekstravasküler eozinofil hakim inflamasyon", pts:2},
   {label:"c-ANCA veya anti-PR3 pozitif", pts:-3},
   {label:"Hematüri", pts:-1}]}
 ]
},
{
 id:"behcet", group:"Vaskülitler", title:"Behçet hastalığı", source:"2014 ICBD · 1990 ISG", threshold:4,
 domains:[{name:"ICBD maddeleri", mode:"sum", items:[
  {label:"Oral aftöz lezyonlar", pts:2},{label:"Genital aftöz lezyonlar", pts:2},{label:"Oküler lezyonlar (anterior/posterior üveit, retinal vaskülit)", pts:2},
  {label:"Deri lezyonları (psödofollikülit, eritema nodozum)", pts:1},{label:"Nörolojik tutulum", pts:1},{label:"Vasküler tutulum (arteriyel/venöz tromboz, anevrizma)", pts:1},
  {label:"Paterji testi pozitif (isteğe bağlı)", pts:1}]}],
 note:"ISG 1990: Yılda ≥3 tekrarlayan oral ülser + şunlardan 2'si: tekrarlayan genital ülser, göz lezyonu, deri lezyonu, pozitif paterji."
}
];
