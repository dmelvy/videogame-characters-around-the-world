import Search from './Search';

function Result(props) {
  return (
    <div className="result-list">
      <img src={props.characters.charImage} />
      <h1>{props.characters.charName}</h1>
      <h3>{props.characters.origin}</h3>
      <h3>{props.characters.game}</h3>
      <h3>{props.characters.genre}</h3>
      <h3>{props.characters.pocLead ? "POC Protagonist" : null}</h3>
      <h3>{props.characters.femaleLead ? "Female Protagonist" : null}</h3>
      <h3>{props.characters.lgbtqaLead ? "Queer Protagonist" : null}</h3>
    </div>
  )
}

export default Result;