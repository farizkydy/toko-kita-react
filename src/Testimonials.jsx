import { useEffect, useState } from "react";
import TestimonialCard from "./TestimonialCard";

const API_URL = "https://jsonplaceholder.typicode.com/comments?_limit=6";

export default function Testimonials() {
  const [testimonials, setTestimonials] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    fetch(API_URL)
      .then((res) => {
        if (!res.ok) throw new Error(`Gagal memuat (status ${res.status})`);
        return res.json();
      })
      .then((data) => setTestimonials(data))
      .catch((err) => setError(err.message))
      .finally(() => setLoading(false));
  }, []);

  return (
    <section className="mt-10">
      <h2 className="mb-4 text-2xl font-bold">Kata Pelanggan</h2>
      {loading && <p>Memuat testimonial...</p>}
      {error && <p role="alert" className="text-red-600">Error: {error}</p>}
      <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
        {testimonials.map((t) => (
          <TestimonialCard key={t.id} name={t.name} email={t.email} body={t.body} />
        ))}
      </div>
    </section>
  );
}
