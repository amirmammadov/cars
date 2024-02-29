import "../../sass/components/_companyItem.scss";

import { Icon } from "@fluentui/react";

const CompanyItem = ({ img, companyName, phone }) => {
  return (
    <div className="companies__item">
      <img
        src={`/companies/${img}`}
        alt="company"
        className="companies__item__img"
      />
      <div className="companies__item__content">
        <div className="companies__item__content__title">{companyName}</div>
        <div className="companies__item__content__phone">{phone}</div>
      </div>
      <Icon iconName="HeartFill" className="companies__item__icon" />
    </div>
  );
};

export default CompanyItem;
