const tombol = document.getElementById("tombol");
let aktif = false;
tombol.addEventListener("click", () =>{
    aktif = !aktif;
    if (aktif) {
        document.body.style.backgroundColor = "#16a34a";
        tombol.innerText = "Kembali";
    } else {
        document.body.style.backgroundColor = "#0f172a";
        tombol.innerText = "Klik Saya";
    }
});
// ✅ FUNGSI BARU: Input Nama
const inputNama = document.getElementById("inputNama");
const tombolNama = document.getElementById("tombolNama");
const hasilNama = document.getElementById("hasilNama");
tombolNama.addEventListener("click", () =>{
    const nama = inputNama.value.trim();
    if (nama) {
        hasilNama.innerText = `Halo, ${nama}! Semangat belajar Frontend! 🎉`;
    } else {
        hasilNama.innerText = "Silakan isi nama terlebih dahulu!";
    }
});