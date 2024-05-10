import { useState } from "react";

import "../sass/layout/_homeNewCars.scss";

import SectionHeader from "../components/SectionHeader/SectionHeader";
import ProductCart from "../components/productCard/ProductCart";

import { Pagination } from "@mui/material";

import { ITEMS_PER_PAGE_NEW } from "../constants";

import { useNewCars } from "../services/queries";

const HomeNewCars = () => {
  const [page, setPage] = useState(1);

  const { data, isPending, isPlaceholderData, isError, error } =
    useNewCars(page);

  const PAGINATION_NUMBER =
    Math.ceil(data?.totalItems / ITEMS_PER_PAGE_NEW) || undefined;

  function handlePagination(_, value) {
    setPage(value);
  }

  return (
    <section className="home__newcars__section">
      <SectionHeader title="Yeni elanlar" filterTitle="Tarix" hasText />
      <div className="home__newcars__section__content">
        {isPending ? (
          <div>Loading...</div>
        ) : isError ? (
          <div>{error}</div>
        ) : (
          data.currentItems.map((product) => {
            return <ProductCart key={product.id} product={product} />;
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
  );
};

export default HomeNewCars;
