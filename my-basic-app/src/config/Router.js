import React, { lazy, Suspense } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Spinner from "../components/spinner/Spinner";
const PokemonListFeature = lazy(() => import("../features/pokemonList/PokemonListFeature"));
const PokemonFeature = lazy(() => import("../features/pokemon/PokemonFeature"));

const HomeFeature = lazy(() => import("../features/home/HomeFeature"));

const Router = () => {
  return (
    <BrowserRouter>
      <Suspense fallback={<Spinner></Spinner>}>
        <Routes>
          <Route path="*" element={<div> 404 - not found </div>} />
          <Route path="/" element={<HomeFeature />}>
            <Route path="/" element={<PokemonListFeature />} />
            <Route path="/:id" element={<PokemonFeature />} />
          </Route>
        </Routes>
      </Suspense>
    </BrowserRouter>
  );
};

export default Router;
