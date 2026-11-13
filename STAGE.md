# Kunci untuk branch `day27/live/1-use-effect`: hasil Live Coding 1 (10 menit)

**Mulai dari:** `day27/study-case` · **Lanjut ke:** `day27/live/2-fetch-api`

## Urutan mengetik (sama dengan slide)
1. `import { useEffect, useState } from "react"`
2. Efek pertama dengan `[]`: `console.log("App tampil pertama kali")`
3. Efek kedua dengan `[query]`: `document.title` ikut isi kolom cari
4. Ketik di kolom cari, lihat judul tab berubah

## Poin bicara
- Render itu murni; urusan di luar render (judul tab, log, request) ditaruh di `useEffect`
- Dependency array: `[]` sekali, `[query]` saat query berubah, tanpa array setiap render
- Di mode dev, log muncul dua kali karena `StrictMode` (bukan bug)

## Kunci tugas mandiri
- Judul tab: `document.title = ... Toko Kita (${selectedIds.length} dipilih)` dengan dependency `[query, selectedIds]` (satu efek menggantikan efek judul lama).
- Challenge: `useState(() => JSON.parse(localStorage.getItem("selectedIds") ?? "[]"))` dan efek `localStorage.setItem(...)` dengan `[selectedIds]`.
- Jika kunci terlalu cepat dibagikan: minta student mencoba reload dulu.
