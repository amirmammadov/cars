import "../../../sass/components/_extraInfo.scss";

const ExtraInfo = ({ product }) => {
  return (
    <div className="extra__info">
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
