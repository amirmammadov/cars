import { useQuery, keepPreviousData } from "@tanstack/react-query";

import { getStatCars } from "./api";

export function useProjects(page) {
  return useQuery({
    queryKey: ["statcars", { page }],
    queryFn: () => getStatCars(page),
    placeholderData: keepPreviousData,
  });
}
