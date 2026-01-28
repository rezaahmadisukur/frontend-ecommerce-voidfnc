"use client";

import { cn } from "~/lib/utils";
import SearchProductFilterPanel from "../components/SearchProductFilterPanel";
import SearchProductList from "../components/SearchProductList";
import { useGetProducts } from "~/features/home/api/getProducts";

const SearchProductPage = () => {
  const { data: products, isLoading: productsIsLoading } = useGetProducts();

  const mappedProducts = products?.map((product) => ({
    id: product.id,
    name: product.name,
    price: product.price,
    imageUrl: product.imageUrl,
    descrption: product.description,
    category: product.category?.name ?? null
  }));

  return (
    <section className="max-w-6xl 6xl:container mx-auto py-8 min-h-[80vh] px-4 space-y-6">
      <h1 className={cn("text-2xl font-bold", "lg:text-4xl")}>
        Explore Our Products
      </h1>

      <div className="grid grid-cols-4 gap-6 space-y-4">
        <SearchProductFilterPanel />

        <SearchProductList
          products={mappedProducts ?? []}
          isLoading={productsIsLoading}
        />
      </div>
    </section>
  );
};

export default SearchProductPage;
