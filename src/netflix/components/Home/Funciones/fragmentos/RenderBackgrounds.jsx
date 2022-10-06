const URL = "https://api.themoviedb.org/3";
const API_KEY = "645b80c6ed1f2faa01ee6673ad486783";
const IMG_BACKGROUND = "https://www.themoviedb.org/t/p/original";

const RenderBackrounds = (movies) => {

  movies.forEach((movie) => {
    let backgroundMovie = `${IMG_BACKGROUND}${movie.backdrop_path}`;

    let div = document.createElement("div");
    let img = document.createElement("img");
    let h3 = document.createElement("h3");
    let a = document.createElement("a");

    div.classList.add("carousel-item");
    div.setAttribute("id", movie.id);

    img.classList.add("d-block", "w-100", "pe-auto");
    img.setAttribute("src", backgroundMovie);
    img.setAttribute("alt", movie.title);

    a.classList.add("pe-auto", "text-decoration-none");
    a.setAttribute("href", "#");

    h3.innerHTML = movie.title;
    h3.classList.add("p-3", "mb-2", "bg-light", "text-dark", "text-center");

    a.append(img);
    a.append(h3);
    div.append(a);

    document.querySelector("#posters").append(div);
  });
};

export default RenderBackrounds;
