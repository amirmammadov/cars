import { useState, useEffect } from "react";

import MoreVertIcon from "@mui/icons-material/MoreVert";

import "../../sass/components/_carDetailLinks.scss";

import { useSelector, useDispatch } from "react-redux";

import {
  scaleOutline,
  heartOutline,
  heart,
  warningOutline,
  shareOutline,
  scale,
} from "ionicons/icons";
import { IonIcon } from "@ionic/react";

import { setFavCarIds, setCompareCarIds } from "../../features/appSlice";

const CarDetailLinks = ({ product }) => {
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

  const handleActiveLinks = () => {
    setLinksActive(!linksActive);
  };

  const dispatch = useDispatch();

  const favCarIds = useSelector((state) => state.favCarIds);
  const compareCarIds = useSelector((state) => state.compareCarIds);

  const isFav = favCarIds.some((fav) => fav === product.id);
  const wasCompared = compareCarIds.some((compare) => compare === product.id);

  const handleFavCar = (id) => {
    dispatch(setFavCarIds({ ID: id }));
  };

  const handleCompareCar = (id) => {
    dispatch(setCompareCarIds({ ID: id }));
  };

  return (
    <>
      <div
        className={`car__detail__general__header__links ${
          linksActive && "activeLinks"
        }`}
      >
        <button
          className="car__detail__general__header__links__btn"
          onClick={(e) => {
            e.stopPropagation();
            handleFavCar(product.id);
          }}
        >
          {isFav ? (
            <IonIcon
              icon={heart}
              style={{ fontSize: "22px", color: "#620985" }}
            />
          ) : (
            <IonIcon icon={heartOutline} style={{ fontSize: "22px" }} />
          )}
        </button>
        <button
          className="car__detail__general__header__links__btn"
          onClick={(e) => {
            e.stopPropagation();
            handleCompareCar(product.id);
          }}
        >
          {wasCompared ? (
            <IonIcon
              icon={scale}
              style={{ fontSize: "22px", color: "#620985" }}
            />
          ) : (
            <IonIcon icon={scaleOutline} style={{ fontSize: "22px" }} />
          )}
        </button>
        <button className="car__detail__general__header__links__btn">
          <IonIcon icon={warningOutline} style={{ fontSize: "22px" }} />
        </button>
        <button className="car__detail__general__header__links__btn">
          <IonIcon icon={shareOutline} style={{ fontSize: "22px" }} />
        </button>
      </div>
      <button onClick={handleActiveLinks} className="car__detail__header__more">
        <MoreVertIcon />
      </button>
    </>
  );
};

export default CarDetailLinks;
