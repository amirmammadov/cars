import "../../../sass/components/_extraInfo.scss";

const ExtraInfo = ({ product }) => {
  return (
    <div className="extra__info">
      <div className="extra__info__updated">
        <div className="extra__info__updated__item">Elan kodu: 13356655</div>
        <div className="extra__info__updated__item">
          <img src="/carDetail/calendar.png" alt="view" />
          <p>Bugün, 11:45</p>
        </div>
        <div className="extra__info__updated__item">
          <img src="/carDetail/view.png" alt="view" />
          <p>1155</p>
        </div>
      </div>
      <div className="extra__info__table">
        {product.extraInfo.map((item, index) => (
          <div key={index} className="extra__info__table__item">
            <img
              src={`/carDetail/extra/${item.imgName}.png`}
              alt="gear"
              className="extra__info__table__item__img"
            />
            <div className="extra__info__table__item__content">
              <div className="extra__info__table__item__content__title">
                {item.title}
              </div>
              <div className="extra__info__table__item__content__value">
                {item.value}
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ExtraInfo;
