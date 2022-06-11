import React, { memo }from "react";
import Button from "../button/Button";
import styles from "./Card.module.css";

const Card = ({ title, img, onClick = () => {}, isFavorite, handleFavorite = () => {} }) => {
  return (
    <div className={styles.container}>
      <div className={styles.name} onClick={onClick}>{title}</div>
      <img src={img} alt="pokemon img" onClick={onClick}></img>
      <Button onClick={() => handleFavorite()} isFavorite={isFavorite}>&hearts; beats</Button>
      
    </div>
  );
};

export default  memo(Card);
