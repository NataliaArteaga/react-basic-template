import React from "react";
import Card from "../../basics/card/Card";
import styles from "./PokemonList.module.css";

const PokemonList = ({
  pokemonList,
  onClick = () => {},
  favoritePokemons,
  handleFavorite = () => {},
}) => {
  return (
    <div className={styles.container}>
      {pokemonList.map((pokemon) => {
        const idPokemon =
          pokemon.url.split("/")[pokemon.url.split("/").length - 2];
        return (
          <Card
            key={idPokemon}
            title={pokemon.name}
            img={process.env.REACT_APP_API_URL_IMG + idPokemon + ".png"}
            onClick={() => onClick(idPokemon)}
            handleFavorite={() => handleFavorite(pokemon, idPokemon)}
            isFavorite={favoritePokemons[idPokemon]}
          />
        );
      })}
    </div>
  );
};

export default PokemonList;
