import "../../../sass/components/_aboutDealer.scss";

import { locationOfCity } from "../../../constants";

const AboutDealer = ({ product }) => {
  return (
    <div className="about__dealer">
      <div className="about__dealer__title">
        {product.leasing ? "Salon haqqında" : "Dealer haqqında"}
      </div>
      <div className="about__dealer__rating">
        <div className="about__dealer__rating__number">4.0</div>
        <div className="about__dealer__rating__stars">
          <img src="/carDetail/filled.png" alt="star" />
          <img src="/carDetail/filled.png" alt="star" />
          <img src="/carDetail/filled.png" alt="star" />
          <img src="/carDetail/filled.png" alt="star" />
          <img src="/carDetail/empty.png" alt="star" />
        </div>
      </div>
      <div className="about__dealer__content">
        <div className="about__dealer__content__column">
          <div className="about__dealer__content__column__title">
            İş saatları:
          </div>
          <div className="about__dealer__content__column__value">
            Bazar ertəsi- Cümə 09:00-18:00
          </div>
          <div className="about__dealer__content__column__value">
            Şənbə 09:00-13:00
          </div>
        </div>
        <div className="about__dealer__content__column">
          <div className="about__dealer__content__column__title">
            Əlaqə nömrəsi:
          </div>
          <div className="about__dealer__content__column__value">
            +994 50 555 69 96
          </div>
        </div>
      </div>
      <div className="about__dealer__extra">
        <div className="about__dealer__extra__item">
          <img src="/carDetail/calendar2.png" alt="calendar" />
          <div className="about__dealer__extra__item__content">
            <div className="about__dealer__extra__item__content__key">
              Moto4-dadır
            </div>
            <div className="about__dealer__extra__item__content__value">
              2022
            </div>
          </div>
        </div>
        <div className="about__dealer__extra__item">
          <img src="/carDetail/car.png" alt="car" />
          <div className="about__dealer__extra__item__content">
            <div className="about__dealer__extra__item__content__key">
              Elanları
            </div>
            <div className="about__dealer__extra__item__content__value">20</div>
          </div>
        </div>
        <div className="about__dealer__extra__item">
          <img src="/carDetail/like.png" alt="like" />
          <div className="about__dealer__extra__item__content">
            <div className="about__dealer__extra__item__content__key">
              Rəylər
            </div>
            <div className="about__dealer__extra__item__content__value">
              95%
            </div>
          </div>
        </div>
      </div>
      {product.leasing && (
        <div className="about__dealer__special">
          <div className="about__dealer__special__divider" />
          <div className="about__dealer__special__map">
            <div className="about__dealer__special__map__title">Xəritə</div>
            <div className="about__dealer__special__map__links">
              <div className="about__dealer__special__map__links__place">
                Bakı şəh., Sumqayıt şossesi, 6-cı km.
              </div>
              <div className="about__dealer__special__map__links__switch">
                Xəritəyə keç
              </div>
            </div>
          </div>
          <iframe
            src={locationOfCity}
            loading="lazy"
            className="about__dealer__special__view"
            title="Car place"
          ></iframe>
        </div>
      )}
    </div>
  );
};

export default AboutDealer;
