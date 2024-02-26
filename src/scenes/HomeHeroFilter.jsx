import { useState } from "react";

import FilterTab from "../components/FilterTab/FilterTab";
import OptionInputMultiple from "../components/OptionInputMultiple/OptionInputMultiple";
import OptionInputSingle from "../components/OptionInputSingle/OptionInputSingle";

import SearchIcon from "@mui/icons-material/Search";

import "../sass/layout/_homeHeroFilter.scss";

import {
  filterTabOne,
  filterTabTwo,
  brandOptions,
  modelOptions,
  banOptions,
  cityOptions,
  yearOptions,
} from "../constants";

import { useNavigate } from "react-router-dom";

export const INITIAL_DATA = {
  tabOne: "hamısı",
  tabTwo: "hamısı",
  brand: "",
  model: [],
  banType: [],
  city: "",
  minPrice: "",
  maxPrice: "",
  currency: "AZN",
  minYear: { title: "" },
  maxYear: { title: "" },
  code: "",
};

const HomeHeroFilter = () => {
  const [data, setData] = useState(INITIAL_DATA);
  const [tabOneDefaultValue, setTabOneDefaultValue] = useState("all");
  const [tabTwoDefaultValue, setTwoOneDefaultValue] = useState("all");
  const navigate = useNavigate();

  const [clear, setClear] = useState(false);

  const handleChange = ({ target }) => {
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
    setTabOneDefaultValue("all");
    setTwoOneDefaultValue("all");
    setClear(true);
  };

  const handleClear = () => {
    setData(INITIAL_DATA);
    setTabOneDefaultValue("all");
    setTwoOneDefaultValue("all");

    setClear(true);
  };

  return (
    <div className="home__hero__content">
      <div className="home__hero__content__firstLine">
        <FilterTab
          handleChange={handleChange}
          tabs={filterTabOne}
          tabDefaultValue={tabOneDefaultValue}
          setTabDefaultValue={setTabOneDefaultValue}
          tabKey="tabOne"
          key="tabOne"
        />
        <FilterTab
          handleChange={handleChange}
          tabs={filterTabTwo}
          tabDefaultValue={tabTwoDefaultValue}
          setTabDefaultValue={setTwoOneDefaultValue}
          tabKey="tabTwo"
          key="tabTwo"
        />
      </div>
      <div className="home__hero__content__secondLine">
        <OptionInputSingle
          options={brandOptions}
          holder="Marka"
          keyValue="brand"
          clear={clear}
          setClear={setClear}
          handleChange={handleChange}
          key="brand"
        />
        <OptionInputMultiple
          options={modelOptions}
          holder="Model"
          keyValue="model"
          clear={clear}
          setClear={setClear}
          handleChange={handleChange}
          key="model"
        />
        <OptionInputMultiple
          options={banOptions}
          holder="Ban növü"
          keyValue="banType"
          clear={clear}
          setClear={setClear}
          handleChange={handleChange}
          key="banType"
        />
        <OptionInputSingle
          options={cityOptions}
          holder="Şəhər"
          keyValue="city"
          clear={clear}
          setClear={setClear}
          handleChange={handleChange}
          key="city"
        />
      </div>
      <div className="home__hero__content__thirdLine">
        <div className="home__hero__content__thirdLine__amount">
          <input
            type="text"
            value={data.minPrice}
            name="minPrice"
            onChange={handleChange}
            placeholder="Qiymət,Min"
            className="amount__min"
          />
          <input
            type="text"
            value={data.maxPrice}
            name="maxPrice"
            onChange={handleChange}
            placeholder="Max"
            className="amount__max"
          />
        </div>
        <select
          className="home__hero__content__thirdLine__currency"
          value={data.currency}
          onChange={handleCurrencyChange}
          name="currency"
        >
          <option value="AZN">AZN</option>
          <option value="USD">USD</option>
          <option value="EUR">EUR</option>
        </select>
        <div className="home__hero__content__thirdLine__year">
          <OptionInputSingle
            options={yearOptions}
            holder="İl,Min"
            isYear
            keyValue="minYear"
            clear={clear}
            setClear={setClear}
            handleChange={handleChange}
            key="minYear"
          />
          <OptionInputSingle
            options={yearOptions}
            holder="Max"
            isYear
            keyValue="maxYear"
            clear={clear}
            setClear={setClear}
            handleChange={handleChange}
            key="maxYear"
          />
        </div>
        <input
          type="text"
          name="code"
          value={data.code}
          onChange={handleChange}
          placeholder="Elan kodu"
          className="home__hero__content__thirdLine__code"
        />
      </div>
      <div className="home__hero__content__fourthLine">
        <button
          className="home__hero__content__fourthLine__clearBtn"
          onClick={handleClear}
        >
          Təmizlə &#10005;
        </button>
        <button
          onClick={() => navigate("/more-filters")}
          className="home__hero__content__fourthLine__moreFilter"
        >
          Daha çox filtr
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

export default HomeHeroFilter;
