import "../../../sass/components/_others.scss";

const Others = ({ title, others }) => {
  return (
    <div className="filters__others">
      <div className="filters__others__title filtersOthersTitle">{title}</div>
      <div className="filters__others__content">
        {others.map((other) => (
          <div key={other.id} className="filters__others__content__item">
            <input
              type="checkbox"
              name="suppliesOther"
              value={other.title}
              className="filters__others__content__item__check"
            />
            <div className="filters__others__content__item__title">
              {other.title}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Others;
