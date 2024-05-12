import { useState, useEffect } from "react";
import styles from "./style.module.scss";
import Car from "../../components/Car/Car";
import { Pagination } from "@mui/material";

import HeroFilter from "../../shared/HeroFilter";
import SectionHeader from "../../components/SectionHeader/SectionHeader";

import { products } from "../../mockData/products";

import KeyboardArrowUpIcon from "@mui/icons-material/KeyboardArrowUp";

function Advertisement() {
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
    <div className={styles.container}>
      <div className={styles.filter}>
        <HeroFilter />
      </div>

      <SectionHeader title="Önə çəkilmiş elanlar" />

      <div className={styles.products}>
        {products.map((item) => (
          <Car key={item.id} product={item} />
        ))}
      </div>

      <SectionHeader title="Yeni elanlar" />

      <div className={styles.products}>
        {products.map((item) => (
          <Car key={item.id} product={item} />
        ))}
      </div>

      <SectionHeader title="Salon elanları" />

      <div className={styles.products}>
        {products.map((item) => (
          <Car key={item.id} product={item} />
        ))}
      </div>

      <Pagination count={10} shape="rounded" className={styles.pagination} />

      {isSeenUpArrow && (
        <button className={styles.upArrow} onClick={handleUpToTop}>
          <KeyboardArrowUpIcon sx={{ color: "#7b7b7b", fontSize: 30 }} />
        </button>
      )}
    </div>
  );
}

export default Advertisement;
