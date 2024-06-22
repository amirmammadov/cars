import { useState } from "react";

import {
  Type,
  Price,
  MoreOptions,
  Comment,
  Pictures,
  Contact,
} from "./components/index";

import { others, supplies } from "../../constants";

import BreadCrumbs from "../../components/BreadCrumbs/BreadCrumbs";
import CheckBoxes from "../../components/CheckBoxes/CheckBoxes";

import { useNavigate } from "react-router-dom";

import { useSelector, useDispatch } from "react-redux";
import {
  setPromotionEmpty,
  resetPromotionEmpty,
  setNewPromotionState,
} from "../../features/appSlice";

import "../../sass/pages/_newPromotion.scss";

const NewPromotion = () => {
  const [hasEmptyField, setHasEmptyField] = useState(false);

  const navigate = useNavigate();

  const dispatch = useDispatch();

  const newPromotion = useSelector((state) => state.newPromotion);

  const submitNewPromotion = (e) => {
    e.preventDefault();

    dispatch(resetPromotionEmpty());
    setHasEmptyField(false);

    let selectedValues = Object.entries(newPromotion);
    let emptyPairs = [];

    selectedValues.forEach((pair) => {
      if (!pair[1]) {
        emptyPairs.push(pair[0]);
        dispatch(setPromotionEmpty(pair[0]));
      }
    });

    if (emptyPairs.length !== 0) {
      setHasEmptyField(true);
      return;
    }

    navigate("/");
    window.scrollTo(0, 0);
  };

  return (
    <main className="new__promotion">
      <div className="new__promotion__titles">
        <BreadCrumbs curPage="Elan yerləşdir" />
        <div className="new__promotion__titles__main">Elan yerləşdir</div>
      </div>
      <div className="new__promotion__content">
        <Type />
        <Price />
        <MoreOptions />
        <div className="new__promotion__content__divider" />
        <CheckBoxes
          others={supplies}
          title="Digər"
          name="supplies"
          dispatchFunc={setNewPromotionState}
        />
        <CheckBoxes
          others={others}
          title="Avtomobilin təchizatları"
          name="suppliesOther"
          dispatchFunc={setNewPromotionState}
        />
        <div className="new__promotion__content__divider" />
        <Comment />
        <Pictures />
        <Contact />
        <div className="new__promotion__content__divider" />
        <button
          type="submit"
          className="new__promotion__content__btn"
          onClick={(e) => submitNewPromotion(e)}
        >
          Elan yerləşdir
        </button>
        {hasEmptyField && (
          <p className="new__promotion__content__text">
            Bütün qırmızı xanaları doldurmaq mütləqdir.
          </p>
        )}
      </div>
    </main>
  );
};

export default NewPromotion;
