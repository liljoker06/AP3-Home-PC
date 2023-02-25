
import './App.css';
import { Route,Routes } from 'react-router-dom';

import 'bootstrap/dist/css/bootstrap.min.css';

import Navbar from './assets/js/Navbar.js';
import 'tiny-slider/dist/tiny-slider.css'; 
import Header from './assets/js/Header.js';
import Body from './assets/js/Body.js';
import Footer from './assets/js/Footer';
import About from './assets/js/about';
import Connexion from './assets/js/connexion';
import Inscription from './assets/js/Inscription';

import {BrowserRouter} from 'react-router-dom';



function App() {
  return (
    <>
    {/* ici nous avons les routes qui vont nous servir à changer de page je les nomme personnelement les Href du HTML  */}
    <BrowserRouter>
    <Navbar/>
    <Routes>
    <Route path='/'  element={<Header/>}/>
      <Route path='/About'  element={<About/>}/>
      <Route path='/Produit' element = {<Body/>}/>
      <Route path='/Accueil' element = {<Body/>}/>
      <Route path = '/Connexion' element = {<Connexion/>}/>
      
      <Route path='/Inscription' element = {<Inscription/>}/>
    </Routes>
    <Footer/>
    </BrowserRouter>
    </>
    
  );
}

export default App;
