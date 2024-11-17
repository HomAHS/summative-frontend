import { FC } from "react";

import Logo from "@components/ui/Logo/Logo.module";

import styles from "./Header.module.scss";

const Header: FC = () => {
  return (
    <header className={styles.wrapper}>
      <div className="container">
        <Logo />
      </div>
    </header>
  );
};

export default Header;
