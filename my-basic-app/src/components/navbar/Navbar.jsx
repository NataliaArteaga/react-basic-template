import React from "react";
import styles from "./Navbar.module.css";

const Navbar = ({ handleGo = () => {} }) => {
  return (
    <div className={styles.container}>
      <div className={styles.title} onClick={() => handleGo("")}>
        GO CATCH ´EM ALL
      </div>
      <div className={styles.title} onClick={() => handleGo("favorites")}>
        FAVORITOS
      </div>
    </div>
  );
};

export default Navbar;
