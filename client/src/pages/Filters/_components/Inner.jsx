import { useClearFilter } from "../../../hooks/useClearFilter";

import "../../../sass/components/_filtersSection.scss";

import OptionInputMultiple from "../../../components/OptionInputMultiple/OptionInputMultiple";

import { moreFilterOptions } from "../../../constants/more-filters";

const Inner = () => {
  const isClear = useClearFilter()[0];

  const { innerMaterial, innerColors } = moreFilterOptions;

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
            clear={isClear}
            handleChange={handleChange}
          />
        </div>
        <div className="filters__inner__row__item">
          <OptionInputMultiple
            options={innerMaterial}
            holder="Daxili material"
            keyValue="innerMaterial"
            clear={isClear}
            handleChange={handleChange}
          />
        </div>
      </div>
    </div>
  );
};

export default Inner;
