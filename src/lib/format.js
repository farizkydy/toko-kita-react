export function formatRupiah(n) {
  return n === 0 ? "Gratis" : "Rp" + n.toLocaleString("id-ID");
}
