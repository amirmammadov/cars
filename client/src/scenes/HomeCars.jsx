import { useState } from "react";

import "../sass/layout/_homeCars.scss";

import HomeNewCars from "./HomeNewCars";

import { useFeaturedCars } from "../services/queries";

import { Pagination } from "@mui/material";

import Car from "../components/Car/Car";
import SectionHeader from "../components/SectionHeader/SectionHeader";

import { ITEMS_PER_PAGE_FEATURED } from "../constants";

const HomeCars = () => {
  const [page, setPage] = useState(1);

  const { data, isPending, isPlaceholderData, isError, error } =
    useFeaturedCars(page);

  const PAGINATION_NUMBER =
    Math.ceil(data?.totalItems / ITEMS_PER_PAGE_FEATURED) || undefined;

  function handlePagination(_, value) {
    setPage(value);
  }

  return (
    <main className="home__cars">
      <section className="home__cars__section">
        <SectionHeader
          title="Önə çəkilmiş elanlar"
          filterTitle="Rating"
          hasText
        />
        <div className="home__cars__section__content">
          {isPending ? (
            <div>Loading...</div>
          ) : isError ? (
            <div>{error}</div>
          ) : (
            data.currentItems.map((product) => {
              if (product.leasing) {
                return <Car key={product.id} product={product} />;
              } else {
                return undefined;
              }
            })
          )}
        </div>
        <Pagination
          count={PAGINATION_NUMBER}
          shape="rounded"
          className="pagination"
          onChange={handlePagination}
          disabled={isPlaceholderData}
        />
      </section>
      <HomeNewCars />
    </main>
  );
};

export default HomeCars;
