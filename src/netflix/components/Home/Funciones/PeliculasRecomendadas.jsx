import axios from "axios";
import { useEffect } from "react";
import RenderMovies from "./fragmentos/RenderMovies";

export const peliculasRecomendadas = () => {
  const URL = "https://api.themoviedb.org/3";
  const API_KEY = "645b80c6ed1f2faa01ee6673ad486783";
  let movies_array = [];


  useEffect(() => {
    axios
      .get(`${URL}/movie/popular?api_key=${API_KEY}`)
      .then((data) => {
        movies_array = data.data.results;
        RenderMovies(movies_array);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);


};
