import { useEffect, useState } from 'react';
import axios from 'axios';
import { Route, Link } from 'react-router-dom';
import { baseURL, config } from './services';
import Nav from './components/Nav';
import Home from './components/Home';
import './App.css';
import Character from './components/Character';
import Form from './components/Form';
import Search from './components/Search';

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
        <Search characters={characters} setToggleFetch={setToggleFetch} setCharacters={setCharacters} />
      </Route>
      <Route path="/character/:id">
        <Character characters={characters} setToggleFetch={setToggleFetch}/>
      </Route>
      <Route path="/new"> 
        <Form characters={characters} setToggleFetch={setToggleFetch}/>
      </Route>



    </div>

    
  );
}

export default App;
