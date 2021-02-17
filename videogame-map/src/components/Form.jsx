import { useState, useEffect } from "react";
import axios from "axios";
import { baseURL, config } from '../services';

function Form(props) {
  const [charName, setCharName] = useState('');
  const [game, setGame] = useState('');
  const [gameImage, setGameImage] = useState('');
  const [genre, setGenre] = useState('');
  const [origin, setOrigin] = useState('');
  const [charImage, setCharImage] = useState('');
  const [femaleLead, setFemaleLead] = useState(false);
  const [pocLead, setPocLead] = useState(false);
  const [lgbtqaLead, setLgbtqaLead] = useState(false);

  const handleSubmit = async (e) => {
    // prevent the default event
    e.preventDefault();
    // compile the states in an object (newPlant)
    const newCharacter = {
      charName,
      game,
      genre,
      gameImage,
      charImage,
      origin,
      pocLead,
      femaleLead,
      lgbtqaLead
    };
    // make a post request to our url, with the request body being our new object
    await axios.post(baseURL, config, newCharacter);
    // flip the toggle value to fire the useEffect
    props.setToggleFetch((curr) => !curr);
    // current toggle fetch of that state
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
      <label>Character Name:</label>
          <input value={charName} onChange={(e) => setCharName(e.target.value)} />
          <label>Game:
          </label>
        <input value={game} onChange={(e) => setGame(e.target.value)} />
        <label>Origin:
          </label>
        <input type="number" value={origin} onChange={(e) => setOrigin(e.target.value)} />
        
          <button type="submit">I'm Alive!</button>


      </form>

    </div>
  )
}

export default Form;