import React, { lazy, Suspense } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Spinner from "../components/spinner/Spinner";

const HomeFeature = lazy(() => import("../features/home/HomeFeature"));

const Router = () => {
  return (
    <BrowserRouter>
      <Suspense fallback={<Spinner></Spinner>}>
        <Routes>
          <Route path="*" element={<div> 404 - not found </div>} />
          <Route path="/" element={<HomeFeature />}>
          </Route>
        </Routes>
      </Suspense>
    </BrowserRouter>
  );
};

export default Router;
