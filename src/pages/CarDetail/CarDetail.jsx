import { useState } from "react";

import "../../sass/pages/_carDetail.scss";

import CarSwipper from "../../scenes/CarSwipper";
import {
  Basic,
  CurrencyConvertor,
  ExtraInfo,
  Note,
  OwnerInfo,
} from "./components";

import ProductCart from "../../components/productCard/ProductCart";

import { carPictures } from "../../assets/index";

import Breadcrumbs from "@mui/material/Breadcrumbs";
import Typography from "@mui/material/Typography";
import Link from "@mui/material/Link";
import NavigateNextIcon from "@mui/icons-material/NavigateNext";

import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";
import ArrowBackIosNewIcon from "@mui/icons-material/ArrowBackIosNew";
import AspectRatioIcon from "@mui/icons-material/AspectRatio";
import GppMaybeIcon from "@mui/icons-material/GppMaybe";
import BalanceIcon from "@mui/icons-material/Balance";
import UploadIcon from "@mui/icons-material/Upload";
import ImageIcon from "@mui/icons-material/Image";
import FavoriteIcon from "@mui/icons-material/Favorite";

import { useParams } from "react-router-dom";

import { useSelector, useDispatch } from "react-redux";
import { setFavCarIds } from "../../features/appSlice";

import { products } from "../../mockData/products";

const CarDetail = () => {
  const [isSliderOpen, setIsSliderOpen] = useState(false);

  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  const params = useParams();

  const product = products.filter(
    (product) => product.id === Number(params.id)
  );

  const favCarIds = useSelector((state) => state.favCarIds);

  const isFav = favCarIds.some((fav) => fav === product[0].id);
  const maxLength = carPictures.length;

  const dispatch = useDispatch();

  const handleFavCar = (id) => {
    dispatch(setFavCarIds({ ID: id }));
  };

  const handleOpenSlider = () => {
    setIsSliderOpen((prevValue) => !prevValue);
  };

  const handleRightArrow = () => {
    setCurrentImageIndex((prevIndex) =>
      prevIndex === maxLength - 1 ? 0 : prevIndex + 1
    );
  };

  const handleLeftArrow = () => {
    setCurrentImageIndex((prevIndex) =>
      prevIndex === 0 ? maxLength - 1 : prevIndex - 1
    );
  };

  const breadcrumbs = [
    <Link underline="hover" key="1" color="inherit" href="/">
      Ana Səhifə
    </Link>,
    <Link underline="hover" key="2" color="inherit" href="/elan">
      Elanlar
    </Link>,
    <Typography key="3" color="text.primary">
      Mercedes-Benz
    </Typography>,
  ];

  return (
    <div className="car__detail">
      <Breadcrumbs
        separator={<NavigateNextIcon fontSize="small" />}
        aria-label="breadcrumb"
      >
        {breadcrumbs}
      </Breadcrumbs>
      <div className="car__detail__general">
        <div className="car__detail__general__header">
          <div className="car__detail__general__header__info">
            Mercedes-Benz, S 500, 2021 il, 5.5 L, 110 000 km
          </div>
          <div className="car__detail__general__header__links">
            <button
              className="car__detail__general__header__links__btn"
              onClick={(e) => {
                e.stopPropagation();
                handleFavCar(product[0].id);
              }}
            >
              {isFav ? (
                <FavoriteIcon sx={{ color: "red" }} iconname="HeartFill" />
              ) : (
                <FavoriteIcon
                  iconname="HeartFill"
                  sx={{
                    color: "#620985",
                  }}
                />
              )}
            </button>
            <button className="car__detail__general__header__links__btn">
              <BalanceIcon sx={{ color: "#620985" }} />
            </button>
            <button className="car__detail__general__header__links__btn">
              <GppMaybeIcon sx={{ color: "#620985" }} />
            </button>
            <button className="car__detail__general__header__links__btn">
              <UploadIcon sx={{ color: "#620985" }} />
            </button>
          </div>
        </div>
        <div className="car__detail__general__pictures">
          <div className="car__detail__general__pictures__main">
            <img
              src={`/carDetail/car${currentImageIndex + 1}.jpg`}
              alt="car"
              className="car__detail__general__pictures__main__img"
            />
            <AspectRatioIcon
              sx={{ color: "#fff", width: 35, height: 35 }}
              className="car__detail__general__pictures__main__expand"
              onClick={(e) => {
                e.stopPropagation();
                handleOpenSlider();
              }}
            />
            <ArrowForwardIosIcon
              sx={{ color: "#fff", width: 35, height: 35 }}
              className="car__detail__general__pictures__main__rightArrow"
              onClick={(e) => {
                e.stopPropagation();
                handleRightArrow();
              }}
            />
            <ArrowBackIosNewIcon
              sx={{ color: "#fff", width: 35, height: 35 }}
              className="car__detail__general__pictures__main__leftArrow"
              onClick={(e) => {
                e.stopPropagation();
                handleLeftArrow();
              }}
            />
            <div className="car__detail__general__pictures__main__counter">
              <ImageIcon sx={{ color: "#fff" }} />
              {currentImageIndex + 1}/{maxLength}
            </div>
          </div>
          <div className="car__detail__general__pictures__aside">
            <div className="car__detail__general__pictures__aside__item">
              <img src={`/carDetail/car2.jpg`} alt="car" />
            </div>
            <div className="car__detail__general__pictures__aside__item">
              <img src={`/carDetail/car3.jpg`} alt="car" />
              <div className="car__detail__general__pictures__aside__item__degree"></div>
            </div>
            <div className="car__detail__general__pictures__aside__item">
              <img src={`/carDetail/car4.jpg`} alt="car" />
              <div className="car__detail__general__pictures__aside__item__overlay">
                <p className="car__detail__general__pictures__aside__item__overlay__text">
                  +16 şəkil
                </p>
              </div>
            </div>
          </div>
        </div>
        {isSliderOpen && (
          <div className="car__detail__modal">
            <CarSwipper images={carPictures} />
            <button
              className="car__detail__modal__closeBtn"
              onClick={handleOpenSlider}
            >
              <img src="/carDetail/close.png" alt="close" />
            </button>
          </div>
        )}
      </div>
      <div className="car__detail__additional">
        <div className="car__detail__additional__left">
          <ExtraInfo product={product[0]} />
          <Basic product={product[0]} />
          <Note product={product[0]} />
        </div>
        <div className="car__detail__additional__right">
          <CurrencyConvertor product={product[0]} />
          <OwnerInfo />
          <div className="car__detail__additional__right__vin">
            <div className="car__detail__additional__right__vin__key">
              VİN kod:
            </div>
            <div className="car__detail__additional__right__vin__value">
              WDD12345678901234
            </div>
          </div>
        </div>
      </div>
      <div className="car__detail__divider" />
      <div className="car__detail__similar">
        <div className="car__detail__similar__header">
          <div className="car__detail__similar__header__title">
            Bənzər elanlar
          </div>
          <a href="/" className="car__detail__similar__header__link">
            Hamısına bax <img src="/carDetail/link.png" alt="link" />
          </a>
        </div>
        <div className="car__detail__similar__content">
          {products.map((product) => {
            return <ProductCart key={product.id} product={product} />;
          })}
        </div>
      </div>
    </div>
  );
};

export default CarDetail;
