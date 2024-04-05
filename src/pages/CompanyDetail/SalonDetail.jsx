import "../../sass/pages/_salonDetail.scss";

import { useState, useEffect } from "react";

import { useCompany, useCompanies } from "../../services/queries";

import Breadcrumbs from "@mui/material/Breadcrumbs";
import Typography from "@mui/material/Typography";
import Link from "@mui/material/Link";
import NavigateNextIcon from "@mui/icons-material/NavigateNext";

import { useParams } from "react-router-dom";

import SalonItem from "../../components/SalonItem/SalonItem";

import OwnerInfo from "./components/OwnerInfo";
import Countries from "./components/Countries";
import Dealer from "./components/Dealer";

import MoreVertIcon from "@mui/icons-material/MoreVert";
import GppMaybeIcon from "@mui/icons-material/GppMaybe";
import BalanceIcon from "@mui/icons-material/Balance";
import UploadIcon from "@mui/icons-material/Upload";
import FavoriteIcon from "@mui/icons-material/Favorite";
import SectionHeader from "../../components/SectionHeader/SectionHeader";

const SalonDetail = () => {
  const [linksActive, setLinksActive] = useState(false);
  const [innerWidth, setInnerWidth] = useState(0);

  useEffect(() => {
    const handleWindowResize = () => {
      setInnerWidth(window.innerWidth);
    };

    if (innerWidth > 592) {
      setLinksActive(false);
    }

    window.addEventListener("resize", handleWindowResize);

    return () => {
      window.removeEventListener("resize", handleWindowResize);
    };
  }, [innerWidth]);

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

  const handleActiveLinks = () => {
    setLinksActive(!linksActive);
  };

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
        <div
          className={`company__detail__topBar__links ${
            linksActive && "activeLinks"
          }`}
        >
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
        <button
          onClick={handleActiveLinks}
          className="company__detail__topBar__more"
        >
          <MoreVertIcon />
        </button>
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
      </div>
      <div className="company__detail__divider" />
      <div className="company__detail__similar">
        <SectionHeader title="Bənzər Salonlar" />
        <div className="company__detail__similar__content">
          {similarCompanies.isPending ? (
            <div>Loading...</div>
          ) : similarCompanies.isError ? (
            <div>{similarCompanies.error}</div>
          ) : (
            similarCompanies.data.currentItems.map((company) => (
              <SalonItem key={company.id} {...company} />
            ))
          )}
        </div>
      </div>
    </main>
  );
};

export default SalonDetail;
