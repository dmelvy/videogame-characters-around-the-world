import { useEffect, useState } from 'react';
import axios from 'axios';
import { Route, Link } from 'react-router-dom';
import { baseURL, config } from './services';
import Nav from './components/Nav';
import Home from './components/Home';
import './App.css';
import Character from './components/Character';
import Filter from './components/Filter';

function App() {
  const [characters, setCharacters] = useState([]);
  const [toggleFetch, setToggleFetch] = useState(false);

  useEffect(() => {
    const getChars = async () => {
      const resp = await axios.get(baseURL, config);
      setCharacters(resp.data.records);
    };
    getChars();
  }, [toggleFetch]);

  return (
    
    <div className="App">
      <Nav />
      <h1>Videogame Characters Around The World</h1>

      <Route exact path="/">
        <Home characters={characters} setToggleFetch={setToggleFetch} />
        <Filter characters={characters}/>
      </Route>
      <Route path="/character/:id">
        <Character characters={characters} setToggleFetch={setToggleFetch}/>
      </Route>
      <Route path="/new">
        
      </Route>



    </div>

    
  );
}

export default App;
