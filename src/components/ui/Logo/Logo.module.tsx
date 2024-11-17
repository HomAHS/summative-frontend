import { FC } from "react";

import LogoImage from "@img/logo.svg";

import styles from "./Logo.module.scss";
import Link from "next/link";

const Logo: FC = () => {
  return (
    <Link href="/" className={styles.wrapper}>
      <div className={styles.logo}>
        <LogoImage />
      </div>
      <h2 className={styles.title}>Summative</h2>
    </Link>
  );
};

export default Logo;
