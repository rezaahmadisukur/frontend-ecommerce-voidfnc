import { queryOptions, useQuery } from "@tanstack/react-query";
import { axiosInstance } from "~/lib/axios";
import { QueryConfig } from "~/lib/react-query";

export enum ProductSortBy {
  RECOMMENDED = "recommended",
  PRICE_ASC = "price-asc",
  PRICE_DESC = "price-desc"
}

type SearchProductsInput = {
  productName?: string;
  categoryIds?: string[];
  sortBy?: ProductSortBy;
  limit?: number;
};

type SearcnProductsResponse = {
  id: string;
  name: string;
  price: number;
  imageUrl: string;
  description: string;
  category?: {
    name: string;
  } | null;
}[];

export const searchProducts = async (input?: SearchProductsInput) => {
  const response = await axiosInstance.post<SearcnProductsResponse>(
    "/products/search",
    input
  );

  return response.data;
};

export const searchProductsQueryKey = (input?: SearchProductsInput) => [
  "search-products",
  input
];

export const searchProductsQueryOptions = (input?: SearchProductsInput) => {
  return queryOptions({
    queryKey: searchProductsQueryKey(input),
    queryFn: () => searchProducts(input)
  });
};

type UseGetProductsParams = {
  queryConfig?: QueryConfig<typeof searchProducts>;
  input?: SearchProductsInput;
};

export const useSearchProducts = ({
  queryConfig,
  input
}: UseGetProductsParams = {}) => {
  return useQuery({
    ...searchProductsQueryOptions(input),
    ...queryConfig
  });
};
