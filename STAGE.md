# Branch `live/1-inline-style`: hasil Live Coding 1 (10 menit)

**Untuk:** mentor (referensi live coding) dan student (cadangan jika tertinggal).
**Mulai dari:** `study-case` · **Lanjut ke:** `live/2-ui-library`

## Yang ditulis mentor
1. Object `cardStyle` di `ServiceCard.jsx`
2. `<div style={cardStyle}>`
3. Style `h3` (20px) dan `p` (14px) langsung di tempat
4. Container flex di `App.jsx` supaya kartu berjajar

Lihat perubahannya: `git diff study-case..live/1-inline-style`

## Poin bicara
- `style` menerima **object**, bukan string
- Properti **camelCase** (`borderRadius`, bukan `border-radius`)
- Angka otomatis jadi `px` (`padding: 16`)
- Kurung kurawal dua: satu masuk ke JavaScript, satu adalah object

## Hasil yang diharapkan
4 kartu putih berjajar: sudut membulat 12, padding 16, lebar 220, teks rata tengah.

## Batasan (jembatan ke tahap 2)
Arahkan mouse ke kartu: **tidak ada efek hover**. Inline style tidak mendukung `:hover`.

## Tugas mandiri 1
Tambah kartu ke-5 "Poin Reward" dengan gaya sendiri. Solusinya ada di `solution/mandiri-1`.
