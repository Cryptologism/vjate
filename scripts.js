
AOS.init();

const words = ['Vjate Spray', 'Kesan Dalam 30 Minit', 'Gabungan Ginseng & Madu', 'Tenaga Lelaki Power'];
let currentWord = 0;
let currentChar = 0;
let isDeleting = false;
const el = document.getElementById('typewriter');

function type() {
  const fullWord = words[currentWord];
  el.textContent = fullWord.substring(0, currentChar);
  if (!isDeleting && currentChar < fullWord.length) {
    currentChar++;
    setTimeout(type, 100);
  } else if (isDeleting && currentChar > 0) {
    currentChar--;
    setTimeout(type, 50);
  } else {
    isDeleting = !isDeleting;
    if (!isDeleting) currentWord = (currentWord + 1) % words.length;
    setTimeout(type, 1000);
  }
}
type();

document.getElementById("codForm")?.addEventListener("submit", function(e) {
  e.preventDefault();
  const name = document.getElementById("codName").value.trim();
  const phone = document.getElementById("codPhone").value.trim();
  const addr = document.getElementById("codAddress").value.trim();

  if (!/^[0-9]{10,12}$/.test(phone)) {
    alert("Sila masukkan nombor telefon yang sah.");
    return;
  }

  const msg = `Hi, saya ingin tempah Vjate Spray secara COD.%0ANama: ${name}%0ANombor: ${phone}%0AAlamat: ${addr}`;
  window.open(`https://wa.me/60107190223?text=${msg}`, '_blank');
  alert("Terima kasih! Anda akan diarahkan ke WhatsApp sekarang.");
});
