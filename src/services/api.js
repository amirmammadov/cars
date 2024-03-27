import axios from "axios";

import { ITEMS_PER_PAGE_COMPANY, ITEMS_PER_PAGE_FEATURED } from "../constants";

const BASE_URL = "https://mock-api-moto4.vercel.app";

const axiosInstance = axios.create({ baseURL: BASE_URL });

export const getFeaturedCars = async (page = 1) => {
  const response = (await axiosInstance.get(`statcars`)).data;

  const currentItems = response.slice(
    (page - 1) * ITEMS_PER_PAGE_FEATURED,
    (page - 1) * ITEMS_PER_PAGE_FEATURED + ITEMS_PER_PAGE_FEATURED
  );

  const totalItems = response.length;

  return { currentItems, totalItems };
};

export const getCompanies = async (page = 1) => {
  const response = (await axiosInstance.get(`companies`)).data;

  const currentItems = response.slice(
    (page - 1) * ITEMS_PER_PAGE_COMPANY,
    (page - 1) * ITEMS_PER_PAGE_COMPANY + ITEMS_PER_PAGE_COMPANY
  );

  const totalItems = response.length;

  return { currentItems, totalItems };
};

export const getCompany = async (id) => {
  return (await axiosInstance.get(`companies/${id}`)).data;
};
