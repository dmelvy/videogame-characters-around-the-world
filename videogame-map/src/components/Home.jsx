import { useEffect, useState } from 'react';
import axios from 'axios';
import { Route, Link } from 'react-router-dom';
import { baseURL, config } from '../services';
import Form from './Form';
import Result from './Result';
import Search from './Search';

function Home(props) {
  

  return (
     
    <div className="characters-container">

      {/* {props.characters.filter((char) => {
        if (newSearch == "") {
          return char
        } else if (char.fields.charName.includes(newSearch))
          return char
      }).map((character) => {
        return (
          <div>
            <Link key={character.id} to={`/character/${character.id}`}><img src={character.fields.charImage} /></Link>
          </div>
        )
      })} */}
          {props.characters.map((character) => (
            <Link key={character.id} to={`/character/${character.id}`}><img src={character.fields.charImage} /></Link>
          ))} 
      <Search />
      </div>
      

    
    
    
)

}

export default Home;