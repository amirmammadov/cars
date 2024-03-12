import "../../sass/pages/_companyDetail.scss";

import { useCompany, useCompanies } from "../../services/queries";

import Breadcrumbs from "@mui/material/Breadcrumbs";
import Typography from "@mui/material/Typography";
import Link from "@mui/material/Link";
import NavigateNextIcon from "@mui/icons-material/NavigateNext";

import { useParams } from "react-router-dom";

import CompanyItem from "../../components/CompanyItem/CompanyItem";

import OwnerInfo from "./components/OwnerInfo";
import Countries from "./components/Countries";
import Dealer from "./components/Dealer";
import AddReview from "./components/AddReview";

import GppMaybeIcon from "@mui/icons-material/GppMaybe";
import BalanceIcon from "@mui/icons-material/Balance";
import UploadIcon from "@mui/icons-material/Upload";
import FavoriteIcon from "@mui/icons-material/Favorite";
import Reviews from "../../components/Reviews/Reviews";
import SectionHeader from "../../components/SectionHeader/SectionHeader";

const CompanyDetail = () => {
  const { id } = useParams();

  const similarCompanies = useCompanies(1);

  const { data: company, isPending, isError, error } = useCompany(id);

  if (isPending) {
    return <div className="company__detail">Loading...</div>;
  }

  if (isError) {
    return <div className="company__detail">{error}</div>;
  }

  const breadcrumbs = [
    <Link underline="hover" key="1" color="inherit" href="/">
      Ana Səhifə
    </Link>,
    <Link underline="hover" key="2" color="inherit" href="/company">
      Şirkətlər
    </Link>,
    <Typography key="3" color="text.primary">
      {company.companyName}
    </Typography>,
  ];

  return (
    <main className="company__detail">
      <Breadcrumbs
        separator={<NavigateNextIcon fontSize="small" />}
        aria-label="breadcrumb"
      >
        {breadcrumbs}
      </Breadcrumbs>
      <div className="company__detail__topBar">
        <div className="company__detail__topBar__car">
          {company.companyName}, Bakı
        </div>
        <div className="company__detail__topBar__links">
          <button className="company__detail__topBar__links__btn">
            <FavoriteIcon
              iconname="HeartFill"
              className="company__detail__topBar__links__btn__icon"
            />
          </button>
          <button className="company__detail__topBar__links__btn">
            <BalanceIcon className="company__detail__topBar__links__btn__icon" />
          </button>
          <button className="company__detail__topBar__links__btn">
            <GppMaybeIcon className="company__detail__topBar__links__btn__icon" />
          </button>
          <button className="company__detail__topBar__links__btn">
            <UploadIcon className="company__detail__topBar__links__btn__icon" />
          </button>
        </div>
      </div>
      <div className="company__detail__info">
        <div className="company__detail__info__img">
          <img
            src={`/companies/${company.img}`}
            alt="company"
            className="company__detail__info__img__item"
          />
        </div>
        <OwnerInfo />
        <Countries />
        <Dealer />
        <AddReview />
        <Reviews />
      </div>
      <div className="company__detail__divider" />
      <div className="company__detail__similar">
        <SectionHeader title="Bənzər Şirkətlər" />
        <div className="company__detail__similar__content">
          {similarCompanies.isPending ? (
            <div>Loading...</div>
          ) : similarCompanies.isError ? (
            <div>{similarCompanies.error}</div>
          ) : (
            similarCompanies.data.currentItems.map((company) => (
              <CompanyItem key={company.id} {...company} />
            ))
          )}
        </div>
      </div>
    </main>
  );
};

export default CompanyDetail;
