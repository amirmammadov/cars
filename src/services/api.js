import axios from "axios";

import { ITEMS_PER_PAGE } from "../constants";

const BASE_URL = "https://mock-api-moto4.vercel.app";

const axiosInstance = axios.create({ baseURL: BASE_URL });

export const getStatCars = async (page = 1) => {
  const response = (await axiosInstance.get(`statcars`)).data;

  const currentItems = response.slice(
    (page - 1) * ITEMS_PER_PAGE,
    (page - 1) * ITEMS_PER_PAGE + ITEMS_PER_PAGE
  );

  const totalItems = response.length;

  return { currentItems, totalItems };
};

export const getCompanies = async (page = 1) => {
  const response = (await axiosInstance.get(`companies`)).data;

  const currentItems = response.slice(
    (page - 1) * ITEMS_PER_PAGE,
    (page - 1) * ITEMS_PER_PAGE + ITEMS_PER_PAGE
  );

  const totalItems = response.length;

  return { currentItems, totalItems };
};

export const getCompany = async (id) => {
  return (await axiosInstance.get(`companies/${id}`)).data;
};
