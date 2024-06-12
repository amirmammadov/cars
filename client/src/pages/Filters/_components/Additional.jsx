import { useState } from "react";

import "../../../sass/components/_filtersSection.scss";

import OptionInputMultiple from "../../../components/OptionInputMultiple/OptionInputMultiple";

import { sellerType } from "../../../constants";

const Additional = () => {
  const [clear, setClear] = useState(false);

  const handleChange = () => {};

  return (
    <div className="filters__add">
      <div className="filters__add__title">Əlavə</div>
      <div className="filters__add__row">
        <div className="filters__add__row__item">
          <OptionInputMultiple
            options={sellerType}
            holder="Satıcı"
            keyValue="sellerType"
            clear={clear}
            setClear={setClear}
            handleChange={handleChange}
            key="sellerType"
          />
        </div>
      </div>
    </div>
  );
};

export default Additional;
