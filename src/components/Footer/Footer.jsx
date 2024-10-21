export const Footer = () => {
  return (
    <>
    <footer>
      <div className="card text-center  bg-dark text-white">
        <div className="card-body">
          <h5 className="card-title fs-2">Gracias por tu visita</h5>
          <p className="card-text fs-4">
            Si requieres más información no dudes en contactarnos.
          </p>
        </div>
        <a
          href="https://github.com/baesmauricio"
          target="_blank"
          rel="noopener noreferrer"
          className="my-3">
          <i className="fab fa-github fa-3x text-white"></i>
        </a>
        <div className="card-footer fs-3 bg-secondary text-white d-flex justify-content-center align-items-center">
          <span>Todos los derechos reservados</span>
        </div>
      </div>
    </footer>
    </>
  );
};
