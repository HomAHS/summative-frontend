import { FC } from "react";

import styles from "./Main.module.scss";

const Main: FC = () => {
  return (
    <section className={styles.wrapper} id="section-main">
      <div className="container">
        <h1>Home</h1>
      </div>
    </section>
  );
};

export default Main;
