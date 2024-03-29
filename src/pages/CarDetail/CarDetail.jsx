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

import SectionHeader from "../../components/SectionHeader/SectionHeader";

import { carPictures } from "../../assets/index";

import Breadcrumbs from "@mui/material/Breadcrumbs";
import Typography from "@mui/material/Typography";
import Link from "@mui/material/Link";
import NavigateNextIcon from "@mui/icons-material/NavigateNext";
import CarDetailLinks from "../../components/CarDetailLinks/CarDetailLinks";
import CarImgSlider from "../../scenes/CarImgSlider";

import { useParams } from "react-router-dom";

import { products } from "../../mockData/products";

const CarDetail = () => {
  const [isSliderOpen, setIsSliderOpen] = useState(false);

  const params = useParams();

  const product = products.filter(
    (product) => product.id === Number(params.id)
  );

  const handleOpenSlider = () => {
    setIsSliderOpen((prevValue) => !prevValue);
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
          <CarDetailLinks product={product[0]} />
        </div>
        <CarImgSlider handleSlider={setIsSliderOpen} />
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
        <SectionHeader title="Bənzər Elanlar" filterTitle="Rating" />
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
