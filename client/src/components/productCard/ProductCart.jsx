import styles from "./style.module.scss";
import { Icon } from "@fluentui/react";
import { useSelector, useDispatch } from "react-redux";
import { setFavCarIds } from "../../features/appSlice";

import FmdGoodIcon from "@mui/icons-material/FmdGood";
import AccessTimeIcon from "@mui/icons-material/AccessTime";

import { useNavigate } from "react-router-dom";

function ProductCart({ product }) {
  const navigate = useNavigate();

  const favCarIds = useSelector((state) => state.favCarIds);

  const isFav = favCarIds.some((fav) => fav === product.id);

  const dispatch = useDispatch();

  const handleFavCar = (id) => {
    dispatch(setFavCarIds({ ID: id }));
  };

  return (
    <div
      className={styles.cardWrapper}
      onClick={() => {
        navigate(`/auto/${product.id}`);
        window.scrollTo(0, 0);
      }}
    >
      <div className={styles.top}>
        <div className={styles.btns}>
          <ul>
            {product.leasing && (
              <li style={{ backgroundColor: "#620985" }}>
                <Icon iconName="Financial" />
              </li>
            )}
            {product.barter && (
              <li style={{ backgroundColor: "#DC8E00" }}>
                <Icon iconName="RepeatAll" />
              </li>
            )}
            {product.credit && (
              <li style={{ backgroundColor: "#00C600" }}>
                <Icon iconName="CalculatorPercentage" />
              </li>
            )}
          </ul>
          <button
            className={styles.heart}
            onClick={(e) => {
              e.stopPropagation();
              handleFavCar(product.id);
            }}
          >
            {isFav ? (
              <Icon style={{ color: "red" }} iconName="HeartFill" />
            ) : (
              <Icon iconName="HeartFill" />
            )}
          </button>
        </div>
        <img src={`/productImgs/${product.img}.jpg`} alt="car" />
      </div>
      <div className={styles.info}>
        <div className={styles.header}>
          <h1>
            {product.price} <span>{product.currency}</span>
          </h1>
        </div>
        <p className={styles.productName}>{product.name}</p>
        <ul className={styles.generalInfo}>
          <li>{product.year}</li>
          <li className={styles.border}>{product.capacity}</li>
          <li className={styles.distance}>{product.distance}</li>
        </ul>
        <ul className={styles.dateInfo}>
          <li>
            <FmdGoodIcon className={styles.icon} sx={{ color: "#94a684" }} />
            {product.location}
          </li>
          <li>
            <AccessTimeIcon className={styles.icon} sx={{ color: "#94a684" }} />
            {product.date}
          </li>
        </ul>
      </div>
    </div>
  );
}

export default ProductCart;