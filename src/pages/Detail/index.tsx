import Pix from "@/components/Pix";
import { Button } from "@/components/ui/button";
import { presentes } from "@/data/presentes";
import { useNavigate, useParams } from "react-router";

export default function Detail() {
  const { id } = useParams();
  const navigate = useNavigate();

  const dados = id ? presentes[Number(id) as keyof typeof presentes] : null;

  if (!dados) {
    return (
      <div className="min-h-screen bg-linear-to-b from-yellow-50 to-white py-10 px-6">
        <div className="max-w-4xl mx-auto text-center">
          <h1>Presente não encontrado</h1>
          <Button
            variant="outline"
            className="rounded-xl"
            onClick={() => navigate(-1)}
          >
            Voltar
          </Button>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-linear-to-b from-yellow-50 to-white py-10 px-6">
      <div className="max-w-4xl mx-auto text-center">
        <Pix
          title={dados.title}
          price={Number(dados.price.replace("R$ ", "").replace(",", "."))}
        />

        <Button
          variant="outline"
          className="rounded-xl"
          onClick={() => navigate(-1)}
        >
          Voltar
        </Button>
      </div>
    </div>
  );
}
