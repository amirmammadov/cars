import "../../sass/pages/_salons.scss";

import { useState } from "react";

import SalonsFilter from "../../scenes/SalonsFilter";
import SectionHeader from "../../components/SectionHeader/SectionHeader";
import SalonItem from "../../components/SalonItem/SalonItem";

import { Pagination } from "@mui/material";

import { useCompanies } from "../../services/queries";

import { ITEMS_PER_PAGE_COMPANY } from "../../constants";

const Salons = () => {
  const [page, setPage] = useState(1);

  const { data, isPending, isPlaceholderData, isError, error } =
    useCompanies(page);

  const PAGINATION_NUMBER =
    Math.ceil(data?.totalItems / ITEMS_PER_PAGE_COMPANY) || undefined;

  function handlePagination(_, value) {
    setPage(value);
  }

  return (
    <main className="companies">
      <SalonsFilter />
      <section className="companies__section">
        <SectionHeader title="Şirkətlər" filterTitle="Rating" />
        <div className="companies__section__content">
          {isPending ? (
            <div>Loading...</div>
          ) : isError ? (
            <div>{error}</div>
          ) : (
            data?.currentItems.map((company) => (
              <SalonItem key={company.id} {...company} />
            ))
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
    </main>
  );
};

export default Salons;
