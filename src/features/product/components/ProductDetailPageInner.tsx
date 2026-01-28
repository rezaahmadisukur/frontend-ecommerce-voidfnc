"use client";

import { ShoppingCart } from "lucide-react";
import Image from "next/image";
import { Badge } from "~/components/ui/badge";
import { Button } from "~/components/ui/button";
import { Separator } from "~/components/ui/separator";
import { toRupiah } from "~/lib/format";
import useSelfHealingSlug from "../hooks/useSelfHealingSlug";

type ProductDetailPageInnerProps = {
  id: string;
  name: string;
  price: number;
  imageUrl: string;
  description?: string;
  category?: string;
};

const ProductDetailPageInner = (props: ProductDetailPageInnerProps) => {
  useSelfHealingSlug({ id: props.id, name: props.name });

  return (
    <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 lg:items-center">
      {/* Product Image */}
      <div className="aspect-4/3 overflow-hidden rounded-xl">
        <div className="relative w-full h-full">
          <Image
            src={props.imageUrl}
            alt={props.name}
            unoptimized
            fill
            className="object-cover transition-all duration-300 hover:scale-105"
          />
        </div>
      </div>

      {/* Product Details */}
      <div className="flex flex-col gap-4">
        <div className="space-y-2">
          <Badge variant="outline">{props.category}</Badge>
          <h1 className="text-2xl font-bold lg:text-3xl">{props.name}</h1>
          <div className="flex items-center gap-2 text-sm">
            <p className="font-semibold">⭐ 4.8</p>
            <p className="text-muted-foreground">256 reviews</p>
          </div>
        </div>

        <Separator />

        <div className="space-y-2">
          <h3 className="text-3xl font-bold text-primary">
            {toRupiah(props.price)}
          </h3>
          <p className="text-sm text-muted-foreground">
            free shipping on orders over $50
          </p>
        </div>

        <Separator />

        <div className="space-y-2">
          <h5 className="font-semibold">Description</h5>
          <p className="text-sm text-muted-foreground text-justify">
            {props.description}
          </p>
        </div>

        <Button variant="default" size="lg" className="w-full">
          <ShoppingCart className="size-4" />
          Add to Cart
        </Button>
      </div>
    </div>
  );
};

export default ProductDetailPageInner;
