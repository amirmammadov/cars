import "../../sass/components/_car.scss";

import { useSelector, useDispatch } from "react-redux";
import { setFavCarIds } from "../../features/appSlice";

import { locationOutline, timeOutline } from "ionicons/icons";
import { IonIcon } from "@ionic/react";

import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import FavoriteIcon from "@mui/icons-material/Favorite";

import { Icon } from "@fluentui/react";

import { useNavigate } from "react-router-dom";

const Car = ({ product }) => {
  const navigate = useNavigate();

  const favCarIds = useSelector((state) => state.favCarIds);

  const isFav = favCarIds.some((fav) => fav === product.id);

  const dispatch = useDispatch();

  const handleFavCar = (id) => {
    dispatch(setFavCarIds({ ID: id }));
  };

  return (
    <div
      className="car"
      onClick={() => {
        navigate(`/auto/${product.id}`);
        window.scrollTo(0, 0);
      }}
    >
      <div className="car__img">
        <img src={`/productImgs/${product.img}.jpg`} alt="car" />
      </div>
      <div className="car__content">
        <div className="car__content__price">
          {product.price} <span>{product.currency}</span>
        </div>
        <div className="car__content__info">
          <div className="car__content__info__name">{product.name}</div>
          <div className="car__content__info__desc">
            <div className="car__content__info__desc__item">{product.year}</div>
            <div className="car__content__info__desc__item">
              {product.capacity}
            </div>
            <div className="car__content__info__desc__item">
              {product.distance}
            </div>
          </div>
        </div>
        <div className="car__content__extra">
          <div className="car__content__extra__item">
            <IonIcon icon={locationOutline} />
            <div className="car__content__extra__item__text">
              {product.location}
            </div>
          </div>
          <div className="car__content__extra__item">
            <IonIcon icon={timeOutline} />
            <div className="car__content__extra__item__text">
              {product.date}
            </div>
          </div>
        </div>
      </div>
      <div className="car__features">
        <div className="car__features__icons">
          {product.leasing && (
            <div className="car__features__icons__stat">
              <Icon iconName="Financial" />
            </div>
          )}
          {product.barter && (
            <div className="car__features__icons__barter">
              <Icon iconName="RepeatAll" />
            </div>
          )}
          {product.credit && (
            <div className="car__features__icons__credit">
              <Icon iconName="CalculatorPercentage" />
            </div>
          )}
        </div>
        <button
          className="car__features__heart"
          onClick={(e) => {
            e.stopPropagation();
            handleFavCar(product.id);
          }}
        >
          {isFav ? (
            <FavoriteIcon style={{ color: "red" }} />
          ) : (
            <FavoriteBorderIcon />
          )}
        </button>
      </div>
    </div>
  );
};

export default Car;
