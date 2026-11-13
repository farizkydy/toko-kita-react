# Branch `day26/live/2-ui-library`: hasil Live Coding 2 (10 menit)

**Mulai dari:** `day26/live/1-inline-style` · **Lanjut ke:** `day26/live/3-parent-child`

## Setup (sudah dikerjakan di branch ini)
- Tailwind v4 lewat `@tailwindcss/vite`, `@import "tailwindcss"` di `index.css`
- Alias `@` ke `src` (`vite.config.js` + `jsconfig.json`)
- Komponen `Card` dan `Badge` di `src/components/ui/`, bentuknya sama dengan hasil
  `npx shadcn@latest add card badge` (ditulis manual agar tidak bergantung internet kelas)

> Di kelas, mentor boleh menjalankan CLI asli: `npx shadcn@latest init`, lalu
> `npx shadcn@latest add card badge`. Jika jaringan bermasalah, pakai branch ini.

## Yang ditulis mentor
1. Ganti `<div>` kartu menjadi `Card`, `CardHeader`, `CardTitle`, `CardDescription`, `CardContent`
2. Tambah `Badge`
3. Efek hover lewat `className`: `hover:-translate-y-1 hover:shadow-lg`
4. Layout: header dan grid responsif `grid-cols-1 sm:grid-cols-2 lg:grid-cols-4` (kecilkan jendela untuk demo)

## Poin bicara
- UI library = komponen jadi, kita tinggal rakit dan atur lewat `className`
- Beda `style` (object) dan `className` (string kelas Tailwind)
- Hover sekarang bisa, yang tadi tidak bisa di inline style

## Catatan
Gaya inline dihapus; semua lewat Tailwind. `cn()` menggabungkan class tanpa bentrok.

## Tugas mandiri 2
Ubah varian Badge dan beri efek hover sendiri. Solusi: `day26/solution/mandiri-2`.
