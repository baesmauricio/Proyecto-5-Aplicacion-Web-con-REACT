import axios from "axios";

const API_URL = 'https://rickandmortyapi.com/api/character';

export const getAllCharacters = async () => {
  try {
    const response = await axios.get(API_URL);
    return response.data.results; 
  } catch (error) {
    console.error('Error fetching characters:', error);
    throw error;
  }
};
