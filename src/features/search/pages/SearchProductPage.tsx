"use client";

import { cn } from "~/lib/utils";
import SearchProductFilterPanel from "../components/SearchProductFilterPanel";
import SearchProductList from "../components/SearchProductList";
import { useSearchProducts } from "../api/SearchProducts";
import useSearchProductQueryParams from "../hooks/useSearchProductQueryParams";

const SearchProductPage = () => {
  const { searchCategory, searchSortBy } = useSearchProductQueryParams();

  const { data: products, isLoading: productsIsLoading } = useSearchProducts({
    input: {
      categoryIds: searchCategory,
      sortBy: searchSortBy,
      limit: 10
    }
  });

  const mappedProducts = products?.map((product) => ({
    id: product.id,
    name: product.name,
    price: product.price,
    imageUrl: product.imageUrl,
    description: product.description,
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
