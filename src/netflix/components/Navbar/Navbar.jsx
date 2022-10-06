import React from "react";
import RenderMovies from "../Home/Funciones/fragmentos/RenderMovies";
import { botonBuscar } from "./Funciones/botonBuscar";
import { generos } from "./Funciones/generos";

const URL = "https://api.themoviedb.org/3";
const API_KEY = "645b80c6ed1f2faa01ee6673ad486783";
const IMG_PREFIX = "https://www.themoviedb.org/t/p/w220_and_h330_face/";
let movies_array = [];

generos();

export const Barra = () => {
  return (
    <div>
      <nav class="navbar navbar-expand-lg navbar">
        <div className="container">
          <a class="navbar-brand logo" href="#">
            <img className="" src="src/assets/logo.png" alt="" />
          </a>

          <button
            class="navbar-toggler"
            type="button"
            data-toggle="collapse"
            data-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <i class="fa-solid fa-bars"></i>
          </button>

          <div class="collapse navbar-collapse" id="navbarSupportedContent">
            <ul class="navbar-nav mr-auto">
              <li class="nav-item active">
                <a class="nav-link" href="#">
                  Inicio <span class="sr-only">(current)</span>
                </a>
              </li>

              <li class="nav-item">
                <a class="nav-link" href="#">
                  Mi Perfil
                </a>
              </li>
              <li class="nav-item"></li>

              <li class="nav-item  dropdown-toggle">
                <select
                  class="form-select form-select-sm mt-1 ms-3"
                  name="categories"
                  id="categories"
                >
                  <option className="" value="" selected>
                    Todas las categorías
                  </option>
                </select>
              </li>
            </ul>

            <form class="form-inline my-2 my-lg-0" role="search" id="search">
              <input
                class="form-control mr-sm-2"
                type="search"
                autocomplete="off"
                placeholder="Buscar.."
                aria-label="Search"
                name="movieName"
                id="busqueda"
              />
              <button
                onClick={botonBuscar}
                class="btn btn-dark my-2 my-sm-0"
                type="submit"
              >
                Buscar
              </button>
            </form>
          </div>
        </div>
      </nav>
    </div>
  );
};
