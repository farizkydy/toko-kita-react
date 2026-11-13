# Branch `live/3-parent-child`: hasil Live Coding 3 (15 menit)

**Mulai dari:** `live/2-ui-library` · **Lanjut ke:** `live/4-ai-prompting`

## Urutan mengetik (sama dengan slide)
1. `services` array: `id`, `category`, `price`, `popular` (data)
2. `useState(null)` untuk `selectedId` di **App**
3. `services.map(...)` dengan `key={s.id}`
4. Props: `isSelected={s.id === selectedId}` dan `onSelect={() => setSelectedId(s.id)}`
5. Teks "Dipilih: ..." di App dan tombol "Pilih" / "Dipilih ✓" di ServiceCard
6. Kolom cari: `query` + `<input value onChange>` (controlled input), lalu `services.filter(...)` sebelum `map`
7. Badge "Populer" lewat `{popular && <Badge/>}` dan harga lewat `formatRupiah` (`src/lib/format.js`, sudah disiapkan)

## Alur yang dinarasikan
Klik tombol → `onSelect()` → `setSelectedId(2)` → App render ulang → kartu 2 menerima `isSelected = true` → biru.
Ketik di kolom cari → `setQuery` → render ulang → `filter` menyisakan kartu yang cocok.

## Poin bicara
- State di **parent** (lifting state up); child hanya menerima props
- Child tidak mengubah state parent; child memanggil fungsi dari parent
- `onClick={onSelect}` tanpa kurung (kirim fungsinya, jangan memanggilnya)
- `key` unik dan stabil (pakai `id`, bukan index)
- Controlled input: nilai input selalu berasal dari state
- `visible` dihitung dari `services` dan `query`, tidak disimpan di state sendiri (derived state)

## Tugas mandiri 3 (25 menit, bertingkat)
1. Tombol "Reset pilihan"
2. Pilih banyak: state jadi array `selectedIds`
3. Tampilkan jumlah terpilih
4. Chip filter kategori (Semua / Pengiriman / Pembayaran / Layanan)
5. Panel ringkasan: daftar terpilih + total harga
6. Empty state saat tidak ada kartu yang cocok

Solusi: `solution/mandiri-3`. Tingkat 1–3 wajib, 4–6 untuk yang cepat (dibantu hint bertahap).
