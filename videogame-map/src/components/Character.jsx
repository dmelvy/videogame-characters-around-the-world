import { useParams } from "react-router-dom";
import { Link } from "react-router-dom";

function Character(props) {
  const params = useParams(0);
  const charType = props.characters.find(
    (character) => character.id === params.id
  );

  if (!charType) {
    return <h4>Finding character...</h4>;
  }

  return (
    <div className="charDetails">
      <img src={charType.fields.charImage} />
      <h1>Name: {charType.fields.charName}</h1>
      <h3>Lives in: {charType.fields.origin}</h3>
      <h3>From videogame: {charType.fields.game}</h3>
      <h3>Game genre: {charType.fields.genre}</h3>
      <h3>{charType.fields.pocLead ? `Can play as POC` : null}</h3>
      <h3>{charType.fields.femaleLead ? "Can play as female" : null}</h3>
      <h3>{charType.fields.lgbtqaLead ? "Can play as LGBTQA" : null}</h3>
      <Link to={`/edit/${charType.id}`}>
        <button>Edit!</button>
      </Link>
    </div>
  );
}

export default Character;
