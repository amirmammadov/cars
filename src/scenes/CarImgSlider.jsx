import { useState } from "react";

import "../sass/layout/_carImgSlider.scss";

import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";
import ArrowBackIosNewIcon from "@mui/icons-material/ArrowBackIosNew";
import AspectRatioIcon from "@mui/icons-material/AspectRatio";
import ImageIcon from "@mui/icons-material/Image";

import { carPictures } from "../assets";

const CarImgSlider = ({ handleSlider }) => {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  const maxLength = carPictures.length;

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

  return (
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
            handleSlider();
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
  );
};

export default CarImgSlider;
