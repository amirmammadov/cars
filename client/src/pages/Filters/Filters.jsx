import "../../sass/pages/_filters.scss";

import BreadCrumbs from "../../components/BreadCrumbs/BreadCrumbs";
import Fundamentals from "./_components/Fundamentals";

const Filters = () => {
  return (
    <div className="filters">
      <BreadCrumbs curPage="Axtarışım" />
      <div className="filters__title">Ətraflı axtarış</div>
      <div className="filters__content">
        <Fundamentals />
      </div>
    </div>
  );
};

export default Filters;
