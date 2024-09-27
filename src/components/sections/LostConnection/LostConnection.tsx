import { FC } from "react";

import styles from "./LostConnection.module.scss";

const LostConnection: FC = () => {
  return (
    <section className={styles.wrapper} data-aos="fade-down">
      <div className="container">
        <h1 className={styles.title}>Lost Connection!</h1>
        <p className={styles.description}>No internet :(</p>
      </div>
    </section>
  );
};

export default LostConnection;
