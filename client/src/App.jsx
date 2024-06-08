import { Route, Routes } from "react-router-dom";

import Layout from "./shared/layout";

import { useLoggedIn } from "./hooks/useLoggedIn";

import {
  CarDetail,
  Advertisement,
  Salons,
  CompanyDetail,
  Comparison,
  Faq,
  Favorites,
  Homepage,
  // MoreFilters,
  NewPromotion,
  SearchResult,
  Account,
  NotFound,
  Filters,
} from "./pages/index";
import Registration from "./pages/Authentication/Registration";
import Login from "./pages/Authentication/Login";

function App() {
  const isLoggedIn = useLoggedIn();

  return (
    <Layout>
      <Routes>
        <Route path="/" element={<Homepage />} />
        <Route path="/elan" element={<Advertisement />} />
        <Route path="/faq" element={<Faq />} />
        <Route path="/more-filters" element={<Filters />} />
        <Route path="/new-promotion" element={<NewPromotion />} />
        <Route path="/auto/:id" element={<CarDetail />} />
        <Route path="/result" element={<SearchResult />} />
        <Route path="/comparison" element={<Comparison />} />
        <Route path="/favorites" element={<Favorites />} />
        <Route path="/company/:id" element={<CompanyDetail />} />
        <Route path="/register" element={<Registration />} />
        <Route path="/login" element={<Login />} />
        <Route path="/salons" element={<Salons />} />
        <Route path="/salons/:id" element={<CompanyDetail />} />
        {isLoggedIn && <Route path="/user" element={<Account />} />}
        <Route path="*" element={<NotFound />} />
      </Routes>
    </Layout>
  );
}

export default App;
