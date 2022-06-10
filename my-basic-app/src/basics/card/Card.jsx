import React from "react";
import styles from "./Card.module.css";

const Card = ({ title, img, onClick = () => {}, isFavorite, handleFavorite = () => {} }) => {
  return (
    <div className={styles.container}>
      <div onClick={onClick}>{title}</div>
      <img src={img} alt="pokemon img" onClick={onClick}></img>
      <button onClick={() => handleFavorite()}>{isFavorite ? "FAVORITO" : "NO FAVORITO"}</button>
    </div>
  );
};

export default Card;
