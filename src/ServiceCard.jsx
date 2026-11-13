import { Card, CardHeader, CardTitle, CardDescription, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

export default function ServiceCard({ icon, title, desc }) {
  return (
    <Card className="w-56 text-center transition hover:-translate-y-1 hover:shadow-lg">
      <CardHeader>
        <div className="text-3xl">{icon}</div>
        <CardTitle>{title}</CardTitle>
        <CardDescription>{desc}</CardDescription>
      </CardHeader>
      <CardContent className="flex flex-col items-center gap-3">
        <Badge variant="secondary">Layanan</Badge>
        <button
          className="rounded-md bg-gray-900 px-3 py-1.5 text-sm text-white hover:bg-gray-700"
          onClick={() => alert(title)}
        >
          Lihat info
        </button>
      </CardContent>
    </Card>
  );
}
