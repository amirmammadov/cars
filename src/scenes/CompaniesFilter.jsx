import { useState } from "react";

import "../sass/layout/_companiesFilter.scss";

import OptionInputSingle from "../components/OptionInputSingle/OptionInputSingle";

import SearchIcon from "@mui/icons-material/Search";

import { companies, foreignCountries, rating, yearOptions } from "../constants";

const INITIAL_DATA = {
  company: "",
  country: "",
  rating: 1,
  minPrice: "",
  maxPrice: "",
  currency: "AZN",
  minYear: { title: "" },
  maxYear: { title: "" },
};

const CompaniesFilter = () => {
  const [data, setData] = useState(INITIAL_DATA);

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
    setClear(true);
  };

  const handleClear = () => {
    setData(INITIAL_DATA);
    setClear(true);
  };

  return (
    <section className="companies__filter">
      <div className="companies__filter__colOne">
        <OptionInputSingle
          options={companies}
          holder="Şirkət adı"
          keyValue="company"
          clear={clear}
          setClear={setClear}
          handleChange={handleChange}
          key="company"
        />
        <OptionInputSingle
          options={foreignCountries}
          holder="Xarici ölkə"
          keyValue="country"
          clear={clear}
          setClear={setClear}
          handleChange={handleChange}
          key="country"
        />
        <OptionInputSingle
          options={rating}
          holder="Reyting"
          keyValue="rating"
          clear={clear}
          setClear={setClear}
          handleChange={handleChange}
          key="rating"
        />
        <div className="companies__filter__colOne__year">
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
      <div className="companies__filter__colTwo">
        <div className="companies__filter__colTwo__price">
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
          value={data.currency}
          onChange={handleCurrencyChange}
          name="currency"
          className="companies__filter__colTwo__currency"
        >
          <option value="AZN">AZN</option>
          <option value="USD">USD</option>
          <option value="EUR">EUR</option>
        </select>
      </div>
      <div className="companies__filter__colThree">
        <button
          onClick={handleClear}
          className="companies__filter__colThree__clear"
        >
          Təmizlə &#10005;
        </button>
        <button
          onClick={handleSearch}
          className="companies__filter__colThree__search"
        >
          <div className="companies__filter__colThree__text">Axtar</div>
          <SearchIcon />
        </button>
      </div>
    </section>
  );
};

export default CompaniesFilter;
