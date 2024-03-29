import styles from "./styles.module.scss";
import logo from "../../assets/logo.png";
import { Icon } from "@fluentui/react";
import InstagramIcon from "@mui/icons-material/Instagram";
import FacebookIcon from "@mui/icons-material/Facebook";
import LinkedInIcon from "@mui/icons-material/LinkedIn";

import { Link } from "react-router-dom";

const mainLinks = [
  { id: 1, text: "Ana səhifə", url: "/" },
  { id: 2, text: "Elanlar", url: "/elan" },
  { id: 3, text: "FAQ", url: "/faq" },
  { id: 4, text: "Qaydalar və şərtlər", url: "#" },
];

const contactLinks = [
  { id: 1, text: "Bakı, Azərbaycan", icon: "Poi" },
  { id: 2, text: "moto4official@gmail.com", icon: "Mail" },
  { id: 3, text: "+994 70 562 12 69", icon: "Phone" },
];

function Footer() {
  const scrollToTop = () => {
    window.scrollTo(0, 0);
  };

  return (
    <div className={styles.footer}>
      <img src={logo} alt="" />
      <div className={styles.footerContent}>
        <div className={styles.footerContentItem}>
          <h2 className={styles.footerHeading}>Şirkət</h2>
          <div className={styles.footerLists} onClick={scrollToTop}>
            {mainLinks.map((link) => (
              <Link
                key={link.id}
                to={link.url}
                className={styles.footerListsItem}
              >
                {link.text}
              </Link>
            ))}
          </div>
        </div>
        <div className={styles.footerContentItem}>
          <h2 className={styles.footerHeading}>Əlaqə</h2>
          <div className={styles.footerLists}>
            {contactLinks.map((link) => (
              <div key={link.id} className={styles.footerListsItem}>
                <div className={styles.footerListsItemIcon}>
                  <Icon
                    iconName={link.icon}
                    style={{
                      display: "block",
                    }}
                  />
                </div>
                <div className={styles.footerListsItemText}>{link.text}</div>
              </div>
            ))}
          </div>
        </div>
        <div className={styles.footerContentItem}>
          <div className={styles.lastItemContent}>
            <h2 className={styles.footerHeading}>Bizi izlə</h2>
            <div className={styles.footerSocialLinks}>
              <Link to="#" className={styles.footerSocialLinksItem}>
                <InstagramIcon />
              </Link>
              <Link to="#" className={styles.footerSocialLinksItem}>
                <FacebookIcon />
              </Link>
              <Link
                to="https://www.linkedin.com/company/motofour2023"
                target="_blank"
                className={styles.footerSocialLinksItem}
              >
                <LinkedInIcon />
              </Link>
            </div>
          </div>
        </div>
      </div>
      <p className={styles.copyright}>
        <span>&copy;</span> 2024 by MOTO4
      </p>
    </div>
  );
}

export default Footer;
