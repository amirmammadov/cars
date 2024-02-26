import { useState } from "react";

import "../../../sass/components/_reviews.scss";

import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";
import ArrowBackIosIcon from "@mui/icons-material/ArrowBackIos";

const Reviews = ({ product }) => {
  const [aciveReview, setActiveReview] = useState(0);

  const maxLength = product.reviews.length;

  const currentItem = product.reviews[aciveReview];

  const handleRightArrow = () => {
    setActiveReview((prevIndex) =>
      prevIndex === maxLength - 1 ? 0 : prevIndex + 1
    );
  };

  const handleLeftArrow = () => {
    setActiveReview((prevIndex) =>
      prevIndex === 0 ? maxLength - 1 : prevIndex - 1
    );
  };

  return (
    <div className="reviews">
      <div className="reviews__title">Rəylər</div>
      <div className="reviews__content">
        <div className="reviews__content__item">
          <div key={currentItem.id} className="reviews__content__item__header">
            <img src={`/carDetail/person${currentItem.id}.jpg`} alt="person" />
            <span className="reviews__content__item__header__name">
              {currentItem.person}
            </span>
          </div>
          <div className="reviews__content__item__body">{currentItem.note}</div>
        </div>
        <ArrowBackIosIcon
          sx={{ color: "#a3a3a3", "&:hover": { color: "#000" } }}
          className="reviews__content__leftArrow"
          onClick={handleLeftArrow}
        />
        <ArrowForwardIosIcon
          sx={{ color: "#a3a3a3", "&:hover": { color: "#000" } }}
          className="reviews__content__rightArrow"
          onClick={handleRightArrow}
        />
      </div>
    </div>
  );
};

export default Reviews;
