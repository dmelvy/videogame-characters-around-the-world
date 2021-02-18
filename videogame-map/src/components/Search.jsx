import { useState, useEffect } from "react";
import { Link } from "react-router-dom";

function Search(props) {
  const [charInfo, setCharInfo] = useState("");
  const [currentSearch, setCurrentSearch] = useState("");
  const [newSearch, setNewSearch] = useState("");
  const [gameSearch, setGameSearch] = useState("");
  const [lgbtqaSearch, setLgbtqaSearch] = useState(false);
  const [femaleSearch, setFemaleSearch] = useState(false);
  const [pocSearch, setPocSearch] = useState(false);

  const handleSubmit = (event) => {
    event.preventDefault();
    setCurrentSearch(newSearch);
    const results = props.characters.filter((char) => {
      return char.fields.charName.includes(newSearch);
    });
    setCharInfo(results);
    setNewSearch("");
    // filtering through the API data and creating an array of relevant search results based on charName and game
    props.setToggleFetch((curr) => !curr);
  };
  // setting up a conditional for if any of the check boxes are selected
  useEffect(() => {
    if (lgbtqaSearch === true) {
      const results1 = props.characters.filter((char) => {
        return char.fields.lgbtqaLead;
      });
      setCharInfo(results1);
    } else if (pocSearch === true) {
      const results2 = props.characters.filter((char) => {
        return char.fields.pocLead;
      });
      setCharInfo(results2);
    } else if (femaleSearch === true) {
      const results3 = props.characters.filter((char) => {
        return char.fields.femaleLead;
      });
      setCharInfo(results3);
    }
  }, [lgbtqaSearch, pocSearch, femaleSearch]);

  return (
    <div>
      {/* Search filter form begins here! */}
      <form className="search-filter" onSubmit={handleSubmit}>
        <h3 id="hfilter">FILTER BY CHARACTER OR GAME!</h3>
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
        <div className="check">
          <input
            type="checkbox"
            value={lgbtqaSearch}
            className="check"
            onChange={(event) => setLgbtqaSearch(event.target.checked)}
          />
          <label htmlFor="queerLead">
            LGBTQA <span>Protagonist</span>
          </label>
          <input
            type="checkbox"
            className="check"
            value={pocSearch}
            onChange={(event) => setPocSearch(event.target.checked)}
          />
          <label htmlFor="pocLead">
            POC <span>Protagonist</span>
          </label>
          <input
            type="checkbox"
            className="check"
            value={femaleSearch}
            onChange={(event) => setFemaleSearch(event.target.checked)}
          />
          <label htmlFor="femaleLead">
            Female <span>Protagonist</span>
          </label>
        </div>
        <button type="submit">Find Characters</button>
      </form>
      {/* character rendering starts here in a ternary that either shows filtered results or all results */}
      <div className="characters-container">
        {charInfo.length ? (
          <div className="characters-container">
            {charInfo.map((character) => (
              <Link key={character.id} to={`/character/${character.id}`}>
                <img src={character.fields.charImage} />
              </Link>
            ))}
          </div>
        ) : (
          <div className="characters-container">
            {props.characters.map((character) => (
              <Link key={character.id} to={`/character/${character.id}`}>
                <img src={character.fields.charImage} />
              </Link>
            ))}
          </div>
        )}
      </div>
    </div>
  );
}

export default Search;
