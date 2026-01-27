"use client";

import { ArrowRight } from "lucide-react";
import Link from "next/link";
import { ProductCard } from "~/components/shared";
import { Button } from "~/components/ui/button";
import { ProductSortBy, useGetProducts } from "../api/getProducts";
import { ProductCardSkeleton } from "~/components/shared/ProductCard";
import { Activity } from "react";

const RecomendedProductSection = () => {
  const { data: products, isLoading: productsIsLoading } = useGetProducts({
    input: {
      sort: ProductSortBy.RECOMMENDED,
      limit: 6
    }
  });

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
        <Activity mode={products ? "visible" : "hidden"}>
          {products?.map((product) => (
            <ProductCard
              key={product.id}
              id={product.id}
              name={product.name}
              category={product.category?.name}
              description={product.description}
              price={product.price}
              imageUrl={product.imageUrl}
            />
          ))}
        </Activity>

        <Activity mode={productsIsLoading && !products ? "visible" : "hidden"}>
          <ProductCardSkeleton />
          <ProductCardSkeleton />
          <ProductCardSkeleton />
        </Activity>
      </div>
    </section>
  );
};

export default RecomendedProductSection;
