/*
CHALLENGE 1:
Tüm <img> etiketlerine mouseenter ve mouseleave eventleri ekleyin.
- Mouse üzerine geldiğinde (mouseenter): ilgili resme "grayscale" class'ı ekleyin.
- Mouse çıktığında (mouseleave): "grayscale" class'ını kaldırın.
*/

document.querySelectorAll("img").forEach((el) => {
  el.addEventListener("mouseenter", () => {
    el.classList.add("grayscale");
  });
  el.addEventListener("mouseleave", () => {
    el.classList.remove("grayscale");
  });
});

/*
CHALLENGE 2:
Sayfa aktifken (herhangi bir yere tıklandığında), klavye dinlemeye başlasın.
- Klavyeden "1" tuşuna basılırsa <body> elementine "theme1" class'ı eklensin
- "2" → "theme2", "3" → "theme3" olarak eklensin
- "Escape" (Esc) tuşuna basılırsa body'deki tüm bu class'lar kaldırılsın
NOT: Klavye eventlerini document yerine **window** nesnesine ekleyin.
*/
let isKeyboardListened = false;

if (!isKeyboardListened) {
  isKeyboardListened = true;
  window.addEventListener("keydown", (e2) => {
    const bodyClasses = document.body;
    if (e2.key >= "1" && e2.key <= "3") {
      bodyClasses.classList.add("theme" + e2.key);
    }
    if (e2.key === "Escape") {
      bodyClasses.setAttribute("class", "");
    }
  });
}

/*
CHALLENGE 3:
<input id="full_name"> alanına yazı yazıldıkça:
- Girilen metni otomatik olarak BÜYÜK HARFE çevirin
- Metin 5 karakterden UZUNSA <button> elementini "enabled" yapın
- Aksi halde (5 veya daha az karakter) buton "disabled" olmalı
*/

/*
CHALLENGE 4:
Form submit edildiğinde (Kaydet butonuna basıldığında):
- Input alanındaki metni alıp, <p id="submitResult"> içerisine şu metni yazın:
  "{inputa_yazılan_metin} başarı ile kaydedildi."
- Input alanını temizleyin
- <button> tekrar disabled hale gelsin
*/
