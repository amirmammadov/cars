import { Route, Routes } from "react-router-dom";

import Layout from "./shared/layout";
import Homepage from "./pages/Homepage/Homepage";
import Faq from "./pages/Faq/Faq";
import Advertisement from "./pages/Advertisement/Advertisement";
import MoreFilters from "./pages/MoreFilters/MoreFilters";
import NewPromotion from "./pages/NewPromotion/NewPromotion";
import CarDetail from "./pages/CarDetail/CarDetail";
import SearchResult from "./pages/SearchResult/SearchResult";
import ComparisonPage from "./pages/Comparison/ComparisonPage";
import Favorites from "./pages/Favorites/Favorites";
import Companies from "./pages/Companies/Companies";
import CompanyDetail from "./pages/CompanyDetail/CompanyDetail";

function App() {
  return (
    <Layout>
      <Routes>
        <Route path="/" element={<Homepage />} />
        <Route path="/elan" element={<Advertisement />} />
        <Route path="/faq" element={<Faq />} />
        <Route path="/more-filters" element={<MoreFilters />} />
        <Route path="/new-promotion" element={<NewPromotion />} />
        <Route path="/auto/:id" element={<CarDetail />} />
        <Route path="/result" element={<SearchResult />} />
        <Route path="/comparison" element={<ComparisonPage />} />
        <Route path="/favorites" element={<Favorites />} />
        <Route path="/company" element={<Companies />} />
        <Route path="/company/:id" element={<CompanyDetail />} />
      </Routes>
    </Layout>
  );
}

export default App;
