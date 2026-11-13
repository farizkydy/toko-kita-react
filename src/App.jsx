import { useState } from "react";
import ServiceCard from "./ServiceCard";

const services = [
  { id: 1, icon: "🚚", title: "Gratis Ongkir", desc: "Min. belanja Rp100.000", category: "Pengiriman", price: 0, popular: true },
  { id: 2, icon: "🛡️", title: "Garansi 30 Hari", desc: "Tukar jika rusak", category: "Layanan", price: 15000, popular: false },
  { id: 3, icon: "💵", title: "Bayar di Tempat (COD)", desc: "Bayar saat barang tiba", category: "Pembayaran", price: 5000, popular: true },
  { id: 4, icon: "↩️", title: "Retur Mudah", desc: "Tanpa ribet, 7 hari", category: "Layanan", price: 10000, popular: false },
];

export default function App() {
  const [selectedId, setSelectedId] = useState(null);
  const [query, setQuery] = useState("");

  const selected = services.find((s) => s.id === selectedId);
  const visible = services.filter((s) =>
    s.title.toLowerCase().includes(query.toLowerCase()),
  );

  return (
    <div className="min-h-screen">
      <header className="bg-gray-900 px-6 py-8 text-white">
        <h1 className="text-3xl font-bold">Toko Kita</h1>
        <p className="mt-1 text-gray-300">Layanan yang bikin belanja lebih tenang</p>
      </header>
      <main className="mx-auto max-w-5xl p-6">
        <h2 className="mb-2 text-2xl font-bold">Layanan Toko Kami</h2>
        <p className="mb-4">Dipilih: {selected ? selected.title : "belum ada"}</p>
        <input
          className="mb-4 w-full rounded-md border px-3 py-2 sm:w-72"
          placeholder="Cari layanan..."
          value={query}
          onChange={(e) => setQuery(e.target.value)}
        />
        <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {visible.map((s) => (
            <ServiceCard
              key={s.id}
              icon={s.icon}
              title={s.title}
              desc={s.desc}
              category={s.category}
              price={s.price}
              popular={s.popular}
              isSelected={s.id === selectedId}
              onSelect={() => setSelectedId(s.id)}
            />
          ))}
        </div>
      </main>
    </div>
  );
}
