import { Card, CardHeader, CardTitle, CardDescription, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { formatRupiah } from "@/lib/format";
import { cn } from "@/lib/utils";

export default function ServiceCard({ icon, title, desc, category, price, popular, isSelected, onSelect }) {
  return (
    <Card
      className={cn(
        "w-full text-center transition hover:-translate-y-1 hover:shadow-lg",
        isSelected && "border-2 border-blue-600 bg-blue-50",
      )}
    >
      <CardHeader>
        <div className="text-3xl">{icon}</div>
        <CardTitle>{title}</CardTitle>
        <CardDescription>{desc}</CardDescription>
      </CardHeader>
      <CardContent className="flex flex-col items-center gap-3">
        <div className="flex gap-2">
          <Badge variant="secondary">{category}</Badge>
          {popular && <Badge className="bg-amber-100 text-amber-700">Populer</Badge>}
        </div>
        <p className="font-semibold">{formatRupiah(price)}</p>
        <button
          className="rounded-md bg-gray-900 px-3 py-1.5 text-sm text-white hover:bg-gray-700"
          onClick={onSelect}
        >
          {isSelected ? "Dipilih ✓" : "Pilih"}
        </button>
      </CardContent>
    </Card>
  );
}
