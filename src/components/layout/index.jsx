import Header from "./Header";
import Footer from "./Footer";
import TopBar from "./TopBar";

function Layout({ children }) {
  return (
    <>
      <TopBar />
      <Header />
      {children}
      <Footer />
    </>
  );
}

export default Layout;
