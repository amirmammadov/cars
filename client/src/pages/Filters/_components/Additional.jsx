import { useClearFilter } from "../../../hooks/useClearFilter";

import "../../../sass/components/_filtersSection.scss";

import OptionInputMultiple from "../../../components/OptionInputMultiple/OptionInputMultiple";

import { moreFilterOptions } from "../../../constants/more-filters";

const Additional = () => {
  const isClear = useClearFilter()[0];

  const { sellerType } = moreFilterOptions;

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
            clear={isClear}
            handleChange={handleChange}
          />
        </div>
      </div>
    </div>
  );
};

export default Additional;
