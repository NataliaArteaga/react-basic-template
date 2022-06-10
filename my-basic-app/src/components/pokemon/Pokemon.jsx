import React from "react";
import styles from "./Pokemon.module.css";

const Pokemon = ({ pokemon }) => {
  return (
    <div className={styles.container}>
      <div>NOMBRE: {pokemon.name}</div>
      <div>ORDEN: {pokemon.order}</div>
      <div>ALTURA: {pokemon.height}</div>
      <div>PESO: {pokemon.weight}</div>
      <img
        className={styles.img}
        src={process.env.REACT_APP_API_URL_IMG + pokemon.id + ".png"}
        alt="img"
      />

     
    </div>
  );
};

export default Pokemon;
