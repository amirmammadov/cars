import { useState, useEffect } from "react";
import "../../sass/pages/_home.scss";

import HomeCars from "../../scenes/HomeCars";
import Chatbot from "../../components/Chatbot/Chatbot";

import KeyboardArrowUpIcon from "@mui/icons-material/KeyboardArrowUp";

import HeroFilter from "../../shared/HeroFilter";

function Homepage() {
  const [isSeenUpArrow, setIsSeenUpArrow] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const scrollY = window.scrollY;

      setIsSeenUpArrow(scrollY > 500);
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const handleUpToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <main className="home">
      <div className="home__hero">
        <HeroFilter />
      </div>
      <HomeCars />
      {isSeenUpArrow && (
        <button className="up__arrow" onClick={handleUpToTop}>
          <KeyboardArrowUpIcon sx={{ color: "#7b7b7b", fontSize: 30 }} />
        </button>
      )}
      <div className="home__chatbot">
        <Chatbot />
      </div>
    </main>
  );
}

export default Homepage;
