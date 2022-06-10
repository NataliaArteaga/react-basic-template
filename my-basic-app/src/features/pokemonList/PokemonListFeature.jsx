import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import PokemonList from "../../components/pokemonList/PokemonList";
import { getPokemons } from "./pokemonListAPI";
import {
  addFavorite,
  removeFavorite,
} from "../favoritesPokemon/favoritePokemonSlice";

const PokemonListFeature = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { pokemonList } = useSelector((state) => state.pokemonList);
  const { favoritePokemons } = useSelector((state) => state.favoritePokemon);

  useEffect(() => {
    dispatch(getPokemons());
  }, []);

  const handlePokemonDetail = (id) => {
    navigate("/" + id);
  };

  const handleFavorite = (pokemon, id) => {
    const newPokemon = {...pokemon, id:id}
    if (favoritePokemons[id]) dispatch(removeFavorite(newPokemon));
    else dispatch(addFavorite(newPokemon));
  };

  return (
    <PokemonList
      pokemonList={pokemonList}
      onClick={handlePokemonDetail}
      handleFavorite={handleFavorite}
      favoritePokemons={favoritePokemons}
    />
  );
};

export default PokemonListFeature;
