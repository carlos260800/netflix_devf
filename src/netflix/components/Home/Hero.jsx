import React, { createElement, useState } from "react";
import { invocarCarrusel } from "./Funciones/invocarCarrusel";

export const Hero = () => {
  invocarCarrusel();

  return (
    <div>
      <div className="carrusel">
        <div
          id="carouselExampleSlidesOnly"
          class="carousel slide"
          data-ride="carousel"
        >
          <div id="posters" class="carousel-inner">
            <div class="carousel-item active">
              <a href="#" className="pe-auto text-decoration-none">
                <img
                  class="d-block w-100"
                  src="https://i0.wp.com/elpalomitron.com/wp-content/uploads/2020/10/novedades-netflix-el-palomitron.jpg?resize=1200%2C600&ssl=1"
                  alt="Presenteacion"
                />
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
