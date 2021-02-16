import { useEffect, useState } from 'react';
import axios from 'axios';
import { Route, Link } from 'react-router-dom';
import { baseURL, config } from '../services';
// import Character from './components/Character';

function Home(props) {
  

  return (
    <div className="characters-container">
      {props.characters.map((character) => (
        <Link key={character.id} to={`/character/${character.id}`}><img src={character.fields.charImage}/></Link>
      ))}
  </div>
)

}

export default Home;