import {
  useQuery,
  keepPreviousData,
  useQueryClient,
} from "@tanstack/react-query";

import {
  getFeaturedCars,
  getCompanies,
  getCompany,
  getNewCars,
  getNewCar,
  getSimilarCars,
} from "./api";

export function useFeaturedCars(page) {
  return useQuery({
    queryKey: ["statcars", { page }],
    queryFn: () => getFeaturedCars(page),
    placeholderData: keepPreviousData,
  });
}

export function useNewCars(page) {
  return useQuery({
    queryKey: ["newCars", { page }],
    queryFn: () => getNewCars(page),
    placeholderData: keepPreviousData,
  });
}

export function useSimilarCars() {
  return useQuery({
    queryKey: ["newCars"],
    queryFn: () => getSimilarCars(),
    placeholderData: keepPreviousData,
  });
}

export function useNewCar(id) {
  const queryClient = useQueryClient();

  return useQuery({
    queryKey: ["newCars", { id }],
    queryFn: () => getNewCar(id),
    enabled: !!id,
    placeholderData: () => {
      const cachedNewCars = queryClient.getQueryData(["newCars"]);

      if (cachedNewCars) {
        return cachedNewCars.find((item) => item.id === id);
      }
    },
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
