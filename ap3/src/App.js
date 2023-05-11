
import './App.css';
import { Route,Routes } from 'react-router-dom';

import 'bootstrap/dist/css/bootstrap.min.css';

import 'tiny-slider/dist/tiny-slider.css'; 
import Header from './assets/js/Header.js';
import Footer from './assets/js/Footer';
import About from './assets/js/about';
import Connexion from './assets/js/connexion';


import {BrowserRouter} from 'react-router-dom';
import ErrorBoundary from './assets/js/error';
import Test from './assets/js/Test';
// import Store from './assets/js/Store';
import Storeitem from './assets/js/Storeitem';
import Admin from './assets/js/admin'
import Client from './assets/js/ClientBar'
import Supprimer from './assets/js/supprimer';
import Modifier from'./assets/js/modifier';

import Support from './assets/js/Support';
import Panier from './assets/js/Panier';
import Ajouter from './assets/js/ajouter';
import User from './assets/js/user';
import UserModif from './assets/js/UserModif';
import UserAjouter from './assets/js/userajouter';
import SuppUser from './assets/js/suppuser';


function App() {
  return (
    
    <BrowserRouter>
    <ErrorBoundary>
    
    <Routes>
      <Route path='/'  element={<Header/>}/>
      <Route path='/About'  element={<About/>}/>
      <Route path='/Produit' element = {<Storeitem/>}/>
      <Route path = '/Support' element = {<Support/>}/>
      <Route path = '/Connexion' element = {<Connexion/>}/>
      <Route path='/Inscription' element = {<Test/>}/>
      <Route path='/Admin' element = {<Admin/>}/>
      <Route path='/Connecter' element ={<Client/>}/>
      <Route path='/Supprimer/:id' element ={<Supprimer/>}/>
      <Route path='/Modifier/:id' element = {<Modifier/>}/>
      <Route path='/Panier' element = {<Panier/>}/>
      <Route path='/Ajouter' element = {<Ajouter/>}/>
      <Route path='/User' element = {<User/>}/>
      <Route path='/UserModif/:id' element = {<UserModif/>}/>
      <Route path='/UserAjouter' element = {<UserAjouter/>}/>
      <Route path='/SuppUser/:id' element = {<SuppUser/>}/>

    </Routes>
    <Footer/>
    </ErrorBoundary>
    </BrowserRouter>
    
    
  );
}

export default App;
