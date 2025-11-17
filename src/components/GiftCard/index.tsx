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
    <Card className="w-full max-w-xs rounded-3xl shadow-lg border border-[#D7D9CC] bg-white hover:shadow-xl transition-shadow">
      <CardContent className="p-2 flex flex-col justify-between h-full gap-2">
        {/* Conteúdo acima do botão */}
        <div>
          <img
            src={image}
            alt={title}
            className="w-full h-40 object-cover rounded-2xl shadow-sm mb-4"
          />
          <p className="text-center text-[#6B7A5E] text-lg font-serif font-semibold">
            {title}
          </p>
        </div>
        <div>
          <p className="text-center text-[#556244] text-xl font-serif font-bold mb-2">
            {price}
          </p>
          {/* Botão fixado no rodapé do card */}
          <Link to={`/presentear/${id}`} className="w-full">
            <Button className="w-full rounded-xl bg-[#6B7A5E] text-white hover:bg-[#556244] flex items-center justify-center gap-2 px-6 py-3 transition-colors">
              <Gift size={20} />
              Presentear
            </Button>
          </Link>
        </div>
      </CardContent>
    </Card>
  );
}
