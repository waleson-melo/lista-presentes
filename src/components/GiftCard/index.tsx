import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Gift } from "lucide-react";
import { Link } from "react-router";

interface GiftCardProps {
  id: number;
  image: string;
  title: string;
  price: string;
}

export function GiftCard({ id, image, title, price }: GiftCardProps) {
  return (
    <Card className="w-full max-w-xs rounded-3xl shadow-md border border-gray-200">
      <CardContent className="p-2 flex flex-col items-center gap-3">
        {/* Imagem */}
        <img
          src={image}
          alt={title}
          className="w-full h-32 object-cover rounded-2xl"
        />

        {/* Título */}
        <p className="text-center text-gray-800 text-sm font-medium">{title}</p>

        {/* Preço */}
        <p className="text-lg font-bold text-gray-900">{price}</p>

        {/* Botão editar */}
        <Link to={`/presentear/${id}`}>
          <Button>
            <Gift size={16} />
            Presentear
          </Button>
        </Link>
      </CardContent>
    </Card>
  );
}
