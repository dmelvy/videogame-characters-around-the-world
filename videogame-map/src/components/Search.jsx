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
  const [toggleSwitch, setToggleSwitch] = useState(false);

  const handleSubmit = (event) => {
    event.preventDefault();
    setCurrentSearch(newSearch);
    const results = props.characters.filter((char) => {
      return char.fields.charName.includes(newSearch);
    });
    // filtering through the API data and creating an array of relevant search results based on charName
    setCharInfo(results);
    setNewSearch("");
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
    } else if (femaleSearch === true && lgbtqaSearch === true) {
      const results4 = props.characters.filter((char) => {
        return char.fields.lgbtqaLead + char.fields.femaleLead;
      });
      setCharInfo(results4);
    } else if (femaleSearch === true && pocSearch === true) {
      const results5 = props.characters.filter((char) => {
        return char.fields.pocLead + char.fields.femaleLead;
      });
      setCharInfo(results5);
    } else if (lgbtqaSearch === true && pocSearch === true) {
      const results6 = props.characters.filter((char) => {
        return char.fields.pocLead + char.fields.lgbtqaLead;
      });
      setCharInfo(results6);
    } else if (lgbtqaSearch === true && pocSearch === true && femaleSearch === true) {
      const results7 = props.characters.filter((char) => {
        return char.fields.pocLead && char.fields.lgbtqaLead && char.fields.femaleLead
      });
      setCharInfo(results7);
    }
  }, [lgbtqaSearch, pocSearch, femaleSearch]);

  return (
    <div>
      {/* Search filter form begins here! */}
      <form className="search-filter" onSubmit={handleSubmit}>
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
          onChange={(event) => setLgbtqaSearch(event.target.checked)}
        />
        <label htmlFor="pocLead">POC Protagonist</label>
        <input
          type="checkbox"
          value={pocSearch}
          onChange={(event) => setPocSearch(event.target.checked)}
        />
        <label htmlFor="femaleLead">Female Protagonist</label>
        <input
          type="checkbox"
          value={femaleSearch}
          onChange={(event) => setFemaleSearch(event.target.checked)}
        />
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
