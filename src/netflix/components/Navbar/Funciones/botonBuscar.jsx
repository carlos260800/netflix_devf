import axios from "axios";
import RenderMovies from "../../Home/Funciones/fragmentos/RenderMovies";

export const BotonBuscar = () => {
  const URL = "https://api.themoviedb.org/3";
  const API_KEY = "645b80c6ed1f2faa01ee6673ad486783";
  let movies_array = [];

  const movieName = document.getElementById("busqueda");
  let name = movieName.value;

  axios
    .get(`${URL}/search/multi?api_key=${API_KEY}&query=${name}`)
    .then((data) => {
      movies_array = data.data.results;
      RenderMovies(movies_array);
    })
    .catch((error) => {
      console.log(error);
    });
};
