import { useState, useEffect } from "react";
import styles from "./style.module.scss";
import OrderFilter from "../../components/orderFilter/OrderFilter";
// import { products } from "../../mockData/products";
import ProductCart from "../../components/productCard/ProductCart";
import { Pagination } from "@mui/material";
import { Icon } from "@fluentui/react";

// import { useProjects } from "../../services/queries";
import { products } from "../../mockData/products";

import KeyboardArrowUpIcon from "@mui/icons-material/KeyboardArrowUp";

function Advertisement() {
  const [isSeenUpArrow, setIsSeenUpArrow] = useState(false);

  // const { data, isPending } = useProjects();

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

  // if (isPending) {
  //   return;
  // }

  return (
    <div className={styles.container}>
      <div className={styles.titleWrapper}>
        <h1>Statistik elanlar</h1>
        <a href="/elan">
          Hamısına bax{" "}
          <span>
            <Icon iconName="ChromeBackMirrored" />
          </span>
        </a>
        {/* <OrderFilter title="Rating" /> */}
      </div>

      <div className={styles.products}>
        {products.map((item) => (
          <ProductCart key={item.id} product={item} />
        ))}
        {products.map((item) => (
          <ProductCart key={item.id} product={item} />
        ))}
      </div>
      {/* //////////////////////////// */}
      <div className={styles.titleWrapper}>
        <h1>Yeni elanlar</h1>
        <a href="/elan">
          Hamısına bax{" "}
          <span>
            <Icon iconName="ChromeBackMirrored" />
          </span>
        </a>

        {/* <OrderFilter title="Tarix" /> */}
      </div>

      <div className={styles.products}>
        {products.map((item) => (
          <ProductCart key={item.id} product={item} />
        ))}
        {products.map((item) => (
          <ProductCart key={item.id} product={item} />
        ))}
      </div>

      {/* //////////////////////////// */}
      <div className={styles.titleWrapper}>
        <h1>Salon elanları</h1>
        <OrderFilter title="Sırala" />
      </div>

      <div className={styles.products}>
        {products.map((item) => (
          <ProductCart key={item.id} product={item} />
        ))}
      </div>

      {/* //////////////////////////// */}
      <div className={styles.titleWrapper}>
        <h1>Tövsiyə olunanlar</h1>
        <OrderFilter title="Sırala" />
      </div>

      <div className={styles.products}>
        {products.map((item) => (
          <ProductCart key={item.id} product={item} />
        ))}
        {products.map((item) => (
          <ProductCart key={item.id} product={item} />
        ))}
      </div>

      <Pagination count={10} shape="rounded" />
      {isSeenUpArrow && (
        <button className={styles.upArrow} onClick={handleUpToTop}>
          <KeyboardArrowUpIcon sx={{ color: "#7b7b7b", fontSize: 30 }} />
        </button>
      )}
    </div>
  );
}

export default Advertisement;
