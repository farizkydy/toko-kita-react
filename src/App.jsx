import ServiceCard from "./ServiceCard";

export default function App() {
  return (
    <main style={{ padding: 24 }}>
      <h2>Layanan Toko Kami</h2>
      <div style={{ display: "flex", gap: 16, flexWrap: "wrap" }}>
        <ServiceCard icon="🚚" title="Gratis Ongkir" desc="Min. belanja Rp100.000" />
        <ServiceCard icon="🛡️" title="Garansi 30 Hari" desc="Tukar jika rusak" />
        <ServiceCard icon="💵" title="Bayar di Tempat (COD)" desc="Bayar saat barang tiba" />
        <ServiceCard icon="↩️" title="Retur Mudah" desc="Tanpa ribet, 7 hari" />
        <ServiceCard icon="🎁" title="Poin Reward" desc="Kumpulkan poin tiap belanja" highlight={true} />
      </div>
    </main>
  );
}
