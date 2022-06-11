import React from "react";
import styles from "./Button.module.css";

const Button = ({ onClick = () => {}, isFavorite }) => {
  return (
    <div
      className={isFavorite ? styles.btn_fav : styles.btn_nofav}
      onClick={onClick}> &#9829;
      </div>
  );
};

export default Button;
