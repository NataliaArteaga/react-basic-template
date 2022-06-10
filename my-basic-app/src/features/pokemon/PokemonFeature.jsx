import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import Pokemon from "../../components/pokemon/Pokemon";
import Spinner from "../../components/spinner/Spinner";
import { getPokemon } from "./pokemonAPI";
import {
  addFavorite,
  removeFavorite,
} from "../favoritesPokemon/favoritePokemonSlice";

const PokemonFeature = () => {
  const dispatch = useDispatch();
  const { id } = useParams();
  const { pokemon, status } = useSelector((state) => state.pokemon);
  const { favoritePokemons } = useSelector((state) => state.favoritePokemon);

  useEffect(() => {
    dispatch(getPokemon(id));
  }, []);

  const handleFavorite = (id) => {
    if (favoritePokemons[id]) dispatch(removeFavorite(pokemon));
    else dispatch(addFavorite(pokemon));
  };
 
  if (status === "loading") return <Spinner />;

  return (
    <Pokemon
      pokemon={pokemon}
      favoritePokemons={favoritePokemons}
      dispatch={dispatch}
      handleFavorite={handleFavorite}
      isFavorite={favoritePokemons[id]}
    />
  );
};

export default PokemonFeature;
