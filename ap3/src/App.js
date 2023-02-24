
import './App.css';
import { Route,Routes } from 'react-router-dom';

import 'bootstrap/dist/css/bootstrap.min.css';

import Navbar from './assets/js/Navbar.js';
import 'tiny-slider/dist/tiny-slider.css'; 
import Header from './assets/js/Header.js';
import Body from './assets/js/Body.js';
import Footer from './assets/js/Footer';



function App() {
  return (
    <div className="App">
      <Navbar/>
      <Routes>
        <Route path="" element = {<Body/>}/>
      </Routes>
      <Footer/>
    </div>
  );
}

export default App;
