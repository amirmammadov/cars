import { useState } from "react";

import "../../sass/components/_reviews.scss";

import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";
import ArrowBackIosIcon from "@mui/icons-material/ArrowBackIos";

const reviews = [
  {
    id: 1,
    person: "Ruslan Qasımov",
    imgUrl: "/carDetail/person1.png",
    note: "Vüqar bəydən mən də maşın  almışam və təcrübəmi bölüşmək istəyirəm. Heç bir qüsuru yoxdur və artıq 3 ildir ki, sürürəm. ",
  },
  {
    id: 2,
    person: "Arif Bayramlı",
    imgUrl: "/carDetail/person2.png",
    note: "Vuruğu,udarı yoxdur. Otur sür. Artıq 3 ildir ki, sürürəm.",
  },
];

const Reviews = () => {
  const [aciveReview, setActiveReview] = useState(0);

  const maxLength = reviews.length;

  const currentItem = reviews[aciveReview];

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
