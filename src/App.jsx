import ServiceCard from "./ServiceCard";

export default function App() {
  return (
    <main className="p-6">
      <h2 className="mb-4 text-2xl font-bold">Layanan Toko Kami</h2>
      <div className="flex flex-wrap gap-4">
        <ServiceCard icon="🚚" title="Gratis Ongkir" desc="Min. belanja Rp100.000" />
        <ServiceCard icon="🛡️" title="Garansi 30 Hari" desc="Tukar jika rusak" />
        <ServiceCard icon="💵" title="Bayar di Tempat (COD)" desc="Bayar saat barang tiba" />
        <ServiceCard icon="↩️" title="Retur Mudah" desc="Tanpa ribet, 7 hari" />
      </div>
    </main>
  );
}
