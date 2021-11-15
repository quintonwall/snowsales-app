import './App.css';
import { Route, NavLink, Routes} from 'react-router-dom';
import StoreSales from './Components/storesales';
import About from './Components/about';
import { Liveboard } from './Components/storeembed';

// ThoughtSpot
import {
  AuthType,
  init,
  Page,
} from "@thoughtspot/visual-embed-sdk";

const TSURL = "https://try.thoughtspot.cloud"; 

function App() {

  init({
    thoughtSpotHost: TSURL,
    authType: AuthType.None
  });

  return (
    /*
    <div>
      hello liveboard
      <Liveboard />
    </div>
    */
    <div className="App">
       <Routes>
        <Route path="/" element={<h1>Home</h1>} />
        <Route path="/storesales" element={<StoreSales />} />
        <Route path="/about" element={<About />} />
      </Routes>
      <div className="list">
        <ul>
          <li><NavLink to="/">Home</NavLink></li>
          <li><NavLink to="/storesales">Store Sales</NavLink></li>
          <li><NavLink to="/about">About</NavLink></li>
        </ul>
      </div>
  </div> 
  
  );
}

export default App;
