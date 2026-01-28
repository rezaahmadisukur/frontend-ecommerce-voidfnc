"use client";

import { Activity } from "react";
import ProductCard, {
  ProductCardSkeleton
} from "~/components/shared/ProductCard";
import { cn } from "~/lib/utils";

type TProduct = {
  id: string;
  name: string;
  price: number;
  imageUrl: string;
  description?: string;
  category: string | null;
};

type SearchProductListProps = {
  products: TProduct[];
  isLoading: boolean;
};

const SearchProductList = (props: SearchProductListProps) => {
  return (
    <div
      className={cn(
        "grid grid-cols-1 gap-4 w-full col-span-4",
        "md:grid-cols-2",
        "lg:grid-cols-3 lg:col-span-3"
      )}
    >
      <Activity mode={props.products ? "visible" : "hidden"}>
        {props.products.map((product) => (
          <ProductCard
            key={product.id}
            id={product.id}
            name={product.name}
            price={product.price}
            imageUrl={product.imageUrl}
            description={product.description ?? undefined}
            category={product.category ?? undefined}
          />
        ))}
      </Activity>

      <Activity mode={props.isLoading ? "visible" : "hidden"}>
        <ProductCardSkeleton />
        <ProductCardSkeleton />
        <ProductCardSkeleton />
      </Activity>
    </div>
  );
};

export default SearchProductList;
