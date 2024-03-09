import "../../../sass/components/_dealer.scss";

const Dealer = () => {
  return (
    <div className="about__dealer">
      <div className="about__dealer__title">Dealer haqqında</div>
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
    </div>
  );
};

export default Dealer;
