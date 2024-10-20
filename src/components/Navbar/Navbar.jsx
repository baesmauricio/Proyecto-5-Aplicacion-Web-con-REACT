import './Navbar.css'
import 'bootstrap/dist/js/bootstrap.bundle.min.js';


export const Navbar = () => {
  return (
    
    <nav className="navbar navbar-expand-lg bg-dark shadow-sm rounded-bottom border-bottom border-secondary">
      <div className="container-fluid d-flex flex-column align-items-center">
         
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarNav"
            aria-controls="navbarNav"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>

         
          <div className="collapse navbar-collapse justify-content-center mt-2" id="navbarNav">
            <ul className="navbar-nav text-center">
              <li className="nav-item">
                <a className="nav-link text-white fs-3" aria-current="page" href="/">
                  Home
                </a>
              </li>
              <li className="nav-item">
              <a className="nav-link active text-white fs-3" href="/rick">
                  Personajes
                </a>
              </li>
              
            </ul>
          </div>
        </div>
      </nav>
    
  );
};


// export const Navbar = () => {
//   return (
//     <>
//       <nav className='container'>
//         <h1> soy un Navbar </h1>
//         <p className='paragraph'>personajes</p>
//         <p className='text'>Busca tu personaje preferido </p>
//         <p>chao</p>
//       </nav>

//     </>
//   );
// };

