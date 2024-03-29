import {
  useQuery,
  keepPreviousData,
  useQueryClient,
} from "@tanstack/react-query";

import { getFeaturedCars, getCompanies, getCompany } from "./api";

export function useFeaturedCars(page) {
  return useQuery({
    queryKey: ["statcars", { page }],
    queryFn: () => getFeaturedCars(page),
    placeholderData: keepPreviousData,
  });
}

export function useCompanies(page) {
  return useQuery({
    queryKey: ["companies", { page }],
    queryFn: () => getCompanies(page),
    placeholderData: keepPreviousData,
  });
}

export function useCompany(id) {
  const queryClient = useQueryClient();

  return useQuery({
    queryKey: ["company", { id }],
    queryFn: () => getCompany(id),
    enabled: !!id,
    placeholderData: () => {
      const cachedCompanies = queryClient.getQueryData(["companies"]);

      if (cachedCompanies) {
        return cachedCompanies.find((item) => item.id === id);
      }
    },
  });
}
