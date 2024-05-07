import { useState, useEffect } from "react";

import GppMaybeIcon from "@mui/icons-material/GppMaybe";
import BalanceIcon from "@mui/icons-material/Balance";
import UploadIcon from "@mui/icons-material/Upload";
import FavoriteIcon from "@mui/icons-material/Favorite";
import MoreVertIcon from "@mui/icons-material/MoreVert";

import "../../sass/components/_carDetailLinks.scss";

import { useSelector, useDispatch } from "react-redux";

import { setFavCarIds } from "../../features/appSlice";

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

  const isFav = favCarIds.some((fav) => fav === product.id);

  const handleFavCar = (id) => {
    dispatch(setFavCarIds({ ID: id }));
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
      <button onClick={handleActiveLinks} className="car__detail__header__more">
        <MoreVertIcon />
      </button>
    </>
  );
};

export default CarDetailLinks;
