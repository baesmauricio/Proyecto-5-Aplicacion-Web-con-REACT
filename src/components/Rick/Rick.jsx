import { useState, useEffect } from 'react'
import { getAllCharacters } from '../../api/endpointApi'
import 'bootstrap/dist/css/bootstrap.min.css'
import Card from '../Card/Card';


export const Rick = () => {
  const [character, setCharacter] = useState([]);

  const [searchTerm, setSearchTerm] = useState(''); // Estado para el valor de búsqueda

  useEffect(() => {
    const getCharacterDataRequest = async () => {
     const characterData = await getAllCharacters()
      setCharacter(characterData);
    }
    getCharacterDataRequest();
  }, []);


  // Filtrar personajes según el término de búsqueda
  const filteredCharacters = character.filter((item) =>
    item.name.toLowerCase().includes(searchTerm.toLowerCase()) // Filtro case-insensitive
  );

  // if (hasError) {
  //   throw new Error('Simulated error!');
  // }

  return (
    <>
      <div className='bg-dark text-white py-'>
        <h1 className="text-center custom-heading mb-4">Rick and Morty</h1>


        {/* Formulario de búsqueda */}
        <div className="container my-4">
          <form className="d-flex justify-content-center">
            <input
              type="text"
              className="form-control w-50 fs-3"
              placeholder="Buscar personaje..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)} // Actualiza el estado al escribir
            />
          </form>
        </div>

        <div className="container">
          <div className="row g-4">
            {filteredCharacters.length > 0 ? (  // adicionado por search
              filteredCharacters.map((item) => (
                <Card key={item.id} item={item}/>
              ))
            ) : (
                
              <p className="text-center text-white fs-3">No se encontraron personajes</p>
            )}
          </div>
        </div>
      </div>
    </>
  );
};

