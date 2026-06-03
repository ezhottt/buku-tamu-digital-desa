# 🏛️ Buku Tamu Digital - Kantor Desa Cikadu

Aplikasi web buku tamu digital responsif tanpa login yang dirancang untuk mempercepat dan mendigitalisasi proses administrasi tamu di Kantor Desa Cikadu. Sistem ini menggunakan Google Apps Script sebagai *backend* dan Google Sheets sebagai *database* sekaligus *dashboard* administratif.

## ✨ Fitur Utama
* **Tanpa Login (Frictionless Entry):** Tamu dapat langsung mengisi data melalui *smartphone* masing-masing dengan men-scan QR Code.
* **Tanda Tangan Digital:** Integrasi *canvas* yang memungkinkan tamu memberikan tanda tangan langsung di layar sentuh perangkat mereka.
* **Otomasi Penyimpanan Awan:** Coretan tanda tangan otomatis dikonversi menjadi file `.png` dan disimpan ke Google Drive, sementara tautan file dikirim ke *database*.
* **Notifikasi Email Real-time:** Sistem otomatis mengirimkan email laporan kepada Admin setiap kali ada tamu baru yang berhasil mendaftar.
* **Role-Based Access Control (RBAC) Native:** Keamanan data terjamin karena *dashboard* pemantauan (Google Sheets) hanya dapat diakses oleh Admin dan Sekretaris Desa menggunakan sistem login Google Workspace.

## 🛠️ Teknologi yang Digunakan
* **Backend & Database:** Google Apps Script (GAS), Google Sheets, Google Drive API, MailApp Service.
* **Frontend:** HTML5, CSS3, JavaScript.
* **UI/UX Framework:** Bootstrap 5 (Tema Soft Blue).
* **Libraries:** 
  * [Signature Pad](https://github.com/szimek/signature_pad) (Canvas Tanda Tangan)
  * [SweetAlert2](https://sweetalert2.github.io/) (Pop-up Notifikasi Sukses)
  * FontAwesome (Ikon UI)

## 🚀 Cara Instalasi (Deployment)
Jika ingin menggunakan ulang *source code* ini untuk instansi lain, ikuti langkah berikut:
1. Buat *spreadsheet* baru di Google Sheets.
2. Buat *header* pada Baris 1: `Timestamp`, `Tanggal`, `Nama`, `Asal Instansi`, `Jabatan`, `Tujuan/Keperluan`, `Ingin Bertemu`, `Tanda Tangan`.
3. Buka menu **Extensions > Apps Script**.
4. Salin kode dari `Code.js` ke dalam file `Code.gs`. Ubah variabel `emailAdmin` dengan email penerima notifikasi.
5. Buat file baru bernama `Index.html` dan salin kode dari repository ini.
6. Lakukan **Deploy as Web App** dengan pengaturan:
   * Execute as: **Me**
   * Who has access: **Anyone**
7. Berikan otorisasi akses Google Drive dan Email yang diminta oleh Google.

---
*Dikembangkan untuk optimalisasi pendataan dan pelayanan masyarakat.*
