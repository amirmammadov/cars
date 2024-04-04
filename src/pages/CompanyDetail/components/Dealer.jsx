import "../../../sass/components/_dealer.scss";

const Dealer = () => {
  return (
    <div className="about__dealer">
      <div className="about__dealer__title">Dealer haqqında</div>
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
        <div className="about__dealer__content__column">
          <div className="about__dealer__content__column__title">Elan sayı</div>
          <div className="about__dealer__content__column__value">20</div>
        </div>
      </div>
    </div>
  );
};

export default Dealer;
