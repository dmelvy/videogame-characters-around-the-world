import { useEffect, useState } from 'react';
import axios from 'axios';
import { Route, Link } from 'react-router-dom';
import { baseURL, config } from './services';
import Nav from './components/Nav';
import './App.css';
import Character from './components/Character';
import Form from './components/Form';
import Search from './components/Search';
import Footer from './components/Footer';
import Header from './components/Header';

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
      <Header />
      <Route exact path="/">
        <Search characters={characters} setToggleFetch={setToggleFetch} setCharacters={setCharacters} />
      </Route>

      <Route path="/character/:id">
        <Character characters={characters} setToggleFetch={setToggleFetch}/>
      </Route>

      <Route path="/new"> 
        <Form characters={characters} setToggleFetch={setToggleFetch}/>
      </Route>
      <Footer />
    </div>
  
  );
}

export default App;
