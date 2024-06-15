import "../../sass/components/_filterTab.scss";

const FilterTab = ({
  tabs,
  handleChange,
  tabKey,
  tabDefaultValue,
  setTabDefaultValue,
  isDisabled,
}) => {
  const handleActiveItem = (e) => {
    setTabDefaultValue((prev) => {
      return { ...prev, [tabKey]: e.target.id };
    });

    handleChange({
      target: { name: tabKey, value: tabs[e.target.id] },
    });
  };

  return (
    <div className={`filter__tab ${isDisabled && "disabled"}`}>
      {Object.entries(tabs).map(([key, value]) => (
        <div
          key={key}
          className={`filter__tab__item ${
            tabDefaultValue === key ? "active" : ""
          } ${isDisabled && "disabled"}`}
          id={key}
          onClick={(e) => {
            if (isDisabled) {
              return;
            }
            handleActiveItem(e);
          }}
        >
          {value}
        </div>
      ))}
    </div>
  );
};

export default FilterTab;
