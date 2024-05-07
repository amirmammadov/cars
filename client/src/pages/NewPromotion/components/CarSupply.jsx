import "../../../sass/components/_carSupply.scss";

import { supplies } from "../../../constants";

const CarSupply = () => {
  return (
    <div className="car__supply">
      <div className="car__supply__title">Avtomobilin təchizatları</div>
      <div className="car__supply__content">
        {supplies.map((supply) => (
          <div key={supply.id} className="car__supply__content__item">
            <input
              type="checkbox"
              name="checkbox"
              className="car__supply__content__item__check"
            />
            <div className="car__supply__content__item__title">
              {supply.title}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default CarSupply;
