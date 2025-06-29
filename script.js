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

// kirim email
  // Inisialisasi SDK v4
  emailjs.init({
    publicKey: "2twEVVnK_O1T9FCAh", // Ganti dari dashboard EmailJS kamu
  });

  // Event form submit
  document.querySelector(".email").addEventListener("submit", function (e) {
    e.preventDefault();

    const templateParams = {
      name: document.getElementById("name").value,
      title: document.getElementById("title").value,
      email: document.getElementById("email").value,
      message: document.getElementById("massage").value,
    };

    emailjs
      .send("service_wzbmd7l", "template_df4nz9e", templateParams)
      .then(() => {
        alert("✅ Pesan berhasil dikirim!");
        document.querySelector(".email").reset();
      })
      .catch((error) => {
        alert("❌ Gagal mengirim pesan.");
        console.error("EmailJS Error:", error);
      });
  });

