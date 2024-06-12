import { useClearFilter } from "../../hooks/useClearFilter";

import "../../sass/pages/_filters.scss";

import { filtersOtherValues, filtersSupplies } from "../../constants";

import { closeOutline, optionsOutline } from "ionicons/icons";
import { IonIcon } from "@ionic/react";

import BreadCrumbs from "../../components/BreadCrumbs/BreadCrumbs";
import Fundamentals from "./_components/Fundamentals";
import Technical from "./_components/Technical";
import Outer from "./_components/Outer";
import Others from "./_components/Others";
import Inner from "./_components/Inner";
import Additional from "./_components/Additional";

const Filters = () => {
  const handleClear = useClearFilter()[1];

  const handleFormClear = () => {
    handleClear();
  };

  return (
    <div className="filters">
      <BreadCrumbs curPage="Axtarışım" />
      <div className="filters__title">Ətraflı axtarış</div>
      <div className="filters__content">
        <Fundamentals />
        <Technical />
        <Outer />
        <Others others={filtersOtherValues} title="Digər" />
        <Inner />
        <Others others={filtersSupplies} title="Avtomobilin təchizatları" />
        <Additional />
      </div>
      <div className="filters__btns">
        <button className="filters__btns__clear" onClick={handleFormClear}>
          <div className="filters__btns__clear__text">Təmizlə</div>
          <IonIcon icon={closeOutline} />
        </button>
        <button className="filters__btns__search">
          <div className="filters__btns__clear__text">Filtrlə</div>
          <IonIcon icon={optionsOutline} />
        </button>
      </div>
    </div>
  );
};

export default Filters;
