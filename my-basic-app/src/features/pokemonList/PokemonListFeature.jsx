import React, { useEffect, useState, useMemo } from "react";
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
  const [searchText, setSearchText] = useState("");

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

  const newList = useMemo(() => {
    if (!searchText) return pokemonList;
    return pokemonList.filter((pokemon) =>
      pokemon.name.toLowerCase().includes(searchText.toLowerCase())
    );
  }, [searchText, pokemonList]);

  return (
    <PokemonList
      pokemonList={newList}
      onClick={handlePokemonDetail}
      handleFavorite={handleFavorite}
      favoritePokemons={favoritePokemons}
      setSearchText = {setSearchText}
      searchText = {searchText}
    />
  );
};

export default PokemonListFeature;
