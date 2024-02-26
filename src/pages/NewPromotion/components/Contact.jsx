import { useState } from "react";

import "../../../sass/components/_contact.scss";

import { useDispatch } from "react-redux";
import { setNewPromotionState } from "../../../features/appSlice";

import OptionInputSingle from "../../../components/OptionInputSingle/OptionInputSingle";

import { cityOptions } from "../../../constants";

const Contact = () => {
  const dispatch = useDispatch();

  const [clear, setClear] = useState(false);

  const handleChange = ({ target }) => {
    dispatch(setNewPromotionState({ name: target.name, value: target.value }));
  };

  return (
    <div className="contact">
      <div className="contact__title">Əlaqə</div>
      <div className="contact__content">
        <input
          type="text"
          placeholder="Ad"
          name="firstName"
          onChange={(e) => handleChange(e)}
          className="contact__content__item"
        />
        <input
          type="text"
          placeholder="Soyad"
          name="lastName"
          onChange={(e) => handleChange(e)}
          className="contact__content__item"
        />
        <OptionInputSingle
          options={cityOptions}
          holder="Şəhər"
          keyValue="city"
          clear={clear}
          setClear={setClear}
          handleChange={handleChange}
        />
        <select
          className="contact__content__select"
          name="phonePrefix"
          onChange={(e) => handleChange(e)}
        >
          <option value="(050)">(050)</option>
          <option value="(055)">(055)</option>
          <option value="(070)">(070)</option>
        </select>
        <input
          type="number"
          name="phone"
          onChange={(e) => handleChange(e)}
          placeholder="Mobil nömrə"
          className="contact__content__phone"
        />
        <input
          type="mail"
          name="mail"
          onChange={(e) => handleChange(e)}
          placeholder="E-mail"
          className="contact__content__item"
        />
      </div>
    </div>
  );
};

export default Contact;
