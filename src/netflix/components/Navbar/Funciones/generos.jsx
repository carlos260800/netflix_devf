import axios from "axios";
import RenderMovies from "../../Home/Funciones/fragmentos/RenderMovies";
import RenderSelect from "./fragmentos/RenderSelect";

const URL = "https://api.themoviedb.org/3";
const API_KEY = "645b80c6ed1f2faa01ee6673ad486783";

let movies_array = [];

export const Generos = () => {
  axios.get(`${URL}/movie/popular?api_key=${API_KEY}`).then((data) => {
    movies_array = data.data.results;
  });

  // Generos
  axios
    .get(`${URL}/genre/movie/list?api_key=${API_KEY}`)
    .then((data) => RenderSelect(data.data));
  document.querySelector("#categories");
  document.addEventListener("change", function (e) {
    document.querySelector("#presentacion").innerHTML = "";
    let movies;
    let genre_id = e.target.value;

    if (genre_id == "") {
      movies = movies_array;
    } else {
      movies = movies_array.filter(function (movie) {
        return movie.genre_ids?.includes(parseInt(genre_id));
      });
    }

    RenderMovies(movies);
  });
};
