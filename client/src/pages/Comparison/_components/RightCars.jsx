import Car from "../../../components/Car/Car";

import { Link } from "react-router-dom";

import { add, closeOutline } from "ionicons/icons";
import { IonIcon } from "@ionic/react";

import { comparisonValues } from "../../../constants";

import { useDispatch } from "react-redux";
import { setCompareCarIds } from "../../../features/appSlice";

const RightCars = ({ cars }) => {
  const dispatch = useDispatch();

  const handleCompareCar = (id) => {
    dispatch(setCompareCarIds({ ID: id }));
  };

  return (
    <div className="comparison__content__right">
      {cars.map((product) => {
        return (
          <div key={product.id} className="comparison__content__right__item">
            <Car product={product} />
            <div className="comparison__content__right__item__info">
              {Object.values(comparisonValues).map((value) => (
                <div key={value}>{value}</div>
              ))}
            </div>
            <button
              className="comparison__content__right__item__remove"
              onClick={(e) => {
                e.stopPropagation();
                handleCompareCar(product.id);
              }}
            >
              <IonIcon
                icon={closeOutline}
                style={{ fontSize: "26px", color: "#000" }}
              />
            </button>
          </div>
        );
      })}
      <Link to="/elan" className="comparison__content__right__add">
        <IonIcon icon={add} style={{ fontSize: "30px", color: "#000" }} />
      </Link>
    </div>
  );
};

export default RightCars;
