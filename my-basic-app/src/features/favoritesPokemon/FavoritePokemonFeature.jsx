import React from "react";
import { useDispatch, useSelector } from "react-redux";
import PokemonList from "../../components/pokemonList/PokemonList";
import Spinner from "../../components/spinner/Spinner";
import {
  addFavorite,
  removeFavorite,
} from "../favoritesPokemon/favoritePokemonSlice";

const FavoritePokemonFeature = () => {

  const dispatch = useDispatch();

  const handleFavorite = (pokemon, id) => {
    const newPokemon = {...pokemon, id:id}
    if (favoritePokemons[id]) dispatch(removeFavorite(newPokemon));
    else dispatch(addFavorite(newPokemon));
  };

  const { favoritePokemons, status } = useSelector((state) => state.favoritePokemon);
  console.log(favoritePokemons)
 
  if (status === "loading") return <Spinner />;

  return (
    <PokemonList pokemonList={Object.values(favoritePokemons)} handleFavorite={handleFavorite}  favoritePokemons={favoritePokemons}/>
  );
};

export default FavoritePokemonFeature;
