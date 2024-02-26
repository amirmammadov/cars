import "../sass/layout/_carDetailCredit.scss";

import { useState } from "react";

import CloseIcon from "@mui/icons-material/Close";
import ArrowBackIosIcon from "@mui/icons-material/ArrowBackIos";
import Slider from "@mui/material/Slider";

const INITIAL_FORM_VALUES = {
  namePart: "",
  phoneNumber: "",
  currency: "AZN",
  finNumber: "",
};

const CarDetailCredit = ({ closeBtn }) => {
  const [activeStep, setActiveStep] = useState("calc");
  const [formValues, setFormValues] = useState(INITIAL_FORM_VALUES);
  const [warning, setWarning] = useState(false);
  const [showIdentity, setShowIdentity] = useState(false);
  const [payment, setPayment] = useState(5600);
  const [duration, setDuration] = useState(36);

  const { namePart, phoneNumber, currency, finNumber } = formValues;

  const handleChange = (target) => {
    setWarning(false);

    setFormValues((prevValues) => {
      return {
        ...prevValues,
        [target.name]: target.value,
      };
    });
  };

  const showIdentityHint = () => {
    setShowIdentity((prevValue) => !prevValue);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (namePart === "" || phoneNumber === "" || finNumber === "") {
      return setWarning(true);
    }

    console.log(formValues);
    setFormValues(INITIAL_FORM_VALUES);
    closeBtn();
  };

  return (
    <div className="credit__container">
      {activeStep === "calc" && (
        <div className="credit__container__stepOne">
          <div className="credit__container__stepOne__header">
            <div className="credit__container__stepOne__header__title">
              Hissə-hissə al
            </div>
            <button
              onClick={() => closeBtn()}
              className="credit__container__stepOne__header__btn"
            >
              <CloseIcon />
            </button>
          </div>
          <div className="credit__container__stepOne__carTitle">
            Mercedes-Benz, S 500, 2021 il, 5.5 L, 110 000 km
          </div>
          <div className="credit__container__stepOne__calc">
            <div className="credit__container__stepOne__calc__item">
              <div className="credit__container__stepOne__calc__item__title">
                <div className="credit__container__stepOne__calc__item__title__text">
                  İlkin ödəniş
                </div>
                <div className="credit__container__stepOne__calc__item__title__amount">
                  {payment}
                </div>
              </div>
              <Slider
                defaultValue={payment}
                onChange={(event, val) => setPayment(val)}
                aria-label="Payment"
                valueLabelDisplay="off"
                sx={{ color: "#d68a00" }}
                min={2000}
                max={10000}
                className="credit__container__stepOne__calc__item__slider"
              />
            </div>
            <div className="credit__container__stepOne__calc__item">
              <div className="credit__container__stepOne__calc__item__title">
                <div className="credit__container__stepOne__calc__item__title__text">
                  Kreditin müddəti
                </div>
                <div className="credit__container__stepOne__calc__item__title__amount">
                  {duration} AY
                </div>
              </div>
              <Slider
                defaultValue={duration}
                onChange={(event, val) => setDuration(val)}
                aria-label="Duration"
                sx={{ color: "#d68a00" }}
                valueLabelDisplay="off"
                min={12}
                max={72}
                className="credit__container__stepOne__calc__item__slider"
              />
            </div>
          </div>
          <button
            className="credit__container__stepOne__btn"
            onClick={() => setActiveStep("form")}
          >
            Davam et
          </button>
          <div className="credit__container__stepOne__note">
            İlkin tələb olunan vəsaitə komissiya, sığorta və s. xərclər
            daxildir.
          </div>
        </div>
      )}
      {activeStep === "form" && (
        <div className="credit__container__stepTwo">
          <div className="credit__container__stepTwo__header">
            <button
              className="credit__container__stepTwo__header__prevBtn"
              onClick={() => setActiveStep("calc")}
            >
              <ArrowBackIosIcon />
            </button>
            <div className="credit__container__stepTwo__header__title">
              Şəxsi məlumatlar
            </div>
            <button
              onClick={() => closeBtn()}
              className="credit__container__stepTwo__header__closeBtn"
            >
              <CloseIcon />
            </button>
          </div>
          <form
            className="credit__container__stepTwo__form"
            onSubmit={handleSubmit}
          >
            <div className="credit__container__stepTwo__form__item">
              <input
                type="text"
                value={namePart}
                name="namePart"
                onChange={(e) => handleChange(e.target)}
                className="credit__container__stepTwo__form__item__input"
                placeholder="Ad, soyad, ata adı*"
                autoComplete="off"
              />
            </div>
            <div className="credit__container__stepTwo__form__item phone">
              <select
                className="credit__container__stepTwo__form__item__select"
                value={currency}
                name="currency"
                onChange={(e) => handleChange(e.target)}
                autoComplete="off"
              >
                <option value="AZE">AZE</option>
                <option value="USD">USD</option>
                <option value="EUR">EUR</option>
              </select>
              <input
                type="number"
                value={phoneNumber}
                name="phoneNumber"
                onChange={(e) => handleChange(e.target)}
                className="credit__container__stepTwo__form__item__input"
                placeholder="Mobil nömrə*"
                autoComplete="off"
              />
            </div>
            <div className="credit__container__stepTwo__form__item">
              <input
                type="text"
                value={finNumber}
                name="finNumber"
                onChange={(e) => handleChange(e.target)}
                className="credit__container__stepTwo__form__item__input"
                placeholder="Şəxsiyyətin FİN kodu*"
                autoComplete="off"
              />
              <button
                className="credit__container__stepTwo__form__item__question"
                type="button"
                onClick={showIdentityHint}
              >
                <img src="/carDetail/question.png" alt="question" />
              </button>
            </div>
          </form>
          <button
            className="credit__container__stepTwo__btn"
            onClick={handleSubmit}
            type="submit"
          >
            Davam et
          </button>
          {warning && (
            <div className="credit__container__stepTwo__warning">
              * Olan qırmızı xanaları doldurmaq mütləqdir.
            </div>
          )}
          <div className="credit__container__stepTwo__note">
            Kredit tarixçəm haqqında məlumatlarımın Azərbaycan Kredit Bürosundan
            alınmasına və ASAN Finans/E-GOV sistemi vasitəsilə şəxsiyyəti təsdiq
            edən sənəd, iş yeri, əmək haqqı və s. məlumatlarımın City Finance
            BOKT MMC-yə təqdim edilməsinə razılıq veririəm.
          </div>
          <div className="credit__container__stepTwo__note">
            “Davam et” düyməsini sıxmaqla məlumatlarınızın City Finance
            tərəfindən emal olunmasına razılıq veririsiniz.
          </div>
          {showIdentity && (
            <div className="credit__container__stepTwo__identity">
              <CloseIcon
                onClick={() => setShowIdentity()}
                sx={{ color: "#ff2c2c", fontSize: 40 }}
                className="credit__container__stepTwo__identity__closeBtn"
              />
              <img
                src="/carDetail/identity.png"
                alt="identity"
                className="credit__container__stepTwo__identity__img"
              />
            </div>
          )}
        </div>
      )}
    </div>
  );
};

export default CarDetailCredit;
