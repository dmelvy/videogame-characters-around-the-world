import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

function Search(props) {
  const [charInfo, setCharInfo] = useState('');
  const [currentSearch, setCurrentSearch] = useState('');
  const [newSearch, setNewSearch] = useState('');
  const [gameSearch, setGameSearch] = useState('');
  const [lgbtqaSearch, setLgbtqaSearch] = useState(false);
  const [femaleSearch, setFemaleSearch] = useState(false);
  const [pocSearch, setPocSearch] = useState(false);
  
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

  useEffect(() => {
    if (lgbtqaSearch === true) {
      let results1 = props.characters.filter(char => { 
        return char.fields.lgbtqaLead.includes(lgbtqaSearch)
      })
      setLgbtqaSearch(results1)
    } else if (femaleSearch === true) {
       let results2 = props.characters.filter(char => { 
        return char.fields.pocLead.includes(femaleSearch)
      })
      setFemaleSearch(results2)
    } else if (pocSearch === true) {
      let results3 = props.characters.filter(char => { 
        return char.fields.femaleLead.includes(pocSearch)
      })
      setPocSearch(results3)
    } 

  }, [lgbtqaSearch, femaleSearch, pocSearch])

  
  return (
    <div>
      {/* Search filter form begins here! */}
      <form className="search-filter" onSubmit ={handleSubmit}>
        <h3>Filter by character or game</h3>
        <label htmlFor="character-keyword">Character Name</label>
        <input
          type="text"
          placeholder="Try typing a character name."
          value={newSearch}
          onChange={(event) => setNewSearch(event.target.value)}
        />
        <label htmlFor="videogame-keyword">Videogame Title</label>
        <input
          type="search"
          placeholder="Type a videogame title."
          value={gameSearch}
          onChange={(event) => setGameSearch(event.target.value)}
        ></input>
        <label htmlFor="queerLead">LGBTQA Protagonist</label>
        <input
          type="checkbox"
          value={lgbtqaSearch}
          onChange={(event) => setLgbtqaSearch(event.target.checked)}></input>
        <label htmlFor="pocLead">Person of Color (POC) Protagonist</label>
        <input
          type="checkbox"
          value={pocSearch}
          onChange={(event) => setPocSearch(event.target.checked)}></input>
        <label htmlFor="femaleLead">Female Protagonist</label>
        <input
          type="checkbox"
          value={femaleSearch}
          onChange={(event) => setFemaleSearch(event.target.checked)}></input>

        <button type="submit">Find Characters</button>
      </form>
      <div className="characters-container">
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