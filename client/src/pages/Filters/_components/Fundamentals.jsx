import { useSelector, useDispatch } from "react-redux";
import { setMoreFilterValues } from "../../../features/appSlice";

import "../../../sass/components/_filtersSection.scss";

import RadioGroups from "../../../components/RadioGroups/RadioGroups";
import OptionInputSingle from "../../../components/OptionInputSingle/OptionInputSingle";
import OptionInputMultiple from "../../../components/OptionInputMultiple/OptionInputMultiple";

import { moreFilterOptions } from "../../../constants/more-filters";

const Fundamentals = () => {
  const {
    minDistance,
    maxDistance,
    minPrice,
    maxPrice,
    minYear,
    maxYear,
    currency,
    sellingType,
    carAge,
  } = useSelector((state) => state.moreFilterValues);

  const dispatch = useDispatch();

  const { brand, model, banType, seats, city, forMarket, radios } =
    moreFilterOptions;

  const handleChange = ({ target }) => {
    dispatch(setMoreFilterValues({ name: target.name, value: target.value }));
  };

  return (
    <div className="filters__fund">
      <div className="filters__fund__title">Təməl məlumatlar</div>
      <RadioGroups
        value={carAge}
        radioName="carAge"
        handler={handleChange}
        radios={radios}
      />
      <div className="filters__fund__row">
        <div className="filters__fund__row__item">
          <OptionInputSingle
            options={brand}
            holder="Marka"
            keyValue="brand"
            handleChange={handleChange}
          />
        </div>
        <div className="filters__fund__row__item">
          <OptionInputMultiple
            options={model}
            holder="Model"
            keyValue="model"
            handleChange={handleChange}
          />
        </div>
        <div className="filters__fund__row__item">
          <OptionInputMultiple
            options={banType}
            holder="Ban növü"
            keyValue="banType"
            handleChange={handleChange}
          />
        </div>
        <div className="filters__fund__row__item" />
      </div>
      <div className="filters__fund__row">
        <div className="filters__fund__row__item customInput">
          <input
            type="number"
            placeholder="Yürüyüş, Min"
            name="minDistance"
            value={minDistance}
            onChange={(e) => handleChange(e)}
          />
          <input
            type="number"
            placeholder="Max"
            name="maxDistance"
            value={maxDistance}
            onChange={(e) => handleChange(e)}
          />
        </div>
        <div className="filters__fund__row__item">
          <select
            onChange={(e) => handleChange(e)}
            name="sellingType"
            value={sellingType}
          >
            <option value="all">Hamısı</option>
            <option value="credit">Kredit</option>
            <option value="barter">Barter</option>
          </select>
        </div>
        <div className="filters__fund__row__item customInput">
          <input
            type="number"
            placeholder="Qiymət, Min"
            name="minPrice"
            value={minPrice}
            onChange={(e) => handleChange(e)}
          />
          <input
            type="number"
            placeholder="Max"
            name="maxPrice"
            value={maxPrice}
            onChange={(e) => handleChange(e)}
          />
        </div>
        <div className="filters__fund__row__item options">
          <select
            onChange={(e) => handleChange(e)}
            name="currency"
            value={currency}
          >
            <option value="AZN">AZN</option>
            <option value="EUR">EUR</option>
            <option value="USD">USD</option>
          </select>
        </div>
      </div>
      <div className="filters__fund__row">
        <div className="filters__fund__row__item customInput">
          <input
            type="number"
            placeholder="Il, Min"
            name="minYear"
            value={minYear}
            onChange={(e) => handleChange(e)}
          />
          <input
            type="number"
            placeholder="Max"
            name="maxYear"
            value={maxYear}
            onChange={(e) => handleChange(e)}
          />
        </div>
        <div className="filters__fund__row__item">
          <OptionInputMultiple
            options={seats}
            holder="Oturacaq Sayı"
            keyValue="seats"
            handleChange={handleChange}
          />
        </div>
        <div className="filters__fund__row__item">
          <OptionInputMultiple
            options={city}
            holder="Şəhər"
            keyValue="city"
            handleChange={handleChange}
          />
        </div>
        <div className="filters__fund__row__item">
          <OptionInputMultiple
            options={forMarket}
            holder="Yığıldığı bazar"
            keyValue="forMarket"
            handleChange={handleChange}
          />
        </div>
      </div>
    </div>
  );
};

export default Fundamentals;
