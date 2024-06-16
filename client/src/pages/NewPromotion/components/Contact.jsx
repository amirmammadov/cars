import { useClearFilter } from "../../../hooks/useClearFilter";

import "../../../sass/components/_contact.scss";

import { useDispatch, useSelector } from "react-redux";
import { setNewPromotionState } from "../../../features/appSlice";

import OptionInputSingle from "../../../components/OptionInputSingle/OptionInputSingle";

import { cityOptions } from "../../../constants";

const Contact = () => {
  const dispatch = useDispatch();

  const emptyValues = useSelector((state) => state.promotionEmpty);

  const isClear = useClearFilter()[0];

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
          name="sellerName"
          onChange={(e) => handleChange(e)}
          className={`contact__content__item ${
            emptyValues.includes("sellerName") && "isEmpty"
          }`}
          autoComplete="off"
        />
        <input
          type="text"
          placeholder="Soyad"
          name="sellerSurname"
          onChange={(e) => handleChange(e)}
          className={`contact__content__item ${
            emptyValues.includes("sellerSurname") && "isEmpty"
          }`}
          autoComplete="off"
        />
        <div className="contact__content__city">
          <OptionInputSingle
            options={cityOptions}
            holder="Şəhər"
            keyValue="city"
            clear={isClear}
            handleChange={handleChange}
            isEmpty={emptyValues.includes("city")}
          />
        </div>
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
          name="phoneNumber"
          onChange={(e) => handleChange(e)}
          placeholder="Mobil nömrə"
          className={`contact__content__phone ${
            emptyValues.includes("phoneNumber") && "isEmpty"
          }`}
          autoComplete="off"
        />
      </div>
    </div>
  );
};

export default Contact;
