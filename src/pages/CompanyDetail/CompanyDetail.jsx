import "../../sass/pages/_companyDetail.scss";

import { Link } from "react-router-dom";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";

import { useCompany } from "../../services/queries";

import { useParams } from "react-router-dom";

import OwnerInfo from "./components/OwnerInfo";
import Countries from "./components/Countries";

import GppMaybeIcon from "@mui/icons-material/GppMaybe";
import BalanceIcon from "@mui/icons-material/Balance";
import UploadIcon from "@mui/icons-material/Upload";
import FavoriteIcon from "@mui/icons-material/Favorite";

const CompanyDetail = () => {
  const { id } = useParams();

  const { data: company, isPending, isError, error } = useCompany(id);

  if (isPending) {
    return <div className="company__detail">Loading...</div>;
  }

  if (isError) {
    return <div className="company__detail">{error}</div>;
  }

  return (
    <main className="company__detail">
      <div className="company__detail__links">
        <Link to="/" className="company__detail__links__item">
          Ana Səhifə
        </Link>
        <ArrowForwardIosIcon sx={{ color: "#7b7b7b", fontSize: 20 }} />
        <Link to="/company" className="company__detail__links__item">
          Şirkətlər
        </Link>
        <ArrowForwardIosIcon sx={{ color: "#7b7b7b", fontSize: 20 }} />
        <Link to="#" className="company__detail__links__item">
          {company.companyName}
        </Link>
      </div>
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
            src="../../../public/companies/company1.png"
            alt="company"
            className="company__detail__info__img__item"
          />
        </div>
        <OwnerInfo />
        <Countries />
      </div>
    </main>
  );
};

export default CompanyDetail;
