import { useState } from "react";

import { useDispatch } from "react-redux";

import "../../sass/components/_checkboxes.scss";

const CheckBoxes = ({ title, others, name, dispatchFunc }) => {
  const [checks, setChecks] = useState([]);

  const dispatch = useDispatch();

  const handleCheckbox = (event) => {
    let { name, value } = event.target;

    if (checks.includes(value)) {
      const newChecks = checks.filter((item) => item !== value);

      setChecks(newChecks);
      dispatch(dispatchFunc({ name, value: newChecks }));
      return;
    }

    setChecks((prev) => [...prev, value]);

    dispatch(dispatchFunc({ name, value: [...checks, value] }));
  };
  return (
    <div className="check__others">
      <div className="check__others__title filtersOthersTitle">{title}</div>
      <div className="check__others__content">
        {others.map((other) => (
          <div key={other.id} className="check__others__content__item">
            <input
              type="checkbox"
              name={name}
              value={other.title}
              onChange={handleCheckbox}
              className="check__others__content__item__check"
            />
            <div className="check__others__content__item__title">
              {other.title}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default CheckBoxes;
