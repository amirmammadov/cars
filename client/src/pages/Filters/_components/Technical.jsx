import { useState } from "react";

import "../../../sass/components/_filtersSection.scss";

import OptionInputMultiple from "../../../components/OptionInputMultiple/OptionInputMultiple";

import {
  typeOfFuel,
  fuelConsumption,
  gearBox,
  transmission,
} from "../../../constants";

const Technical = () => {
  const [clear, setClear] = useState(false);

  const handleChange = () => {};

  return (
    <div className="filters__tech">
      <div className="filters__tech__title">Texniki məlumatlar</div>
      <div className="filters__tech__row">
        <div className="filters__tech__row__item customInput">
          <input type="number" placeholder="Güc, Min" />
          <input type="number" placeholder="Max" />
        </div>
        <div className="filters__tech__row__item customInput">
          <input type="number" placeholder="Həcm, Min" />
          <input type="number" placeholder="Max" />
        </div>
        <div className="filters__tech__row__item">
          <OptionInputMultiple
            options={typeOfFuel}
            holder="Yanacaq növü"
            keyValue="typeOfFuel"
            clear={clear}
            setClear={setClear}
            handleChange={handleChange}
            key="typeOfFuel"
          />
        </div>
        <div className="filters__tech__row__item">
          <OptionInputMultiple
            options={fuelConsumption}
            holder="Yanacaq sərfiyyatı"
            keyValue="fuelConsumption"
            clear={clear}
            setClear={setClear}
            handleChange={handleChange}
            key="fuelConsumption"
          />
        </div>
      </div>
      <div className="filters__tech__row">
        <div className="filters__tech__row__item">
          <OptionInputMultiple
            options={gearBox}
            holder="Transmissiya"
            keyValue="gearBox"
            clear={clear}
            setClear={setClear}
            handleChange={handleChange}
            key="gearBox"
          />
        </div>
        <div className="filters__tech__row__item">
          <OptionInputMultiple
            options={transmission}
            holder="Ötürücü"
            keyValue="transmission"
            clear={clear}
            setClear={setClear}
            handleChange={handleChange}
            key="transmission"
          />
        </div>
      </div>
    </div>
  );
};

export default Technical;
