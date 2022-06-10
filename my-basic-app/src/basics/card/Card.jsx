import React from "react";
import styles from "./Card.module.css";

const Card = ({ title, img, onClick = () => {}}) => {
  return (
    <div className={styles.container}>
      <div onClick={onClick}>{title}</div>
      <img src={img} alt="pokemon img" onClick={onClick}></img>
    </div>
  );
};

export default Card;
