import { useState, useEffect } from 'react';
import axios from 'axios';
import { baseURL, config } from '../services';
import Home from './Home';
import Character from './Character';

function Search(props) {
  const [charInfo, setCharInfo] = useState("");
  const [currentSearch, setCurrentSearch] = useState('');
  const [newSearch, setNewSearch] = useState('');

  useEffect(() => {
    const getChars = async () => {
      const resp = await axios.get(baseURL, config);
      setCharInfo(resp.data.records);
    };
    getChars();
  }, [currentSearch]);

  const handleSubmit = (event) => {
    event.preventDefault()
    setCurrentSearch(newSearch);
    setNewSearch('');
  }

  return (
    <div className="search-filter">
      <form onSubmit ={handleSubmit}>
        <h3>Filter by character or game</h3>
        <label htmlFor="character-keyword">Character Name</label>
        <input
          type="text"
          placeholder="Try typing a character name."
          value={newSearch}
          onChange={(event) => setNewSearch(event.target.value)}
        />
        <label htmlFor="videogame-keyword">Videogame Title</label>
        <input type="search" placeholder="Type a videogame title."></input>
        <label htmlFor="queerLead">LGBTQA Protagonist</label>
        <input type="checkbox"></input>
        <label htmlFor="pocLead">Person of Color (POC) Protagonist</label>
        <input type="checkbox"></input>
        <label htmlFor="femaleLead">Female Protagonist</label>
        <input type="checkbox"></input>

        <button type="submit">Find Characters</button>
      </form>

        <h2>
            {charInfo.charName ? <Character charInfo={charInfo} /> : null}
        </h2>
    </div>
  )
}

export default Search;