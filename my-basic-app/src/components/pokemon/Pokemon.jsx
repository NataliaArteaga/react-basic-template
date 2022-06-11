import React from "react";
import Button from "../../basics/button/Button";
import Chart from "../chart/Chart";
import styles from "./Pokemon.module.css";

const Pokemon = ({ pokemon, isFavorite, handleFavorite = () => {} }) => {
  return (
    <div className={styles.container}>
      <div>
        <div className={styles.columns}>
        <img
          className={styles.img}
          src={process.env.REACT_APP_API_URL_IMG + pokemon.id + ".png"}
          alt="img"
        />
        <Button
          onClick={() => handleFavorite(pokemon.id)}
          isFavorite={isFavorite}
        />          
        </div>
        <div className={styles.text}>
          <div className={styles.columns}>
            <div className={styles.title}>NAME:</div> <div>{pokemon.name}</div>
          </div>
          <div className={styles.columns}>
            <div className={styles.title}>ORDER:</div> {pokemon.order}
          </div>
          <div className={styles.columns}>
            <div className={styles.title}>HEIGHT:</div> {pokemon.height}
          </div>
          <div className={styles.columns}>
            <div className={styles.title}>WEIGHT:</div> {pokemon.weight}
          </div>
        </div>
      </div>
      <Chart dataPokemon={pokemon.abilities}></Chart>
    </div>
  );
};

export default Pokemon;
