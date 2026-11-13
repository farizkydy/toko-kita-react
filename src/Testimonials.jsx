import { useQuery } from "@tanstack/react-query";
import TestimonialCard from "./TestimonialCard";

const API_URL = "https://jsonplaceholder.typicode.com/comments?_limit=6";

async function fetchTestimonials() {
  const res = await fetch(API_URL);
  if (!res.ok) throw new Error(`Gagal memuat (status ${res.status})`);
  return res.json();
}

export default function Testimonials() {
  const { data, isLoading, isError, error } = useQuery({
    queryKey: ["testimonials"],
    queryFn: fetchTestimonials,
    retry: false,
  });

  return (
    <section className="mt-10">
      <h2 className="mb-4 text-2xl font-bold">Kata Pelanggan</h2>
      {isLoading && <p>Memuat testimonial...</p>}
      {isError && <p role="alert" className="text-red-600">Error: {error.message}</p>}
      <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
        {data?.map((t) => (
          <TestimonialCard key={t.id} name={t.name} email={t.email} body={t.body} />
        ))}
      </div>
    </section>
  );
}
