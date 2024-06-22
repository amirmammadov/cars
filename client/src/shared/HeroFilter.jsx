import { useState } from "react";

import { useClearFilter } from "../hooks/useClearFilter";

import FilterTab from "../components/FilterTab/FilterTab";
import OptionInputMultiple from "../components/OptionInputMultiple/OptionInputMultiple";
import OptionInputSingle from "../components/OptionInputSingle/OptionInputSingle";

import SearchIcon from "@mui/icons-material/Search";

import TuneIcon from "@mui/icons-material/Tune";
import CloseIcon from "@mui/icons-material/Close";

import "../sass/layout/_heroFilter.scss";

import {
  INITIAL_DATA,
  tabsDefaultValues,
  filterTabOne,
  filterTabTwo,
  filterTabThree,
  brandOptions,
  modelOptions,
  banOptions,
  cityOptions,
} from "../constants";

import { useNavigate } from "react-router-dom";

const HeroFilter = () => {
  const [data, setData] = useState(INITIAL_DATA);
  const [tabsDefault, setTabsDefault] = useState(tabsDefaultValues);

  const navigate = useNavigate();

  const handleClear = useClearFilter()[1];

  const handleChange = ({ target }) => {
    console.log(target);

    setData((prevValues) => ({
      ...prevValues,
      [target.name]: target.value,
    }));
  };

  const handleCurrencyChange = (event) => {
    setData((prevValues) => ({
      ...prevValues,
      currency: event.target.value,
    }));
  };

  const handleSearch = () => {
    console.log(data);

    setData(INITIAL_DATA);
    setTabsDefault(tabsDefaultValues);
    handleClear();
    navigate("/result");
  };

  const handleFormClear = () => {
    setData(INITIAL_DATA);
    setTabsDefault(tabsDefaultValues);

    handleClear();
  };

  return (
    <div className="home__hero__content">
      <div className="home__hero__content__title">Filtrlə</div>
      <div className="home__hero__content__firstLine">
        <FilterTab
          handleChange={handleChange}
          tabs={filterTabOne}
          tabDefaultValue={tabsDefault.tabOne}
          setTabDefaultValue={setTabsDefault}
          tabKey="tabOne"
          key="tabOne"
        />
        <FilterTab
          handleChange={handleChange}
          tabs={filterTabTwo}
          tabDefaultValue={tabsDefault.tabTwo}
          setTabDefaultValue={setTabsDefault}
          tabKey="tabTwo"
          key="tabTwo"
        />
        <FilterTab
          handleChange={handleChange}
          tabs={filterTabThree}
          tabDefaultValue={tabsDefault.tabThree}
          setTabDefaultValue={setTabsDefault}
          tabKey="tabThree"
          key="tabThree"
          isDisabled
        />
      </div>
      <div className="home__hero__content__secondLine">
        <div className="home__hero__content__secondLine__item">
          <OptionInputSingle
            options={brandOptions}
            holder="Marka"
            keyValue="brand"
            handleChange={handleChange}
            key="brand"
          />
        </div>
        <div className="home__hero__content__secondLine__item">
          <OptionInputMultiple
            options={modelOptions}
            holder="Model"
            keyValue="model"
            handleChange={handleChange}
            key="model"
          />
        </div>
        <div className="home__hero__content__secondLine__item">
          <OptionInputMultiple
            options={banOptions}
            holder="Ban növü"
            keyValue="banType"
            handleChange={handleChange}
            key="banType"
          />
        </div>
        <div className="home__hero__content__secondLine__item">
          <OptionInputSingle
            options={cityOptions}
            holder="Şəhər"
            keyValue="city"
            handleChange={handleChange}
            key="city"
          />
        </div>
      </div>
      <div className="home__hero__content__thirdLine">
        <div className="home__hero__content__thirdLine__item">
          <div className="home__hero__content__thirdLine__item__amount">
            <input
              type="number"
              value={data.minPrice}
              name="minPrice"
              onChange={handleChange}
              placeholder="Qiymət,Min"
              className="amount__min"
            />
            <input
              type="number"
              value={data.maxPrice}
              name="maxPrice"
              onChange={handleChange}
              placeholder="Max"
              className="amount__max"
            />
          </div>
        </div>
        <div className="home__hero__content__thirdLine__item">
          <select
            className="home__hero__content__thirdLine__item__currency"
            value={data.currency}
            onChange={handleCurrencyChange}
            name="currency"
          >
            <option value="AZN">AZN</option>
            <option value="USD">USD</option>
            <option value="EUR">EUR</option>
          </select>
        </div>
        <div className="home__hero__content__thirdLine__item">
          <div className="home__hero__content__thirdLine__item__year">
            <input
              type="number"
              value={data.minYear}
              name="minYear"
              onChange={handleChange}
              placeholder="İl,Min"
              className="year__min"
            />
            <input
              type="number"
              value={data.maxYear}
              name="maxYear"
              onChange={handleChange}
              placeholder="Max"
              className="year__max"
            />
          </div>
        </div>
        <div className="home__hero__content__thirdLine__item elanCode">
          <input
            type="text"
            name="code"
            value={data.code}
            onChange={handleChange}
            placeholder="Elan kodu"
            className="home__hero__content__thirdLine__item__code"
          />
        </div>
      </div>
      <div className="home__hero__content__fourthLine">
        <button
          className="home__hero__content__fourthLine__clearBtn"
          onClick={handleFormClear}
        >
          Təmizlə <CloseIcon />
        </button>
        <div className="helper" />
        <button
          onClick={() => navigate("/more-filters")}
          className="home__hero__content__fourthLine__moreFilter"
        >
          Daha çox filtr <TuneIcon />
        </button>
        <button
          className="home__hero__content__fourthLine__search"
          onClick={handleSearch}
        >
          <div className="home__hero__content__fourthLine__search__text">
            Axtar
          </div>
          <SearchIcon />
        </button>
      </div>
    </div>
  );
};

export default HeroFilter;
