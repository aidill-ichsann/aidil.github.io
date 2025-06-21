// Inisialisasi AOS
AOS.init({
  duration: 1000,      // durasi animasi dalam milidetik
  once: true           // animasi cuma jalan sekali
});


// tombol menu
const menu = document.querySelector(".menu");

menu.addEventListener("click", () => {
  console.log("terklik");
  const nav = document.querySelector(".nav_bar");
  const download = document.querySelector(".download_cv");
  const menu = document.querySelector(".menu");
  nav.classList.toggle("active");
  download.classList.toggle("active");
  menu.classList.toggle("active");
});
