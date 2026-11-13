# Branch `study-case`: titik awal sesi (starter)

**Untuk:** mentor dan student. Student mulai dari branch ini.

## Study case: "Layanan Toko Kami"
Kamu membangun bagian **Services** di landing page sebuah toko online. Ada 4 layanan:
Gratis Ongkir, Garansi 30 Hari, Bayar di Tempat (COD), dan Retur Mudah.

## Kondisi saat ini (hasil Day 23–24)
- `ServiceCard` sudah menerima props `icon`, `title`, `desc`
- Tombol "Lihat info" memanggil `alert(title)` (event handling)
- Belum ada styling sama sekali (tampilan polos)

## Tujuan akhir sesi (lihat branch `expected-result`)
1. Kartu layanan **bergaya** (inline style, lalu komponen UI library)
2. Kartu bisa **dipilih** dan parent (`App`) tahu mana yang dipilih
3. Bisa memilih **lebih dari satu**, ada jumlah terpilih dan tombol **Reset**
4. Kartu punya **Badge** dan efek **hover**

## Menjalankan
```bash
npm install
npm run dev
```
Versi yang dipakai: Node 22, React 19, Vite 8.

## Urutan kerja sesi
`study-case` → `live/1-inline-style` → `live/2-ui-library` → `live/3-parent-child` → `live/4-ai-prompting`
