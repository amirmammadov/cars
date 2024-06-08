import "../../sass/pages/_comparison.scss";

import LeftSide from "./_components/LeftSide";
import RightCars from "./_components/RightCars";

import { add } from "ionicons/icons";
import { IonIcon } from "@ionic/react";

import { useSelector } from "react-redux";

import { Link } from "react-router-dom";

import { products } from "../../mockData/products";

const Comparison = () => {
  const compareCarIds = useSelector((state) => state.compareCarIds);

  const selectedCars = products.filter((product) =>
    compareCarIds.includes(product.id)
  );

  return (
    <div className="comparison">
      <div className="comparison__title">Müqayisələr</div>
      {selectedCars.length === 0 ? (
        <div className="no__car">
          <div className="no__car__text">
            Müqayisə etmək üçün elan əlavə olunmayıb.
          </div>
          <Link to="/elan" className="no__car__link">
            <IonIcon icon={add} style={{ fontSize: "24px" }} />
            <span>Elan əlavə et</span>
          </Link>
        </div>
      ) : (
        <div className="comparison__content">
          <LeftSide />
          <RightCars cars={selectedCars} />
        </div>
      )}
    </div>
  );
};

export default Comparison;
