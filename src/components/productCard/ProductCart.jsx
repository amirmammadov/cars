import styles from "./style.module.scss";
import { Icon } from "@fluentui/react";
import { useSelector, useDispatch } from "react-redux";
import { setFavCarIds } from "../../features/appSlice";

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
        <img src={`/productImgs/${product.img}.svg`} alt="" />
      </div>
      <div className={styles.info}>
        <div className={styles.header}>
          <h1>
            {product.price} <span>{product.currency}</span>
          </h1>
          {product.salon && <button>Salon</button>}
        </div>
        <p>{product.name}</p>

        <ul>
          <li>{product.year}</li>
          <li className={styles.border}>{product.capacity}</li>
          <li>{product.distance}</li>
        </ul>
        <ul className={styles.dateInfo}>
          <li>
            <Icon iconName="Poi" />
            {product.location}
          </li>
          <li>
            <Icon iconName="Clock" />
            {product.date}
          </li>
        </ul>
      </div>
    </div>
  );
}

export default ProductCart;
