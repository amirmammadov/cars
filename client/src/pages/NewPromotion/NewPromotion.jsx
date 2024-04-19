import {
  Type,
  Price,
  MoreOptions,
  CarSupply,
  Others,
  Comment,
  Pictures,
  Contact,
} from "./components/index";

import Breadcrumbs from "@mui/material/Breadcrumbs";
import Typography from "@mui/material/Typography";
import Link from "@mui/material/Link";
import NavigateNextIcon from "@mui/icons-material/NavigateNext";

import { useNavigate } from "react-router-dom";

import { useSelector } from "react-redux";

import "../../sass/pages/_newPromotion.scss";

const NewPromotion = () => {
  const navigate = useNavigate();

  const newPromotion = useSelector((state) => state.newPromotion);

  const submitNewPromotion = (e) => {
    e.preventDefault();

    console.log(newPromotion);

    navigate("/");

    window.scrollTo(0, 0);
  };

  const breadcrumbs = [
    <Link underline="hover" key="1" color="inherit" href="/">
      Ana Səhifə
    </Link>,
    <Typography key="2" color="text.primary">
      Elan yerləşdir
    </Typography>,
  ];

  return (
    <main className="new__promotion">
      <div className="new__promotion__titles">
        <Breadcrumbs
          separator={<NavigateNextIcon fontSize="small" />}
          aria-label="breadcrumb"
        >
          {breadcrumbs}
        </Breadcrumbs>
        <div className="new__promotion__titles__main">Elan yerləşdir</div>
      </div>
      <div className="new__promotion__content">
        <Type />
        <Price />
        <MoreOptions />
        <div className="new__promotion__content__divider" />
        <CarSupply />
        <Others />
        <div className="new__promotion__content__divider" />
        <Comment />
        <Pictures />
        <Contact />
        <div className="new__promotion__content__divider" />
        <button
          type="submit"
          className="new__promotion__content__btn"
          onClick={(e) => submitNewPromotion(e)}
        >
          Elan yerləşdir
        </button>
        <p className="new__promotion__content__text" style={{}}>
          * olan qırmızı xanaları doldurmaq mütləqdir.
        </p>
      </div>
    </main>
  );
};

export default NewPromotion;
