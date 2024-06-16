import { useClearFilter } from "../../hooks/useClearFilter";
import { setMoreFilterValues } from "../../features/appSlice";

import "../../sass/pages/_filters.scss";

import { useSelector } from "react-redux";

import { filtersOtherValues, filtersSupplies } from "../../constants";

import { closeOutline, optionsOutline } from "ionicons/icons";
import { IonIcon } from "@ionic/react";

import BreadCrumbs from "../../components/BreadCrumbs/BreadCrumbs";
import CheckBoxes from "../../components/CheckBoxes/CheckBoxes";
import {
  Fundamentals,
  Technical,
  Outer,
  Inner,
  Additional,
} from "./_components";

const Filters = () => {
  const searchData = useSelector((state) => state.moreFilterValues);

  const handleClear = useClearFilter()[1];

  const handleFormClear = () => {
    handleClear();
  };

  const handleSearch = () => {
    console.log(searchData);
  };

  return (
    <div className="filters">
      <BreadCrumbs curPage="Axtarışım" />
      <div className="filters__title">Ətraflı axtarış</div>
      <div className="filters__content">
        <Fundamentals />
        <Technical />
        <Outer />
        <CheckBoxes
          others={filtersOtherValues}
          title="Digər"
          name="additional"
          dispatchFunc={setMoreFilterValues}
        />
        <Inner />
        <CheckBoxes
          others={filtersSupplies}
          title="Avtomobilin təchizatları"
          name="supplies"
          dispatchFunc={setMoreFilterValues}
        />
        <Additional />
      </div>
      <div className="filters__btns">
        <button className="filters__btns__clear" onClick={handleFormClear}>
          <div className="filters__btns__clear__text">Təmizlə</div>
          <IonIcon icon={closeOutline} />
        </button>
        <button className="filters__btns__search">
          <div className="filters__btns__clear__text" onClick={handleSearch}>
            Filtrlə
          </div>
          <IonIcon icon={optionsOutline} />
        </button>
      </div>
    </div>
  );
};

export default Filters;
