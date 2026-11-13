# Branch `day27/live/3-loading-error`: hasil Live Coding 3 (10 menit)

**Mulai dari:** `day27/live/2-fetch-api` · **Lanjut ke:** `day27/live/4-react-query`

Branch ini sudah memuat `TestimonialCard` (kunci mandiri 2) supaya semua peserta mulai dari titik sama.

## Urutan mengetik
1. State `loading` (awal `true`) dan `error` (awal `null`)
2. Cek `res.ok`: `fetch` tidak melempar error untuk status 404/500
3. `.catch` mengisi error, `.finally` mematikan loading
4. Render: "Memuat testimonial..." dan pesan error (`role="alert"`)

## Poin bicara
- Tiga keadaan data: loading, error, sukses
- Uji dengan URL yang salah, error harus tampil

## Tugas mandiri 3 (15 menit)
Tombol "Coba lagi" lewat state `attempt` di dependency array. Kunci: `day27/solution/mandiri-3`.
