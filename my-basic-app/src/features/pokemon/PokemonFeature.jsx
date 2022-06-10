import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import Pokemon from "../../components/pokemon/Pokemon";
import Spinner from "../../components/spinner/Spinner";
import { getPokemon } from "./pokemonAPI";

const PokemonFeature = () => {
  const dispatch = useDispatch();
  const { id } = useParams();
  const { pokemon, status } = useSelector((state) => state.pokemon);

  useEffect(() => {
    dispatch(getPokemon(id));
  }, []);

 
  if (status === "loading") return <Spinner />;

  return (
    <Pokemon
      pokemon={pokemon}
      dispatch={dispatch}

    />
  );
};

export default PokemonFeature;
