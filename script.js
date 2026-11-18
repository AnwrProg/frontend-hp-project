// Ubah Latar Belakang
const tombol = document.getElementById("tombol");
let aktif = false;

tombol.addEventListener("click", () => {
  aktif = !aktif;
  if (aktif) {
    document.body.style.backgroundColor = "#16a34a";
    tombol.innerText = "Kembali";
  } else {
    document.body.style.backgroundColor = "#0b142b";
    tombol.innerText = "Klik Saya";
  }
});

// Tampilkan Nama + Validasi
const inputNama = document.getElementById("inputNama");
const hasilNama = document.getElementById("hasilNama");
const tombolNama = document.getElementById("tombolNama");

tombolNama.addEventListener("click", () => {
  const nama = inputNama.value.trim();
  if (nama) {
    hasilNama.innerText = `Halo, ${nama}! Semangat belajar Frontend! 🎉`;
  } else {
    hasilNama.innerText = "Silakan isi nama terlebih dahulu!";
  }
});

// Reset Nama
const resetBtn = document.getElementById("resetBtn");
resetBtn.addEventListener("click", function () {
  hasilNama.innerText = "";
  inputNama.value = "";
});