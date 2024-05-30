import { useState } from "react";

import "../../../sass/components/_others.scss";

import { others } from "../../../constants";

import { useDispatch } from "react-redux";
import { setNewPromotionState } from "../../../features/appSlice";

const Others = () => {
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
    <div className="car__others">
      <div className="car__others__title">Digər</div>
      <div className="car__others__content">
        {others.map((other) => (
          <div key={other.id} className="car__others__content__item">
            <input
              type="checkbox"
              name="suppliesOther"
              value={other.title}
              onClick={handleCheckbox}
              className="car__others__content__item__check"
            />
            <div className="car__others__content__item__title">
              {other.title}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Others;
