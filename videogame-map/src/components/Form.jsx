import { useEffect, useState } from "react";
import axios from "axios";
import { baseURL, config } from "../services";
import { useHistory, useParams } from "react-router-dom";

function Form(props) {
  const [charName, setCharName] = useState("");
  const [game, setGame] = useState("");
  const [gameImage, setGameImage] = useState("");
  const [genre, setGenre] = useState("");
  const [origin, setOrigin] = useState("");
  const [charImage, setCharImage] = useState("");
  const [femaleLead, setFemaleLead] = useState(false);
  const [pocLead, setPocLead] = useState(false);
  const [lgbtqaLead, setLgbtqaLead] = useState(false);
  const history = useHistory();
  const params = useParams();

  useEffect(() => {
    // if we have characters and an id
    if (props.characters.length > 0 && params.id) {
      // find the character with an id of params.id
      const foundChar = props.characters.find((char) => params.id === char.id);
      if (foundChar) {
        setCharName(foundChar.fields.charName);
        setOrigin(foundChar.fields.origin);
        setCharImage(foundChar.fields.charImage);
        setGameImage(foundChar.fields.gameImage);
        setPocLead(foundChar.fields.pocLead);
        setLgbtqaLead(foundChar.fields.lgbtqaLead);
        setFemaleLead(foundChar.fields.femaleLead);
        setGenre(foundChar.fields.genre);
        setGame(foundChar.fields.game);
      }
    }
  }, [props.characters, params.id]);

  const handleSubmit = async (e) => {
    // prevent the default event
    e.preventDefault();
    // compile the states in an object (newPlant)
    const fields = {
      charName,
      game,
      genre,
      gameImage,
      charImage,
      origin,
      pocLead,
      femaleLead,
      lgbtqaLead,
    };

    if (params.id) {
      const charURL = `${baseURL}/${params.id}`;
      await axios.put(charURL, { fields }, config);
    } else {
      // make a post request to our url, with the request body being our new object
      await axios.post(baseURL, { fields }, config);
    } // flip the toggle value to fire the useEffect
    props.setToggleFetch((curr) => !curr);
    history.push("/");
    // current toggle fetch of that state
  };

  return (
    <div>
      <form className="post-edit" onSubmit={handleSubmit}>
        <label>Character Name:</label>
        <input
          value={charName}
          onChange={(e) => setCharName(e.target.value)} />
        <label>Origin:</label>
        <input
          value={origin}
          onChange={(e) => setOrigin(e.target.value)} />
        <label>Character Picture:</label>
        <input
          type="url"
          value={charImage}
          onChange={(e) => setCharImage(e.target.value)}
        />
        <label>Game:</label>
        <input
          value={game}
          onChange={(e) => setGame(e.target.value)} />
        <label>Videogame Picture:</label>
        <input
          type="url"
          value={gameImage}
          onChange={(e) => setGameImage(e.target.value)}
        />
        <label>POC Protagonist?</label>
        <input
          type="checkbox"
          value={pocLead}
          onClick={(e) => setPocLead(e.target.checked)}
        />
        <label>Female Protagonist?</label>
        <input
          type="checkbox"
          value={femaleLead}
          onClick={(e) => setFemaleLead(e.target.checked)}
        />
        <label>LGBTQA Protagonist?</label>
        <input
          type="checkbox"
          value={lgbtqaLead}
          onClick={(e) => setLgbtqaLead(e.target.checked)}
        />
        <button type="submit">It's Aliiiive!</button>
      </form>
    </div>
  );
}

export default Form;
