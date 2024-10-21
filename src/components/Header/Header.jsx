import './Header.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import Morti from '../../assets/Morti.jpg'

export const Header = () => {
  return (
    <header className="bg-secondary text-white text-center py-5 shadow-sm rounded-bottom border-bottom border-secondary">
      <div className="container">
        <h1 className="display-1 text-warning fw-bold">Bienvenido</h1>
        <img
          src={Morti}
          alt="Rick and Morty"
          className="img-fluid mb-4" 
          />
        <p className="display-5 fw-bold my-5">
  Todo lo que necesites saber sobre <span className="text-warning">Rick&Morty</span> está aquí
</p>
        <p className="fs-1 fw-bold my-2">
          Busca tu <span className="text-warning">Personaje</span> preferido y revisa el estado, especie y género que quieras
        </p>
      </div>
    </header>
  );
};
