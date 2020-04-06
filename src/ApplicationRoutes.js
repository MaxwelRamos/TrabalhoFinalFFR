import React from "react";
import { Route } from "react-router-dom";
import { MovieDetail, MovieList, MovieListFavoritos, DadosContato, ListaContato } from "./components";

export const ApplicationRoutes = () => (
  <>
    <Route path="/" exact component={DadosContato} />
    <Route path="/contatos" component={ListaContato} />
  </>
);