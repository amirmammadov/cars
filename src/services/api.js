import axios from "axios";

import { ITEMS_PER_PAGE } from "../constants";

const BASE_URL = "http://localhost:3000";
const axiosInstance = axios.create({ baseURL: BASE_URL });

// export const getStatCars = async (page = 1) => {
//   return (await axiosInstance.get(`statcars?_page=${page}&_limit=3`)).data;
// };

export const getStatCars = async (page = 1) => {
  const response = (await axiosInstance.get(`statcars`)).data;

  const currentItems = response.slice(
    (page - 1) * ITEMS_PER_PAGE,
    (page - 1) * ITEMS_PER_PAGE + ITEMS_PER_PAGE
  );

  const totalItems = response.length;

  return { currentItems, totalItems };
};
