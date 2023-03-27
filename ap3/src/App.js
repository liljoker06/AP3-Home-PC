
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
import ErrorBoundary from './assets/js/error';
import Test from './assets/js/test';
// import Store from './assets/js/Store';
import Storeitem from './assets/js/Storeitem';
import Admin from './assets/js/admin'

import Support from './assets/js/Support'
function App() {
  return (
    <>
    {/* ici nous avons les routes qui vont nous servir à changer de page je les nomme personnelement les Href du HTML  */}
    <BrowserRouter>
    <ErrorBoundary>
    <Navbar/>
    <Routes>
    <Route path='/'  element={<Header/>}/>
      <Route path='/About'  element={<About/>}/>
      <Route path='/Produit' element = {<Storeitem/>}/>
      <Route path = '/Support' element = {<Support/>}/>
      {/* <Route path='/Accueil' element = {<Body/>}/> */}
      <Route path = '/Connexion' element = {<Connexion/>}/>
      <Route path='/Inscription' element = {<Test/>}/>
      <Route path='/Admin' element = {<Admin/>}/>
      
    </Routes>
    <Footer/>
    </ErrorBoundary>
    </BrowserRouter>
    </>
    
  );
}

export default App;
