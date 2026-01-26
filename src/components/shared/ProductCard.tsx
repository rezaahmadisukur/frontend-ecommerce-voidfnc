"use client";

import { toRupiah } from "~/lib/format";
import { Button } from "../ui/button";
import Image from "next/image";
import Link from "next/link";

const placeholderImageUrl =
  "https://images.unsplash.com/photo-1596755094514-f87e34085b2c?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8c2hpcnR8ZW58MHx8MHx8fDA%3D";

type TProductCard = {
  name: string;
  category?: string;
  description: string;
  price: number;
  imageUrl?: string;
  id: string;
};

const ProductCard = (props: TProductCard) => {
  const handleAddToCart = (id: string) => {
    alert(`Add product id:${id} success`);
  };

  return (
    <div className="flex flex-col gap-2 border rounded-xl overflow-hidden">
      <Link href={`/product/${props.id}`}>
        <div className="relative w-full h-full aspect-4/3 overflow-hidden">
          <Image
            src={props.imageUrl ?? placeholderImageUrl}
            alt="Product Image"
            unoptimized
            fill
            className="object-cover transition-all duration-300 hover:scale-110"
          />
        </div>
      </Link>

      <div className="space-y-4 p-4">
        {/* Title and Category */}
        <div className="space-y-1">
          <p className="text-sm text-muted-foreground">
            {props.category ?? "Uncategorized"}
          </p>
          <Link href={`/product/${props.id}`} className="hover:underline">
            <h3 className="text-lg font-bold">{props.name}</h3>
          </Link>
        </div>
        {/* Short Description */}
        <p className="text-sm text-muted-foreground line-clamp-2">
          {props.description}
        </p>

        {/* Price and CTA */}
        <div className="flex items-center justify-between">
          <p className="text-lg font-bold text-primary">
            {toRupiah(props.price)}
          </p>

          <Button variant="default" onClick={() => handleAddToCart(props.id)}>
            Add to Cart
          </Button>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;
