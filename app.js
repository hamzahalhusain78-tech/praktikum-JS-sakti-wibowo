/**
 * ============================================================
 * TUGAS MANDIRI — PEMROGRAMAN INTERNET (JAVASCRIPT DASAR)
 * Program Studi : Pendidikan Sistem dan Teknologi Informasi
 * Universitas   : Universitas Pendidikan Indonesia
 * Study Case    : Sistem Poin & Keanggotaan Member Kedai Kopi
 * Berkas        : app.js (STARTER CODE MAHASISWA)
 * ============================================================
 *
 * PETUNJUK PENGERJAAN:
 * 1. Buka file index.html di browser (klik dua kali atau via Live Server).
 * 2. Buka tab Developer Tools dengan menekan tombol F12 -> pilih tab "Console".
 * 3. Kerjakan tugas ini secara bertahap dari AKTIVITAS 1 sampai AKTIVITAS 6
 *    dengan melengkapi bagian bertanda "// TODO:".
 * 4. Simpan progres pekerjaanmu dengan melakukan minimal 3 kali Git Commit
 *    sesuai panduan di PANDUAN_TUGAS_MANDIRI.md.
 * ============================================================
 */

// ============================================================
// AKTIVITAS 1: Setup Berkas & Integrasi JavaScript Eksternal
// ============================================================
// Menampilkan judul sistem ke tab Console (F12)
console.log("=== SISTEM POIN MEMBER KEDAI KOPI ===");

// TODO 1: Tulis satu baris console.log() untuk memastikan file app.js sudah terhubung!
// Contoh output: "Skrip app.js berhasil terhubung!"

console.log("Script app.js telah terhubung ");

// ============================================================
// AKTIVITAS 2: Variabel & Dialog Interaktif
// ============================================================

// ---- BAGIAN 2A: VARIABEL IDENTITAS KEDAI KOPI ----
// TODO 2A:
// 1. Buat konstanta "NAMA_KEDAI" bertipe string (misal: "Kopi PSTI Kampus").
// 2. Buat variabel "namaKasir" (misal: "Kak Eko") dan "shiftKerja" menggunakan "let".
// 3. Cetak nilai NAMA_KEDAI, namaKasir, dan shiftKerja ke Console menggunakan console.log().

const nama_kedai = "Kopi PSTI Kampus";
let nama_kasir = "Bowo";
let shiftKerja = "Sore";

console.log("Nama Kedai: " + nama_kedai);
console.log("Nama Kasir: " + nama_kasir);
console.log("Shiftkerja: " + shiftKerja);

// ---- DEMO PERBEDAAN LET vs CONST ----
// TODO 2B:
// Ubah (re-assign) nilai variabel "namaKasir" dengan nama kasir lain,
// lalu cetak ke Console untuk membuktikan bahwa variabel "let" nilainya dapat diubah.

nama_kasir = "dafa";
console.log("Kasir Baru telah ditambahkan : " + nama_kasir);

// ---- BAGIAN 2B: INPUT INTERAKTIF & PENGANDAIAN DASAR ----
// TODO 2C:
// 1. Tampilkan pop-up salam pembuka selamat datang menggunakan alert().
// 2. Tampilkan dialog prompt() untuk meminta nama pengunjung, simpan hasilnya ke variabel "namaPelanggan".
// 3. Gunakan percabangan "if - else":
//    - JIKA namaPelanggan ada isinya: tampilkan alert sapaan dan log ke console.
//    - JIKA namaPelanggan kosong / klik Cancel: beri nilai default "Pelanggan Setia" dan tampilkan alert pemberitahuan.

alert("Selamat Datang di Sistem Kedai Kopi anak PSTI!");
let nama_pelanggan = prompt(
  "Hallo! Masukkan nama anda untuk menjadi membership Kedai Kopi anak PSTI",
);
if (nama_pelanggan) {
  alert("Hallo!, " + nama_pelanggan + " Yuk kita mulai menjadi membership!");
  console.log("Pelanggan Baru : " + nama_pelanggan);
} else {
  // Jika user tidak memsukkan nama akan disebut anonim
  alert("Kamu tidak memasukkan nama, kamu akan disebut anonymous");
  nama_pelanggan = "Pelanggan Setia kami";
  console.log("Pelanggan Anonim : " + nama_pelanggan);
  alert(
    "Kamu merupakan " + nama_pelanggan + ", langsung gaskeuun ke pemesanan!",
  );
}
// ============================================================
// AKTIVITAS 3: Operasi Aritmatika — Akumulasi Poin Transaksi
// ============================================================
// Catatan: Gunakan bilangan bulat (integer murni tanpa desimal/float).

// TODO 3:
// 1. Buat 3 variabel poin transaksi: "poinKopi", "poinMakanan", dan "poinMerchandise"
//    (isi dengan angka bulat bebas, misal: 45, 35, 20).
// 2. Buat variabel "totalPoin" yang menjumlahkan ketiga variabel poin di atas.
// 3. Cetak rincian perolehan poin dan totalPoin ke Console menggunakan console.log().

let poin_kopi = 50;
let poin_makanan = 70;
let poin_merchandise = 100;

let total_poin = poin_kopi + poin_makanan + poin_merchandise;

console.log("Poin Kopi : " + poin_kopi);
console.log("Poin Makanan : " + poin_makanan);
console.log("Poin Merchandise : " + poin_merchandise);
console.log("Total Poin Keseluruhan : " + total_poin);
// ============================================================
// AKTIVITAS 4: Percabangan if-else — Penentuan Tier Membership
// ============================================================

// TODO 4:
// 1. Buat variabel "tierMember" dan "benefit" bertipe string kosong ("").
// 2. Gunakan percabangan "if - else if - else" berdasarkan nilai "totalPoin":
//    - totalPoin >= 100 : tierMember = "Platinum", benefit = "Diskon 20% + Gratis 1 Minuman Signature"
//    - totalPoin >= 70  : tierMember = "Gold", benefit = "Diskon 10% di setiap transaksi"
//    - totalPoin >= 40  : tierMember = "Silver", benefit = "Diskon 5% untuk menu minuman"
//    - selain itu       : tierMember = "Bronze", benefit = "Member Reguler (kumpulkan poin untuk naik tier)"
// 3. Cetak hasil tierMember dan benefit ke Console.
// 4. Tampilkan ringkasan hasil member (nama, total poin, tier, benefit) via dialog alert().

let tierMember = "";
let benefit = "";

if (total_poin >= 100) {
  tierMember = "Gockiel abiezz";
  benefit = "Diskon 100% + Gratis 1 Minuman Signature";
} else if (total_poin >= 70) {
  tierMember = "Gockiel ajah";
  benefit = "Diskon 50% di setiap transaksi";
} else if (total_poin >= 40) {
  tierMember = "goks";
  benefit = "Diskon 10% untuk menu minuman";
} else {
  tierMember = "Bronze";
  benefit = "Member Reguler (kumpulkan poin untuk naik tier";
}

console.log("TierMember : " + tierMember);
console.log("Benefit : " + benefit);

alert(
  "Nama Pelanggan : " +
    nama_pelanggan +
    "\n" +
    "Total Poin : " +
    total_poin +
    "\n" +
    "TierMember    : " +
    tierMember +
    "\n" +
    "Benefit  : " +
    benefit +
    "\n",
);

// ============================================================
// AKTIVITAS 5: Function — Membuat Fungsi yang Bisa Dipakai Ulang
// ============================================================

// TODO 5A:
// Buat fungsi "hitungTotalPoin(p1, p2, p3)" yang menerima 3 parameter nilai poin,
// menjumlahkannya, dan mengembalikan (return) nilai total penjumlahannya.

function hitung_total_poin(p1, p2, p3) {
  let jumlah = p1 + p2 + 3;
  return jumlah / 3;
}
// TODO 5B:
// Buat fungsi "tentukanTierMember(poin)" yang menerima 1 parameter nilai poin,
// dan mengembalikan (return) string nama tier beserta keterangannya.

function tentukan_tierMember(poin) {
  if (tierMember >= 100) return "Gockiel abiezz";
  if (tierMember >= 70) return "Gockiel ajah";
  if (tierMember >= 40) return "goks";
  return "Bronze";
}
// TODO 5C:
// Buktikan bahwa fungsi di atas bisa dipakai ulang (reusable):
// 1. Hitung total poin dan tentukan tier untuk simulasi Pelanggan B (misal poin: 35, 25, 20).
// 2. Hitung total poin dan tentukan tier untuk simulasi Pelanggan C (misal poin: 15, 10, 5).
// 3. Cetak data Pelanggan B dan C ke tab Console.

let poin_pelanggan_B = hitung_total_poin(32, 20, 20);
let tierMember_pelanggan_B = tentukan_tierMember(poin_pelanggan_B);

let poin_pelanggan_C = hitung_total_poin(20, 15, 5);
let tierMember_pelanggan_C = tentukan_tierMember(poin_pelanggan_C);

console.log("Data Pelanggan B");
console.log("Jumlah poin anda " + poin_pelanggan_B);
console.log("Tier Member anda " + tierMember_pelanggan_B);

console.log("Data Pelanggan C");
console.log("Jumlah poin anda " + poin_pelanggan_C);
console.log("Tier Member anda " + tierMember_pelanggan_C);
// ============================================================
// AKTIVITAS 6: Array & For Loop — Daftar Menu Rekomendasi
// ============================================================

// TODO 6A:
// Buat variabel Array bernama "menuRekomendasi" yang berisi minimal 5 nama menu kopi/makanan.

let menuRekomendasi = [
  "coffe piston",
  "americano 1000 shot",
  "eskrim ayang bebeb ",
  "kentang goreng rasa karbu",
  "juz kurma masyallah tabarakallah",
];
console.log("=== MENU REKOMENDASI UNTUK SAHABAT GOKS GOKS ===");

// TODO 6B:
// Gunakan perulangan "for loop" untuk mencetak setiap menu ke Console dengan format:
// "1. Nama Menu", "2. Nama Menu", dst. Gunakan (i + 1) untuk nomor urutnya.

for (let i = 0; i < menuRekomendasi.length; i++) {
  console.log(i + 1 + ". " + menuRekomendasi[i]);
}

// TODO 6C:
// Cetak jumlah total menu di akhir daftar menggunakan properti ".length".
// Akhiri program dengan: console.log("=== TUGAS MANDIRI SELESAI DENGAN SUKSES! ===");

console.log("Total Menu REKOMENDASI: " + menuRekomendasi.length + " Menu");
console.log("=== TUGAS MANDIRI BERHASIL BOWWOW KERJAKAN! ===");
