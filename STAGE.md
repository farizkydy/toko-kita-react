# Branch `day27/live/2-fetch-api`: hasil Live Coding 2 (15 menit)

**Mulai dari:** `day27/live/1-use-effect` · **Lanjut ke:** `day27/live/3-loading-error`

## Urutan mengetik
1. Buat `src/Testimonials.jsx`, `const API_URL = "https://jsonplaceholder.typicode.com/comments?_limit=6"`
2. `useState([])` untuk `testimonials`
3. `useEffect(() => { fetch(API_URL).then(res => res.json()).then(setTestimonials) }, [])`
4. Tampilkan jumlah dan daftar `name` (dulu `<ul>` sederhana)
5. Pasang `<Testimonials />` di `App.jsx`

## Poin bicara
- Request/response, JSON, status code
- Kenapa `fetch` di `useEffect` dengan `[]`: sekali setelah render pertama
- `name` pada data berisi kalimat lorem ipsum; pakai sebagai judul ulasan

## Cadangan jaringan
Ganti `API_URL` menjadi `"/testimonials.json"` (file ada di `public/`).

## Tugas mandiri 2 (15 menit)
Buat `TestimonialCard` (Card dari Day 26) dan tampilkan 6 kartu dalam grid. Kunci: `day27/solution/mandiri-2`.
