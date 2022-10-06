import { peliculasRecomendadas } from "./Funciones/peliculasRecomendadas";

function Recomendaciones() {
  peliculasRecomendadas();

  return (
    <div className="container mt-3">
      <h1 className="text-center pt-2 pb-2">Peliculas del Momento</h1>

      <div class="row" id="popular">
        <div></div>
      </div>
    </div>
  );
}

export default Recomendaciones;
