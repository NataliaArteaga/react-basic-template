import React , { useState, useMemo} from "react";
import { useDispatch, useSelector } from "react-redux";
import PokemonList from "../../components/pokemonList/PokemonList";
import { useNavigate } from "react-router-dom";
import Spinner from "../../components/spinner/Spinner";
import {
  addFavorite,
  removeFavorite,
} from "../favoritesPokemon/favoritePokemonSlice";

const FavoritePokemonFeature = () => {
  const [searchText, setSearchText] = useState("");
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleFavorite = (pokemon, id) => {
    const newPokemon = {...pokemon, id:id}
    if (favoritePokemons[id]) dispatch(removeFavorite(newPokemon));
    else dispatch(addFavorite(newPokemon));
  };

  const handlePokemonDetail = (id) => {
    navigate("/" + id);
  };

  const { favoritePokemons, status } = useSelector((state) => state.favoritePokemon);
  console.log(favoritePokemons)

  const newList = useMemo(() => {
    if (!searchText) return Object.values(favoritePokemons);
    return Object.values(favoritePokemons).filter((pokemon) =>
      pokemon.name.toLowerCase().includes(searchText.toLowerCase())
    );
  }, [searchText, favoritePokemons]);
 
  if (status === "loading") return <Spinner />;

  return (
    <PokemonList pokemonList={newList} onClick={handlePokemonDetail} handleFavorite={handleFavorite}  favoritePokemons={favoritePokemons}  setSearchText={setSearchText}
    searchText={searchText}/>
  );
};

export default FavoritePokemonFeature;
