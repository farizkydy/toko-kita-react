import { Card, CardHeader, CardTitle, CardDescription, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";

export default function ServiceCard({ icon, title, desc }) {
  return (
    <Card className="w-full text-center transition hover:-translate-y-1 hover:shadow-lg">
      <CardHeader>
        <div className="text-3xl">{icon}</div>
        <CardTitle>{title}</CardTitle>
        <CardDescription>{desc}</CardDescription>
      </CardHeader>
      <CardContent className="flex flex-col items-center gap-3">
        <Badge variant="success">Tersedia</Badge>
        <Button onClick={() => alert(title)}>Lihat info</Button>
      </CardContent>
    </Card>
  );
}
