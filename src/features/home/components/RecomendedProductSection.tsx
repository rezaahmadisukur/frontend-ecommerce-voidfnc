import { ArrowRight } from "lucide-react";
import Link from "next/link";
import { ProductCard } from "~/components/shared";
import { Button } from "~/components/ui/button";

const mockProducts = [
  {
    id: "1",
    name: "Apple Watch",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatum nisi dolore vitae! Eveniet, quidem unde. Accusamus assumenda unde corrupti repellendus?",
    price: 2000000,
    category: "AUDIO"
  },
  {
    id: "2",
    name: "Apple Watch 2",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatum nisi dolore vitae! Eveniet, quidem unde. Accusamus assumenda unde corrupti repellendus?",
    price: 1900000,
    category: "AUDIO"
  },
  {
    id: "3",
    name: "Apple Watch 3",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatum nisi dolore vitae! Eveniet, quidem unde. Accusamus assumenda unde corrupti repellendus?",
    price: 2100000,
    category: "AUDIO"
  },
  {
    id: "4",
    name: "Apple Watch 4",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatum nisi dolore vitae! Eveniet, quidem unde. Accusamus assumenda unde corrupti repellendus?",
    price: 3800000,
    category: "AUDIO"
  },
  {
    id: "5",
    name: "Apple Watch 5",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatum nisi dolore vitae! Eveniet, quidem unde. Accusamus assumenda unde corrupti repellendus?",
    price: 5000000,
    category: "AUDIO"
  }
];

const RecomendedProductSection = () => {
  return (
    <section className="w-full max-w-6xl 6xl:container mx-auto space-y-8 px-4">
      <div className="flex justify-between items-end pe-4">
        <div className="space-y-1">
          <h1 className="font-bold text-2xl">Recomended Products</h1>
          <p className="text-muted-foreground text-sm">
            Handpicked products just for you
          </p>
        </div>

        <Link href="/products">
          <Button variant="link" size="sm" className="flex items-center">
            View all
            <ArrowRight />
          </Button>
        </Link>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {mockProducts.map((product) => (
          <ProductCard key={product.id} {...product} />
        ))}
      </div>
    </section>
  );
};

export default RecomendedProductSection;
