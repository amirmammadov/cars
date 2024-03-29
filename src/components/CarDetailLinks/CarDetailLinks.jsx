import GppMaybeIcon from "@mui/icons-material/GppMaybe";
import BalanceIcon from "@mui/icons-material/Balance";
import UploadIcon from "@mui/icons-material/Upload";
import FavoriteIcon from "@mui/icons-material/Favorite";

import "../../sass/components/_carDetailLinks.scss";

import { useSelector, useDispatch } from "react-redux";

import { setFavCarIds } from "../../features/appSlice";

const CarDetailLinks = ({ product }) => {
  const dispatch = useDispatch();

  const favCarIds = useSelector((state) => state.favCarIds);

  const isFav = favCarIds.some((fav) => fav === product.id);

  const handleFavCar = (id) => {
    dispatch(setFavCarIds({ ID: id }));
  };

  return (
    <div className="car__detail__general__header__links">
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
  );
};

export default CarDetailLinks;
