import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";

import {
  Type,
  Room,
  Price,
  MoreOptions,
  Colors,
  CarSupply,
  Others,
  Comment,
  Pictures,
  Contact,
} from "./components/index";

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

  return (
    <main className="new__promotion">
      <div className="new__promotion__titles">
        <div className="new__promotion__titles__switch">
          <button
            className="new__promotion__titles__switch__btn"
            onClick={() => navigate("/")}
          >
            Ana səhifə
          </button>
          <ArrowForwardIosIcon className="new__promotion__titles__switch__icon" />
          <button className="new__promotion__titles__switch__btn">
            Elan yerləşdir
          </button>
        </div>
        <div className="new__promotion__titles__main">Elan yerləşdir</div>
      </div>
      <div className="new__promotion__content">
        <Type />
        <Room />
        <Price />
        <MoreOptions />
        <div className="new__promotion__content__divider" />
        <Colors />
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
