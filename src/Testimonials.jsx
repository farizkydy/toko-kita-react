import { useEffect, useState } from "react";

const API_URL = "https://jsonplaceholder.typicode.com/comments?_limit=6";

export default function Testimonials() {
  const [testimonials, setTestimonials] = useState([]);

  useEffect(() => {
    fetch(API_URL)
      .then((res) => res.json())
      .then((data) => setTestimonials(data));
  }, []);

  return (
    <section className="mt-10">
      <h2 className="mb-2 text-2xl font-bold">Kata Pelanggan</h2>
      <p className="mb-2">Jumlah testimonial: {testimonials.length}</p>
      <ul className="list-disc pl-5">
        {testimonials.map((t) => (
          <li key={t.id}>{t.name}</li>
        ))}
      </ul>
    </section>
  );
}
