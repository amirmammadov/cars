import Header from "./Header";
import Footer from "./Footer";
import TopBar from "./TopBar";

function Layout({ children }) {
  return (
    <main className="layout-main">
      <TopBar />
      <Header />
      {children}
      <Footer />
    </main>
  );
}

export default Layout;
