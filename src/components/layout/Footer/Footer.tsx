import { FC } from "react";

import getAppWorkYears from "@helpers/getAppWorkYears";

import styles from "./Footer.module.scss";

const Footer: FC = () => {
  const appWorkYears = getAppWorkYears(2024);

  return (
    <footer className={styles.wrapper}>
      <div className="container">
        <p className={styles.copyright}>Summative © {appWorkYears}</p>
      </div>
    </footer>
  );
};

export default Footer;
