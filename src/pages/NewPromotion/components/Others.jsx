import "../../../sass/components/_others.scss";

import { others } from "../../../constants";

const Others = () => {
  return (
    <div className="car__others">
      <div className="car__others__title">Digər</div>
      <div className="car__others__content">
        {others.map((other) => (
          <div key={other.id} className="car__others__content__item">
            <input
              type="checkbox"
              name="checkbox"
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
