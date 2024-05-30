import { useState } from "react";

import "../../../sass/components/_carSupply.scss";

import { supplies } from "../../../constants";

import { useDispatch } from "react-redux";
import { setNewPromotionState } from "../../../features/appSlice";

const CarSupply = () => {
  const [checks, setChecks] = useState([]);

  const dispatch = useDispatch();

  const handleCheckbox = (event) => {
    let { name, value } = event.target;

    if (checks.includes(value)) {
      const newChecks = checks.filter((item) => item !== value);

      setChecks(newChecks);
      dispatch(setNewPromotionState({ name, value: newChecks }));
      return;
    }

    setChecks((prev) => [...prev, value]);

    dispatch(setNewPromotionState({ name, value: [...checks, value] }));
  };

  return (
    <div className="car__supply">
      <div className="car__supply__title">Avtomobilin təchizatları</div>
      <div className="car__supply__content">
        {supplies.map((supply) => (
          <div key={supply.id} className="car__supply__content__item">
            <input
              type="checkbox"
              name="supplies"
              value={supply.title}
              onClick={handleCheckbox}
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
