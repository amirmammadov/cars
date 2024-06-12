import { useClearFilter } from "../../../hooks/useClearFilter";

import "../../../sass/components/_filtersSection.scss";

import OptionInputMultiple from "../../../components/OptionInputMultiple/OptionInputMultiple";

import { moreFilterOptions } from "../../../constants/more-filters";

const Technical = () => {
  const isClear = useClearFilter()[0];

  const { fuelType, fuelConsumption, gearBox, transmission } =
    moreFilterOptions;

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
            options={fuelType}
            holder="Yanacaq növü"
            keyValue="fuelType"
            clear={isClear}
            handleChange={handleChange}
          />
        </div>
        <div className="filters__tech__row__item">
          <OptionInputMultiple
            options={fuelConsumption}
            holder="Yanacaq sərfiyyatı"
            keyValue="fuelConsumption"
            clear={isClear}
            handleChange={handleChange}
          />
        </div>
      </div>
      <div className="filters__tech__row">
        <div className="filters__tech__row__item">
          <OptionInputMultiple
            options={gearBox}
            holder="Transmissiya"
            keyValue="gearBox"
            clear={isClear}
            handleChange={handleChange}
          />
        </div>
        <div className="filters__tech__row__item">
          <OptionInputMultiple
            options={transmission}
            holder="Ötürücü"
            keyValue="transmission"
            clear={isClear}
            handleChange={handleChange}
          />
        </div>
      </div>
    </div>
  );
};

export default Technical;
