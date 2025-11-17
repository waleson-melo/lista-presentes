// Detail.tsx
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
      <div className="min-h-screen bg-[#FAF9F4] py-10 px-6 flex items-center justify-center">
        <div className="max-w-2xl w-full bg-white rounded-xl shadow-md p-8 text-center">
          <h1 className="text-3xl font-serif text-[#6B7A5E] mb-6">Presente não encontrado</h1>
          <Button variant="outline" className="rounded-xl" onClick={() => navigate(-1)}>
            Voltar
          </Button>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-[#FAF9F4] py-10 px-6 flex items-center justify-center">
      <div className="max-w-2xl w-full bg-white rounded-xl shadow-md p-8 text-center">
        <Pix
          title={dados.title}
          price={Number(dados.price.replace("R$ ", "").replace(",", "."))}
        />
        <Button
          variant="outline"
          className="rounded-xl mt-4"
          onClick={() => navigate(-1)}
        >
          Voltar
        </Button>
      </div>
    </div>
  );
}