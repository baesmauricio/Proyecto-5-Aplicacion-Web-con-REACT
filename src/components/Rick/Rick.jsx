import { useState, useEffect } from 'react'
import { getAllCharacters } from '../../api/endpointApi'
import 'bootstrap/dist/css/bootstrap.min.css'
import Card from '../Card/Card';


export const Rick = () => {
  const [character, setCharacter] = useState([]);

  const [searchTerm, setSearchTerm] = useState('');

  useEffect(() => {
    const getCharacterDataRequest = async () => {
     const characterData = await getAllCharacters()
      setCharacter(characterData);
    }
    getCharacterDataRequest();
  }, []);


  const filteredCharacters = character.filter((item) =>
    item.name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  // if (hasError) {
  //   throw new Error('Error simulado!');
  // }

  return (
    <>
      <div className='bg-dark text-white py-'>
        <h1 className="text-center display-3 fw-bold mb-4">Rick and Morty</h1>

        <div className="container my-4">
          <form className="d-flex justify-content-center">
            <input
              type="text"
              className="form-control w-50 fs-3"
              placeholder="Buscar personaje..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)} 
            />
          </form>
        </div>

        <div className="container">
          <div className="row g-4">
            {filteredCharacters.length > 0 ? ( 
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

