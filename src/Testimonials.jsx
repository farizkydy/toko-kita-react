import { useQuery } from "@tanstack/react-query";
import TestimonialCard from "./TestimonialCard";

const API_URL = "https://jsonplaceholder.typicode.com/comments?_limit=6";

async function fetchTestimonials() {
  const res = await fetch(API_URL);
  if (!res.ok) throw new Error(`Gagal memuat (status ${res.status})`);
  return res.json();
}

export default function Testimonials() {
  const { data, isLoading, isError, error, refetch, isFetching } = useQuery({
    queryKey: ["testimonials"],
    queryFn: fetchTestimonials,
    retry: false,
    staleTime: 60_000,
  });

  return (
    <section className="mt-10">
      <div className="mb-4 flex items-center gap-3">
        <h2 className="text-2xl font-bold">Kata Pelanggan</h2>
        <button className="rounded-md border px-3 py-1 text-sm" onClick={() => refetch()}>
          {isFetching ? "Memuat..." : "Muat ulang"}
        </button>
      </div>
      {isLoading && <p>Memuat testimonial...</p>}
      {isError && (
        <div role="alert" className="mb-4">
          <p className="text-red-600">Error: {error.message}</p>
          <button className="mt-2 rounded-md bg-gray-900 px-3 py-1.5 text-sm text-white" onClick={() => refetch()}>
            Coba lagi
          </button>
        </div>
      )}
      <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
        {data?.map((t) => (
          <TestimonialCard key={t.id} name={t.name} email={t.email} body={t.body} />
        ))}
      </div>
    </section>
  );
}
