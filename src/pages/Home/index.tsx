import { GiftCard } from "@/components/GiftCard";
import { presentes } from "@/data/presentes";

export default function Home() {
  return (
    <div className="min-h-screen bg-[#FAF9F4] py-6 px-3">
      <h1 className="text-4xl font-serif text-[#6B7A5E] text-center mb-7">
        Lista de Presentes
      </h1>
      <div className="max-w-6xl mx-auto grid grid-cols-2 sm:grid-cols-2 lg:grid-cols-3 gap-3">
        {Object.values(presentes).map((presente, index) => (
          <GiftCard
            key={index}
            id={index + 1}
            image={presente.image}
            title={presente.title}
            price={presente.price}
          />
        ))}
      </div>
    </div>
  );
}
