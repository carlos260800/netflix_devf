import axios from "axios";
import { useEffect, useState } from "react";
import RenderBackrounds from "./fragmentos/RenderBackgrounds";

export const invocarCarrusel = () => {
  const URL = "https://api.themoviedb.org/3";
  const API_KEY = "645b80c6ed1f2faa01ee6673ad486783";

  useEffect(() => {
    axios
      .get(`${URL}/movie/popular?api_key=${API_KEY}`)
      .then((data) => {
        movies_array = data.data.results;
        RenderBackrounds(movies_array);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);
};
