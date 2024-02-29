import { useQuery, keepPreviousData } from "@tanstack/react-query";

import { getStatCars, getCompanies } from "./api";

export function useProjects(page) {
  return useQuery({
    queryKey: ["statcars", { page }],
    queryFn: () => getStatCars(page),
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
