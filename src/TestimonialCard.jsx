import { Card, CardHeader, CardTitle, CardDescription, CardContent } from "@/components/ui/card";

export default function TestimonialCard({ name, email, body }) {
  return (
    <Card>
      <CardHeader>
        <CardTitle className="capitalize">{name}</CardTitle>
        <CardDescription>{email}</CardDescription>
      </CardHeader>
      <CardContent>
        <p className="text-sm">{body}</p>
      </CardContent>
    </Card>
  );
}
