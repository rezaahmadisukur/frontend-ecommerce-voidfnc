"use client";

import {
  isServer,
  QueryClient,
  QueryClientProvider
} from "@tanstack/react-query";
import { toast } from "sonner";
import { queryConfig } from "~/lib/react-query";

function makeQueryClient() {
  return new QueryClient({
    defaultOptions: {
      ...queryConfig,
      mutations: {
        onError: () => {
          toast.error("An Error", {
            description: "Contact team support if problem not solved"
          });
        }
      }
    }
  });
}

let browserQueryClient: QueryClient | undefined = undefined;

function getQueryClient() {
  if (isServer) {
    return makeQueryClient();
  } else {
    if (!browserQueryClient) browserQueryClient = makeQueryClient();
    return browserQueryClient;
  }
}

export default function TanstackQueryProvider({
  children
}: {
  children: React.ReactNode;
}) {
  const queryClient = getQueryClient();

  return (
    <QueryClientProvider client={queryClient}>{children}</QueryClientProvider>
  );
}
