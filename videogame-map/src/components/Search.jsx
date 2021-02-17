import { useState, useEffect } from 'react';
import axios from 'axios';
import { baseURL, config } from '../services';
import Home from './Home';
import Result from './Result';

function Search(props) {
  const [charInfo, setCharInfo] = useState('');
  const [charAll, setCharAll] = useState('');
  const [currentSearch, setCurrentSearch] = useState('');
  const [newSearch, setNewSearch] = useState('');

  useEffect(() => {
    const getChars = async () => {
      const resp = await axios.get(baseURL, config);
      setCharAll(resp.data.records);
    };
    getChars();
  }, [currentSearch]);

  const handleSubmit = (event) => {
    event.preventDefault()
    setCurrentSearch(newSearch);
    const results = charAll.filter(char => char.fields.charName.includes(newSearch))
    setCharInfo(results);
    // console.log(currentSearch)
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

        <div>
          
        {charInfo.length ?
          
          <Home characters={charInfo} /> : null}
          
          
        </div>
    </div>
  )
}

export default Search;