import { configureStore } from '@reduxjs/toolkit';
import pokemonListReducer from '../features/pokemonList/pokemonListSlice';
import pokemonReducer from '../features/pokemon/pokemonSlice';
import favoritePokemonReducer from '../features/favoritesPokemon/favoritePokemonSlice';

export const store = configureStore({
  reducer: {
    pokemonList: pokemonListReducer,
    pokemon: pokemonReducer,
    favoritePokemon:favoritePokemonReducer,
  },
});
