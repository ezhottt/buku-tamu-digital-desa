function doGet() {
  return HtmlService.createHtmlOutputFromFile('Index')
    .setTitle('Buku Tamu Desa Cikadu')
    .addMetaTag('viewport', 'width=device-width, initial-scale=1');
}

function simpanData(dataForm) {
  var sheet = SpreadsheetApp.getActiveSpreadsheet().getSheetByName("Sheet1");
  var waktuSekarang = new Date();
  var timestamp = Utilities.formatDate(waktuSekarang, "Asia/Jakarta", "dd/MM/yyyy HH:mm:ss");
  var tanggal = Utilities.formatDate(waktuSekarang, "Asia/Jakarta", "dd/MM/yyyy");
  
  var fileUrl = "";
  
  // Proses Tanda Tangan: Convert base64 dari HTML jadi file PNG
  if (dataForm.ttd && dataForm.ttd !== "") {
    var base64Data = dataForm.ttd.split(',')[1];
    var blob = Utilities.newBlob(Utilities.base64Decode(base64Data), 'image/png', 'TTD_' + dataForm.nama + '_' + timestamp.replace(/:/g, '-') + '.png');
    
    var file = DriveApp.createFile(blob);
    file.setSharing(DriveApp.Access.ANYONE_WITH_LINK, DriveApp.Permission.VIEW);
    fileUrl = file.getUrl();
  }
  
  // Masukkan data ke baris kosong (A - H)
  sheet.appendRow([
    timestamp,
    tanggal,
    dataForm.nama,
    dataForm.instansi,
    dataForm.jabatan,
    dataForm.tujuan,
    dataForm.bertemu,
    fileUrl
  ]);

  // =======================================================
  // FITUR BARU: NOTIFIKASI EMAIL OTOMATIS KE ADMIN
  // =======================================================
  
  // UBAH BAGIAN INI: Masukkan email admin yang mau nerima notif
  var emailAdmin = "email.admin@gmail.com"; 
  
  var subjekEmail = "🔔 Tamu Baru: " + dataForm.nama;
  var isiEmail = "Halo Admin,\n\n" +
                 "Ada tamu baru yang baru saja mengisi Buku Tamu Digital Kantor Desa Cikadu.\n\n" +
                 "Berikut rinciannya:\n" +
                 "▪ Nama: " + dataForm.nama + "\n" +
                 "▪ Asal/Instansi: " + dataForm.instansi + "\n" +
                 "▪ Tujuan/Keperluan: " + dataForm.tujuan + "\n" +
                 "▪ Ingin Bertemu: " + dataForm.bertemu + "\n" +
                 "▪ Waktu Kedatangan: " + timestamp + "\n\n" +
                 "Silakan buka Google Sheets untuk melihat data selengkapnya termasuk tanda tangan tamu.\n\n" +
                 "--\nSistem Buku Tamu Otomatis";
                 
  // Eksekusi kirim email
  MailApp.sendEmail(emailAdmin, subjekEmail, isiEmail);
  
  // =======================================================
  
  return "Sukses";
}
