import { createAsyncThunk } from "@reduxjs/toolkit";

export const getPokemon = createAsyncThunk(
  "pokemon/getPokemon",
  async (id) => {
   const response = await fetch(process.env.REACT_APP_API_URL+"pokemon/"+id)
      .then((response) => response.json())
      .then((data) => {
        return data;
      });
      return response
  }

);
