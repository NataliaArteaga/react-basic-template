import { createAsyncThunk } from "@reduxjs/toolkit";

export const getPokemons = createAsyncThunk(
  "pokemonList/getPokemons",
  async () => {
   const response = await fetch("https://pokeapi.co/api/v2/pokemon?limit=1000&offset=0")
      .then((response) => response.json())
      .then((data) => {
        return data.results;
      });
      return response
  }

);
