import "../../../sass/components/_filtersSection.scss";

import { useFiltersDispatch } from "../../../hooks/useFiltersDispatch";

import { useSelector } from "react-redux";

import OptionInputMultiple from "../../../components/OptionInputMultiple/OptionInputMultiple";

import { moreFilterOptions } from "../../../constants/more-filters";

const Technical = () => {
  const { minPower, maxPower, minVolume, maxVolume } = useSelector(
    (state) => state.moreFilterValues
  );

  const { fuelType, fuelConsumption, gearBox, transmission } =
    moreFilterOptions;

  const handleChange = useFiltersDispatch();

  return (
    <div className="filters__tech">
      <div className="filters__tech__title">Texniki məlumatlar</div>
      <div className="filters__tech__row">
        <div className="filters__tech__row__item customInput">
          <input
            type="number"
            placeholder="Güc, Min"
            name="minPower"
            value={minPower}
            onChange={(e) => handleChange(e)}
          />
          <input
            type="number"
            placeholder="Max"
            name="maxPower"
            value={maxPower}
            onChange={(e) => handleChange(e)}
          />
        </div>
        <div className="filters__tech__row__item customInput">
          <input
            type="number"
            placeholder="Həcm, Min"
            name="minVolume"
            value={minVolume}
            onChange={(e) => handleChange(e)}
          />
          <input
            type="number"
            placeholder="Max"
            name="maxVolume"
            value={maxVolume}
            onChange={(e) => handleChange(e)}
          />
        </div>
        <div className="filters__tech__row__item">
          <OptionInputMultiple
            options={fuelType}
            holder="Yanacaq növü"
            keyValue="fuelType"
            handleChange={handleChange}
          />
        </div>
        <div className="filters__tech__row__item">
          <OptionInputMultiple
            options={fuelConsumption}
            holder="Yanacaq sərfiyyatı"
            keyValue="fuelConsumption"
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
            handleChange={handleChange}
          />
        </div>
        <div className="filters__tech__row__item">
          <OptionInputMultiple
            options={transmission}
            holder="Ötürücü"
            keyValue="transmission"
            handleChange={handleChange}
          />
        </div>
      </div>
    </div>
  );
};

export default Technical;
