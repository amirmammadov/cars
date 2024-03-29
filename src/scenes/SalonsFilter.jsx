import { useState } from "react";

import "../sass/layout/_salonsFilter.scss";

import OptionInputSingle from "../components/OptionInputSingle/OptionInputSingle";

import SearchIcon from "@mui/icons-material/Search";

import { companies, foreignCountries, rating } from "../constants";

const INITIAL_DATA = {
  company: "",
  country: "",
  rating: 1,
};

const SalonsFilter = () => {
  const [data, setData] = useState(INITIAL_DATA);

  const [clear, setClear] = useState(false);

  const handleChange = ({ target }) => {
    setData((prevValues) => ({
      ...prevValues,
      [target.name]: target.value,
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
      <div className="companies__filter__title">Filtrlə</div>
      <div className="companies__filter__colOne">
        <div className="companies__filter__colOne__item">
          <OptionInputSingle
            options={companies}
            holder="Şirkət adı"
            keyValue="company"
            clear={clear}
            setClear={setClear}
            handleChange={handleChange}
            key="company"
          />
        </div>
        <div className="companies__filter__colOne__item">
          <OptionInputSingle
            options={foreignCountries}
            holder="Xarici ölkə"
            keyValue="country"
            clear={clear}
            setClear={setClear}
            handleChange={handleChange}
            key="country"
          />
        </div>
        <div className="companies__filter__colOne__item">
          <OptionInputSingle
            options={rating}
            holder="Reyting"
            keyValue="rating"
            clear={clear}
            setClear={setClear}
            handleChange={handleChange}
            key="rating"
          />
        </div>
      </div>
      <div className="companies__filter__colTwo">
        <button
          onClick={handleClear}
          className="companies__filter__colTwo__clear"
        >
          Təmizlə &#10005;
        </button>
        <button
          onClick={handleSearch}
          className="companies__filter__colTwo__search"
        >
          <div className="companies__filter__colTwo__text">Axtar</div>
          <SearchIcon />
        </button>
      </div>
    </section>
  );
};

export default SalonsFilter;
