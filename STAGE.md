# Branch `day27/live/4-react-query`: hasil Live Coding 4 (10 menit)

**Mulai dari:** `day27/live/3-loading-error` · **Lanjut ke:** `day27/expected-result`

## Urutan mengetik
1. `npm i @tanstack/react-query`
2. `QueryClientProvider` di `main.jsx`
3. Fungsi `fetchTestimonials` (cek `res.ok`)
4. `useQuery({ queryKey: ["testimonials"], queryFn: fetchTestimonials, retry: false })`
5. Hapus 3 state dan `useEffect` manual

## Poin bicara
- Tampilan sama, kode jauh lebih pendek
- `queryKey` = identitas cache
- `retry: false` hanya agar error langsung terlihat saat demo (default v5 mengulang 3 kali)

## Tugas mandiri 4 (10 menit)
Ubah kodemu ke `useQuery`. Challenge: tombol "Muat ulang" dengan `refetch` dan `isFetching`. Kunci: `day27/solution/mandiri-4`.
