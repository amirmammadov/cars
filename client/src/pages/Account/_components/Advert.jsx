import { useState } from "react";

import "../../../sass/components/_accAdvert.scss";

import ProductCart from "../../../components/productCard/ProductCart";

const tabs = [
  {
    id: 1,
    title: "Hamısı",
    count: 6,
  },
  {
    id: 2,
    title: "Aktiv",
    count: 3,
  },
  {
    id: 3,
    title: "Satılıb",
    count: 1,
  },
  {
    id: 4,
    title: "Vaxtı bitmiş",
    count: 0,
  },
];

const mockCarData = {
  id: 15,
  salon: false,
  name: "Audi A4",
  price: "21 000",
  currency: "$",
  capacity: "2.5L",
  year: "2018",
  distance: "180 800 km",
  location: "Sumqayıt",
  date: "Bugün",
  img: "car4",
  leasing: false,
  credit: false,
  barter: true,
};

const Advert = () => {
  const [currTab, setCurrTab] = useState(tabs[0]);

  const handleCurTab = (id) => {
    const newTab = tabs.filter((tab) => tab.id === id);

    setCurrTab(newTab[0]);
  };

  return (
    <div className="account__advert">
      <div className="account__advert__title">Elanlarım</div>
      <div className="account__advert__tabs">
        {tabs.map((tab) => (
          <div
            key={tab.id}
            className={`account__advert__tabs__item ${
              tab.id === currTab.id && "active"
            }`}
            onClick={() => handleCurTab(tab.id)}
          >
            {tab.title} ({tab.count}) <span></span>
          </div>
        ))}
      </div>
      <div className="account__advert__content">
        {[...Array(currTab.count).keys()].length === 0 ? (
          <div className="account__advert__content__empty">
            Nəticə tapılmadı
          </div>
        ) : (
          [...Array(currTab.count).keys()].map((_, index) => (
            <ProductCart key={index} product={mockCarData} />
          ))
        )}
      </div>
    </div>
  );
};

export default Advert;
