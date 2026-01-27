import { queryOptions, useQuery } from "@tanstack/react-query";
import { axiosInstance } from "~/lib/axios";
import { QueryConfig } from "~/lib/react-query";

type GetProductByIdInput = {
  id: string;
};

type GetProductByIdResponse = {
  id: string;
  name: string;
  price: number;
  imageUrl: string | null;
  description: string | null;
  category: {
    name: string;
  } | null;
} | null;

export const getProductById = async (input: GetProductByIdInput) => {
  const response = await axiosInstance.get<GetProductByIdResponse>(
    `/products/${input.id}`
  );

  return response.data;
};

export const getProductByIdQueryKey = (id: string) => ["product", id];

export const getProductQueryOptions = (input: GetProductByIdInput) => {
  return queryOptions({
    queryKey: getProductByIdQueryKey(input.id),
    queryFn: () => getProductById(input)
  });
};

type UseGetProductById = {
  queryConfig?: QueryConfig<typeof getProductById>;
  input: GetProductByIdInput;
};

export const useGetProduct = ({ queryConfig, input }: UseGetProductById) => {
  return useQuery({
    ...getProductQueryOptions(input),
    ...queryConfig
  });
};
