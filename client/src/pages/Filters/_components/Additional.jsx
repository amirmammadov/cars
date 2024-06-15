import "../../../sass/components/_filtersSection.scss";

import { useFiltersDispatch } from "../../../hooks/useFiltersDispatch";

import OptionInputMultiple from "../../../components/OptionInputMultiple/OptionInputMultiple";

import { moreFilterOptions } from "../../../constants/more-filters";

const Additional = () => {
  const { sellerType } = moreFilterOptions;

  const handleChange = useFiltersDispatch();

  return (
    <div className="filters__add">
      <div className="filters__add__title">Əlavə</div>
      <div className="filters__add__row">
        <div className="filters__add__row__item">
          <OptionInputMultiple
            options={sellerType}
            holder="Satıcı"
            keyValue="sellerType"
            handleChange={handleChange}
          />
        </div>
      </div>
    </div>
  );
};

export default Additional;
