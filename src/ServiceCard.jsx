import { Card, CardHeader, CardTitle, CardDescription, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { formatRupiah } from "@/lib/format";
import { BadgeCheck } from "lucide-react";
import { cn } from "@/lib/utils";

export default function ServiceCard({ icon, title, desc, category, price, popular, isSelected, onSelect }) {
  return (
    <Card
      className={cn(
        "w-full text-center transition hover:-translate-y-1 hover:border-blue-400 hover:shadow-lg",
        isSelected && "border-2 border-blue-600 bg-blue-50",
      )}
    >
      <CardHeader>
        <div className="text-3xl">{icon}</div>
        <CardTitle className="flex items-center justify-center gap-2">
          <BadgeCheck size={20} className="text-blue-600" /> {title}
        </CardTitle>
        <CardDescription>{desc}</CardDescription>
      </CardHeader>
      <CardContent className="flex flex-col items-center gap-3">
        <div className="flex gap-2">
          <Badge variant="secondary">{category}</Badge>
          {popular && <Badge variant="warning">Populer</Badge>}
        </div>
        <p className="font-semibold">{formatRupiah(price)}</p>
        <Button variant={isSelected ? "default" : "outline"} onClick={onSelect}>
          {isSelected ? "Dipilih ✓" : "Pilih"}
        </Button>
      </CardContent>
    </Card>
  );
}
