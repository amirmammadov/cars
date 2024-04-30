import "../../../sass/components/_accOffers.scss";

import { offers } from "../../../mockData/offer";

const Offers = ({ handleOffer }) => {
  return (
    <div className="acc__offers">
      <div className="acc__offers__title">Qiymət təklifləri</div>
      <div className="acc__offers__content">
        <div className="acc__offers__content__titles">
          <div className="acc__offers__content__titles__item">Elan adı</div>
          <div className="acc__offers__content__titles__item">Elan kodu</div>
          <div className="acc__offers__content__titles__item">Təklif sayı</div>
        </div>
        {offers.map((offer) => (
          <div
            key={offer.id}
            className="acc__offers__content__result"
            onClick={() => handleOffer(offer.id)}
          >
            <div className="acc__offers__content__result__name">
              {offer.offerName}
            </div>
            <div className="acc__offers__content__result__code">
              {offer.code}
            </div>
            <div className="acc__offers__content__result__count">
              {offer.offerCount}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Offers;
