import { FC } from "react";

import styles from "./Header.module.scss";

const Header: FC = () => {
  return (
    <header className={styles.wrapper}>
      <div className="container">
        <h2>Header</h2>
      </div>
    </header>
  );
};

export default Header;
