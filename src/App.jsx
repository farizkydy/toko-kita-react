import ServiceCard from "./ServiceCard";

export default function App() {
  return (
    <div className="min-h-screen">
      <header className="bg-gray-900 px-6 py-8 text-white">
        <h1 className="text-3xl font-bold">Toko Kita</h1>
        <p className="mt-1 text-gray-300">Layanan yang bikin belanja lebih tenang</p>
      </header>
      <main className="mx-auto max-w-5xl p-6">
        <h2 className="mb-4 text-2xl font-bold">Layanan Toko Kami</h2>
        <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4">
          <ServiceCard icon="🚚" title="Gratis Ongkir" desc="Min. belanja Rp100.000" />
          <ServiceCard icon="🛡️" title="Garansi 30 Hari" desc="Tukar jika rusak" />
          <ServiceCard icon="💵" title="Bayar di Tempat (COD)" desc="Bayar saat barang tiba" />
          <ServiceCard icon="↩️" title="Retur Mudah" desc="Tanpa ribet, 7 hari" />
        </div>
      </main>
    </div>
  );
}
