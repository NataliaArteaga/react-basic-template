import { createSlice } from "@reduxjs/toolkit";
import { getPokemon } from "./pokemonAPI";

const initialState = {
  pokemon: {},
  status: "loading",
};

export const pokemon = createSlice({
  name: "pokemon",
  initialState,

  reducers: {
  
  },

  extraReducers: (builder) => {
    builder
      .addCase(getPokemon.pending, (state) => {
        state.status = "loading";
      })
      .addCase(getPokemon.fulfilled, (state, action) => {
        state.pokemon = action.payload;
        state.status = null;
      });
  },
});


export default pokemon.reducer;
