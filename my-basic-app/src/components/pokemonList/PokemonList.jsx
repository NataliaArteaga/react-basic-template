import React from "react";
import Card from "../../basics/card/Card";
import styles from "./PokemonList.module.css";
import SearchBar from "../../basics/searchBar/SearchBar";

const PokemonList = ({
  pokemonList,
  onClick = () => {},
  favoritePokemons,
  handleFavorite = () => {},
  setSearchText,
  searchText,
}) => {
  return (
    <div>
      <SearchBar setSearchText={setSearchText} searchText={searchText} />
      <div className={styles.container}>
        {pokemonList.map((pokemon) => {
          let idPokemon = null;
          pokemon.url
            ? (idPokemon =
                pokemon.url.split("/")[pokemon.url.split("/").length - 2])
            : (idPokemon = pokemon.id);

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
    </div>
  );
};

export default PokemonList;
