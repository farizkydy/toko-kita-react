# Branch `expected-result`: hasil akhir seluruh sesi Day 26

Gabungan semua tahap: inline style → Tailwind + Card/Badge/Button → state di parent →
search, filter kategori, pilih banyak, ringkasan + total, empty state → ikon + hover dari prompt AI,
plus kartu ke-5 "Poin Reward".

## Goal untuk dibuka di awal sesi
"Hari ini kalian membangun **katalog layanan Toko Kita**: bisa dicari, difilter, dipilih lebih
dari satu, dan ada ringkasan total harganya." Tunjukkan hasil jalan (`npm run dev`), bukan kodenya.

## Daftar cek hasil akhir
- [ ] 5 kartu, ikon di kiri judul, badge kategori dan "Populer", harga ("Gratis" jika 0)
- [ ] Hover: kartu naik, border berubah
- [ ] Klik kartu: biru + "Dipilih ✓", klik lagi: batal
- [ ] Cari "retur" menyisakan 1 kartu; cari "zzz" menampilkan empty state
- [ ] Chip kategori memfilter; kombinasi dengan search jalan
- [ ] Panel ringkasan: jumlah, daftar, total benar (contoh: Garansi + COD = Rp20.000); Reset mengosongkan
- [ ] Layar kecil: grid menjadi 1 kolom, panel pindah ke bawah
- [ ] Console bersih, `npm run build` lolos
