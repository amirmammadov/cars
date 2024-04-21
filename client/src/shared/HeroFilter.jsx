import { useState } from "react";

import FilterTab from "../components/FilterTab/FilterTab";
import OptionInputMultiple from "../components/OptionInputMultiple/OptionInputMultiple";
import OptionInputSingle from "../components/OptionInputSingle/OptionInputSingle";

import SearchIcon from "@mui/icons-material/Search";

import TuneIcon from "@mui/icons-material/Tune";
import CloseIcon from "@mui/icons-material/Close";

import "../sass/layout/_heroFilter.scss";

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

const INITIAL_DATA = {
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

const HeroFilter = () => {
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
    navigate("/result");
  };

  const handleClear = () => {
    setData(INITIAL_DATA);
    setTabOneDefaultValue("all");
    setTwoOneDefaultValue("all");

    setClear(true);
  };

  return (
    <div className="home__hero__content">
      <div className="home__hero__content__title">Filtrlə</div>
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
        <div className="home__hero__content__secondLine__item">
          <OptionInputSingle
            options={brandOptions}
            holder="Marka"
            keyValue="brand"
            clear={clear}
            setClear={setClear}
            handleChange={handleChange}
            key="brand"
          />
        </div>
        <div className="home__hero__content__secondLine__item">
          <OptionInputMultiple
            options={modelOptions}
            holder="Model"
            keyValue="model"
            clear={clear}
            setClear={setClear}
            handleChange={handleChange}
            key="model"
          />
        </div>
        <div className="home__hero__content__secondLine__item tablet__none">
          <OptionInputMultiple
            options={banOptions}
            holder="Ban növü"
            keyValue="banType"
            clear={clear}
            setClear={setClear}
            handleChange={handleChange}
            key="banType"
          />
        </div>
        <div className="home__hero__content__secondLine__item tablet__none">
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
      </div>
      <div className="home__hero__content__thirdLine">
        <div className="home__hero__content__thirdLine__item">
          <div className="home__hero__content__thirdLine__item__amount">
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
          onClick={handleClear}
        >
          Təmizlə <CloseIcon />
        </button>
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
