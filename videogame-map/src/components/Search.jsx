import { useState, useEffect } from 'react';
import axios from 'axios';
import { baseURL, config } from '../services';
import Home from './Home';
import { Link } from 'react-router-dom';

function Search(props) {
  const [charInfo, setCharInfo] = useState('');
  const [currentSearch, setCurrentSearch] = useState('');
  const [newSearch, setNewSearch] = useState('');
  
  const handleSubmit = (event) => {
    event.preventDefault()
    setCurrentSearch(newSearch);
    const results = props.characters.filter(char => {
      return char.fields.charName.includes(newSearch)
    })
    setCharInfo(results);
    setNewSearch('');
    props.setToggleFetch((curr) => !curr);
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
          <div className="characters-container">
            {charInfo.map((character) => (
              <Link key={character.id} to={`/character/${character.id}`}><img src={character.fields.charImage} /></Link>
            ))}
          </div>
          :
          <div className="characters-container">
            {props.characters.map((character) => (
              <Link key={character.id} to={`/character/${character.id}`}><img src={character.fields.charImage} /></Link>
            ))}
          </div>
        }
      </div>
    </div>
  )
}

export default Search;