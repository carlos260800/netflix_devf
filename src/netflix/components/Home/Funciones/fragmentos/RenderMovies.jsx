const RenderMovies = (movies) => {
  const URL = "https://api.themoviedb.org/3";
  const API_KEY = "645b80c6ed1f2faa01ee6673ad486783";
  const IMG_PREFIX = "https://www.themoviedb.org/t/p/w600_and_h900_bestv2/";

  document.querySelector("#popular").innerHTML = "";
  movies.forEach((movie) => {
    let poster = `${IMG_PREFIX}${movie.poster_path}`;
    let div = document.createElement("div");
    let img = document.createElement("img");
    let h3 = document.createElement("h3");

    div.classList.add("col-3", "mb-4", "poster");
    div.setAttribute("id", movie.id);

    img.classList.add("img-fluid");
    img.setAttribute("src", poster);
    img.setAttribute("alt", movie.title);

    h3.classList.add("titulo-peliculas");
    h3.innerHTML = movie.title;

    div.append(img);
    div.append(h3);
    document.querySelector("#popular").append(div);
  });
};

export default RenderMovies;
