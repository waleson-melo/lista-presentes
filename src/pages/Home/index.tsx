import { GiftCard } from "@/components/GiftCard";
import { presentes } from "@/data/presentes";

export default function Home() {
  return (
    <div className="p-4 grid grid-cols-2 sm:grid-cols-2 lg:grid-cols-3 gap-6">
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
  );
}
