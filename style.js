Inisialisasi saldo_awal, nomor_PIN, dll.

Input("Masukkan nomor kartu: ")
Verifikasi_nomor_kartu()

Input("Masukkan PIN: ")
Jika Verifikasi_PIN() == True:
    Tampilkan_Menu_Utama()
    Pilihan_Menu = Input("Pilih opsi: ")

    Jika Pilihan_Menu == "1":
        Pengecekan_Saldo()

    Jika Pilihan_Menu == "2":
        Jumlah_Tarik = Input("Masukkan jumlah tarikan: ")
        Penarikan_Tunai(Jumlah_Tarik)

    Jika Pilihan_Menu == "3":
        Nomor_Rekening_Tujuan = Input("Masukkan nomor rekening tujuan: ")
        Jumlah_Transfer = Input("Masukkan jumlah transfer: ")
        Transfer(Nomor_Rekening_Tujuan, Jumlah_Transfer)

    Jika Pilihan_Menu == "4":
        PIN_Baru = Input("Masukkan PIN baru: ")
        Ganti_PIN(PIN_Baru)

    Jika Pilihan_Menu == "5":
        Keluar()

Selesai()