import { useClearFilter } from "../../../hooks/useClearFilter";

import "../../../sass/components/_filtersSection.scss";

import OptionInputMultiple from "../../../components/OptionInputMultiple/OptionInputMultiple";

import { moreFilterOptions } from "../../../constants/more-filters";

const Outer = () => {
  const isClear = useClearFilter()[0];

  const { outerColors, parkingSensor, speedControl } = moreFilterOptions;

  const handleChange = () => {};

  return (
    <div className="filters__outer">
      <div className="filters__outer__title">Xarici</div>
      <div className="filters__outer__row">
        <div className="filters__outer__row__item">
          <OptionInputMultiple
            options={outerColors}
            holder="Xarici rəng"
            keyValue="outerColors"
            clear={isClear}
            handleChange={handleChange}
          />
        </div>
        <div className="filters__outer__row__item">
          <OptionInputMultiple
            options={parkingSensor}
            holder="Parking sensoru"
            keyValue="parkingSensor"
            clear={isClear}
            handleChange={handleChange}
          />
        </div>
        <div className="filters__outer__row__item">
          <OptionInputMultiple
            options={speedControl}
            holder="Sürət kontrol düzənləyicisi"
            keyValue="speedControl"
            clear={isClear}
            handleChange={handleChange}
          />
        </div>
      </div>
    </div>
  );
};

export default Outer;
