import './Header.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import Morti from '../../assets/Morti.jpg'

export const Header = () => {
  return (
    <header className="bg-secondary text-white text-center py-5 shadow-sm rounded-bottom border-bottom border-secondary">
      <div className="container">
        <h1 className="display-1 fw-bold">Bienvenido</h1>
        <img
          src={Morti}
          alt="Rick and Morty"
          className="img-fluid mb-4" // Asegura que la imagen sea responsiva
          style={{ maxHeight: '300px' }} // Ajusta la altura máxima según sea necesario
        />
        <p className="lead fs-3 fw-bold my-5">
          Todo lo que necesites saber sobre RickAndMorty está aquí
        </p>
        <p className="fs-4 fw-bold my-2">
          Busca tu personaje preferido y revisa el estado, especie y género que quieras
        </p>
      </div>
    </header>
  );
};
