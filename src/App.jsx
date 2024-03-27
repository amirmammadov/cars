import { Route, Routes } from "react-router-dom";

import Layout from "./shared/layout";

import {
  CarDetail,
  Advertisement,
  Salons,
  CompanyDetail,
  ComparisonPage,
  Faq,
  Favorites,
  Homepage,
  MoreFilters,
  NewPromotion,
  SearchResult,
} from "./pages/index";

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
        <Route path="/salons" element={<Salons />} />
        <Route path="/salons/:id" element={<CompanyDetail />} />
      </Routes>
    </Layout>
  );
}

export default App;
