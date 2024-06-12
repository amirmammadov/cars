import { useState } from "react";

import "../../../sass/components/_filtersSection.scss";

import OptionInputMultiple from "../../../components/OptionInputMultiple/OptionInputMultiple";

import { innerMaterial, innerColors } from "../../../constants";

const Inner = () => {
  const [clear, setClear] = useState(false);

  const handleChange = () => {};

  return (
    <div className="filters__inner">
      <div className="filters__inner__title">Daxili</div>
      <div className="filters__inner__row">
        <div className="filters__inner__row__item">
          <OptionInputMultiple
            options={innerColors}
            holder="Daxili rəng"
            keyValue="innerColors"
            clear={clear}
            setClear={setClear}
            handleChange={handleChange}
            key="innerColors"
          />
        </div>
        <div className="filters__inner__row__item">
          <OptionInputMultiple
            options={innerMaterial}
            holder="Daxili material"
            keyValue="innerMaterial"
            clear={clear}
            setClear={setClear}
            handleChange={handleChange}
            key="innerMaterial"
          />
        </div>
      </div>
    </div>
  );
};

export default Inner;
