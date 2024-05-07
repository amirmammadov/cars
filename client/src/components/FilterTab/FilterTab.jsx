import "../../sass/components/_filterTab.scss";

const FilterTab = ({
  tabs,
  handleChange,
  tabKey,
  tabDefaultValue,
  setTabDefaultValue,
}) => {
  const handleActiveItem = (e) => {
    setTabDefaultValue(e.target.id);

    handleChange({
      target: { name: tabKey, value: tabs[e.target.id] },
    });
  };

  return (
    <div className="filter__tab">
      {Object.entries(tabs).map(([key, value]) => (
        <div
          key={key}
          className={`filter__tab__item ${
            tabDefaultValue === key ? "active" : ""
          }`}
          id={key}
          onClick={(e) => handleActiveItem(e)}
        >
          {value}
        </div>
      ))}
    </div>
  );
};

export default FilterTab;
