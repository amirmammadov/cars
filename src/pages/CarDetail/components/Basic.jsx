import "../../../sass/components/_basic.scss";

const Basic = ({ product }) => {
  return (
    <div className="basic">
      <div className="basic__title">Təməl məlumatlar</div>
      <div className="basic__content">
        {product.basicInfo.map((item, index) => (
          <div key={index} className="basic__content__item">
            <div className="basic__content__item__key">{item.key}</div>
            <div className="basic__content__item__value">{item.value}</div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Basic;
