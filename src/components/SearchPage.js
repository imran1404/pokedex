import React, { useState } from 'react';
import axios from 'axios';
import Pokeinfo from './Pokeinfo';
import "./style.css"

const SearchPage = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [loading, setLoading] = useState(false);
  const [pokemonData, setPokemonData] = useState(null);
  const [error, setError] = useState(null);

  const handleSearchInputChange = (event) => {
    setSearchTerm(event.target.value);
  };

  const handleSearch = async () => {
    setLoading(true);
    setError(null);
    setPokemonData(null);

    try {
      const response = await axios.get(
        `https://pokeapi.co/api/v2/pokemon/${searchTerm}`
      );
      setPokemonData(response.data);
    } catch (error) {
      setError('Error fetching Pokemon data. Please try again.');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className='searchPage'>
      <h2>Search Pokemon</h2>
      <input
        type="text"
        value={searchTerm}
        onChange={handleSearchInputChange}
      />
      <button onClick={handleSearch} disabled={loading || searchTerm === ''}>
        Search
      </button>

      {loading && <h4>Loading...</h4>}
      {error && <p>{error}</p>}
      
      {pokemonData && (
        <div className='searchList'>
          <Pokeinfo data={pokemonData}/>
        </div>
      )}
    </div>
  );
};

export default SearchPage;
