import { useEffect, useState } from "react";
import ServiceCard from "./ServiceCard";
import { formatRupiah } from "./lib/format";
import { cn } from "@/lib/utils";

const services = [
  { id: 1, icon: "🚚", title: "Gratis Ongkir", desc: "Min. belanja Rp100.000", category: "Pengiriman", price: 0, popular: true },
  { id: 2, icon: "🛡️", title: "Garansi 30 Hari", desc: "Tukar jika rusak", category: "Layanan", price: 15000, popular: false },
  { id: 3, icon: "💵", title: "Bayar di Tempat (COD)", desc: "Bayar saat barang tiba", category: "Pembayaran", price: 5000, popular: true },
  { id: 4, icon: "↩️", title: "Retur Mudah", desc: "Tanpa ribet, 7 hari", category: "Layanan", price: 10000, popular: false },
  { id: 5, icon: "🎁", title: "Poin Reward", desc: "Kumpulkan poin tiap belanja", category: "Layanan", price: 0, popular: false },
];

const categories = ["Semua", "Pengiriman", "Pembayaran", "Layanan"];

export default function App() {
  const [selectedIds, setSelectedIds] = useState([]);
  const [query, setQuery] = useState("");
  const [category, setCategory] = useState("Semua");

  useEffect(() => {
    console.log("App tampil pertama kali");
  }, []);

  useEffect(() => {
    document.title = query ? `Cari: ${query}` : "Toko Kita";
  }, [query]);

  function toggle(id) {
    setSelectedIds((prev) =>
      prev.includes(id) ? prev.filter((x) => x !== id) : [...prev, id],
    );
  }

  const visible = services.filter(
    (s) =>
      (category === "Semua" || s.category === category) &&
      s.title.toLowerCase().includes(query.toLowerCase()),
  );
  const selectedServices = services.filter((s) => selectedIds.includes(s.id));
  const total = selectedServices.reduce((sum, s) => sum + s.price, 0);

  return (
    <div className="min-h-screen">
      <header className="bg-gray-900 px-6 py-8 text-white">
        <h1 className="text-3xl font-bold">Toko Kita</h1>
        <p className="mt-1 text-gray-300">Layanan yang bikin belanja lebih tenang</p>
      </header>
      <main className="mx-auto grid max-w-6xl gap-6 p-6 lg:grid-cols-[1fr_300px]">
        <section>
          <h2 className="mb-4 text-2xl font-bold">Layanan Toko Kami</h2>
          <input
            className="mb-3 w-full rounded-md border px-3 py-2 sm:w-72"
            placeholder="Cari layanan..."
            value={query}
            onChange={(e) => setQuery(e.target.value)}
          />
          <div className="mb-4 flex flex-wrap gap-2">
            {categories.map((c) => (
              <button
                key={c}
                onClick={() => setCategory(c)}
                className={cn(
                  "rounded-full border px-3 py-1 text-sm",
                  c === category ? "border-blue-600 bg-blue-600 text-white" : "bg-white",
                )}
              >
                {c}
              </button>
            ))}
          </div>
          {visible.length === 0 ? (
            <p className="rounded-md border border-dashed p-6 text-center text-gray-500">
              Tidak ada layanan yang cocok.
            </p>
          ) : (
            <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 xl:grid-cols-3">
              {visible.map((s) => (
                <ServiceCard
                  key={s.id}
                  icon={s.icon}
                  title={s.title}
                  desc={s.desc}
                  category={s.category}
                  price={s.price}
                  popular={s.popular}
                  isSelected={selectedIds.includes(s.id)}
                  onSelect={() => toggle(s.id)}
                />
              ))}
            </div>
          )}
        </section>
        <aside className="h-fit rounded-xl border bg-white p-4">
          <h3 className="mb-2 text-lg font-semibold">Terpilih: {selectedIds.length} layanan</h3>
          {selectedServices.length === 0 ? (
            <p className="text-sm text-gray-500">Belum ada layanan dipilih.</p>
          ) : (
            <ul className="mb-3 space-y-1 text-sm">
              {selectedServices.map((s) => (
                <li key={s.id} className="flex justify-between">
                  <span>{s.title}</span>
                  <span>{formatRupiah(s.price)}</span>
                </li>
              ))}
            </ul>
          )}
          <p className="mb-3 flex justify-between border-t pt-2 font-semibold">
            <span>Total</span>
            <span>{formatRupiah(total)}</span>
          </p>
          <button
            className="w-full rounded-md bg-gray-900 px-3 py-1.5 text-sm text-white"
            onClick={() => setSelectedIds([])}
          >
            Reset pilihan
          </button>
        </aside>
      </main>
    </div>
  );
}
