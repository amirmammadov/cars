import "../../../sass/components/_carUpdated.scss";

const CarUpdated = () => {
  return (
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
  );
};

export default CarUpdated;
