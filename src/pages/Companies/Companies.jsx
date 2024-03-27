import "../../sass/pages/_companies.scss";

import { useState } from "react";

import CompaniesFilter from "../../scenes/CompaniesFilter";
import SectionHeader from "../../components/SectionHeader/SectionHeader";
import CompanyItem from "../../components/CompanyItem/CompanyItem";

import { Pagination } from "@mui/material";

import { useCompanies } from "../../services/queries";

import { ITEMS_PER_PAGE_COMPANY } from "../../constants";

const Companies = () => {
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
      <CompaniesFilter />
      <section className="companies__section">
        <SectionHeader title="Şirkətlər" filterTitle="Rating" />
        <div className="companies__section__content">
          {isPending ? (
            <div>Loading...</div>
          ) : isError ? (
            <div>{error}</div>
          ) : (
            data?.currentItems.map((company) => (
              <CompanyItem key={company.id} {...company} />
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

export default Companies;
