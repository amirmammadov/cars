import { useState } from "react";
import styles from "./styles.module.scss";
import { Icon } from "@fluentui/react";
import { useNavigate } from "react-router-dom";
import {
  FormControl,
  FormControlLabel,
  Radio,
  RadioGroup,
} from "@mui/material";
import { comparisons } from "../../mockData/mock";
// import { products } from "../../mockData/products";
import ProductCart from "../../components/productCard/ProductCart";

// import { useProjects } from "../../services/queries";
import { products } from "../../mockData/products";

function ComparisonPage() {
  const navigate = useNavigate();
  const [count, setCount] = useState(2);

  // const { data, isPending } = useProjects();

  const comparisonPrdoucts = products.slice(0, count);

  // if (isPending) {
  //   return;
  // }

  return (
    <div className={styles.container}>
      <h1>Müqayisələr</h1>
      {!count ? (
        <div className={styles.noCard}>
          <p>Müqayisə etmək üçün elan əlavə olunmayıb.</p>
          <button onClick={() => navigate("/elan")}>
            <span>
              <Icon iconName="Add" />
            </span>
            Elan əlavə et
          </button>
        </div>
      ) : (
        <div className={styles.wrapper}>
          <div className={styles.top}>
            <div className={styles.leftBar}>
              <p className={styles.deleteLink} onClick={() => setCount(0)}>
                Hamısını sil{" "}
                <span>
                  <Icon iconName="Delete" />
                </span>
              </p>
              <FormControl className={styles.radioGroup}>
                <RadioGroup defaultValue="all">
                  {comparisons.map((item, index) => (
                    <FormControlLabel
                      key={index}
                      control={
                        <Radio
                          sx={{
                            color: "#bbbbbb",
                            "&.Mui-checked": {
                              color: "#620985",
                            },
                          }}
                        />
                      }
                      value={item.value}
                      label={item.label}
                    />
                  ))}
                </RadioGroup>
              </FormControl>
              <ul className={styles.infoList}>
                {products[0].extraInfo.map((item, index) => (
                  <li key={index}>{item.title}</li>
                ))}
              </ul>
            </div>
            <div className={styles.productWrapper}>

            {comparisonPrdoucts.map((product) => (
              <div key={product.id} className={styles.products}>
                <button
                  className={styles.cancelBtn}
                  onClick={() => setCount(count - 1)}
                >
                  <Icon iconName="ChromeClose" />
                </button>
                <ProductCart className={styles.product} product={product} />
                <ul className={styles.infoList}>
                  {product.extraInfo.map((item, index) => (
                    <li key={index}>{item.value}</li>
                  ))}
                </ul>
              </div>
            ))}

            {/* {count < 3 && ( */}
              <div
                onClick={() => {
                  setCount(count + 1);
                }}
                className={styles.addBox}
              >
                <button>
                  <Icon iconName="Add" />
                </button>
              </div>
            </div>

            {/* )} */}
          </div>
        </div>
      )}
    </div>
  );
}

export default ComparisonPage;
