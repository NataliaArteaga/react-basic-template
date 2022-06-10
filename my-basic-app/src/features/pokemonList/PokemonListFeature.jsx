import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import PokemonList from "../../components/pokemonList/PokemonList";
import { getPokemons } from "./pokemonListAPI";

const PokemonListFeature = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { pokemonList } = useSelector((state) => state.pokemonList);

  useEffect(() => {
    dispatch(getPokemons());
  }, []);

  const handlePokemonDetail = (id) => {
    navigate("/" + id);
  };

  

  return (
    <PokemonList
      pokemonList={pokemonList}
      onClick={handlePokemonDetail}
    />
  );
};

export default PokemonListFeature;
