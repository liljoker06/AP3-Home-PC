import React, { useState } from "react";
// import { Formik, Field, Form } from "formik";
import "../styles/Style.css";
import '../styles/test.css';

import Axios from 'axios';

import AdminBar from "./AdminBar";





export default  function UserAjouter() {
    const [Nom, setNom] = useState("");
    const [Prenom,setPrenom] = useState("");
    const [Email,setEmail] = useState("");
    const [Mdp, setMdp] =  useState(""); 
    const [registerStatus, setRegisterStatus] = useState("");

    const register =(e) =>{
        e.preventDefault();
        Axios.post("http://localhost:3001/user",{
            Nom: Nom ,
            Prenom:  Prenom,
            Email: Email,
            Mdp  :  Mdp
        }).then((response) => {
            if(response.data.message){
                setRegisterStatus(response.data.message);
            }else{
                setRegisterStatus("Votre message à bien été envoyer")

            }
        })
    }
    return (
        <div className="App">
            <AdminBar/>

                <div className="form">
                    <div className="Title">Ajouter un Utilisateur</div>
                <form>
                    <label className="taille"> ajouter un  Nom</label>
                    <div className="input-container ic4">
                    <input name="Nom" type="text" onChange={(e) => {setNom(e.target.value)}}/>
                    </div>
                    <div className="cut"></div>
                    <label className="taille"> ajouter un Prenom</label>
                    <div className="input-container ic4">
                    <input name="Prenom" type="text" onChange={(e) => {setPrenom(e.target.value)}}/>
                    </div>
                    <div className="cut"></div>
                    <label className="taille"> ajouter une Email</label>
                    <div className="input-container ic4">
                    <input name="Email" type="text" onChange={(e) => {setEmail(e.target.value)}}/>
                    </div>
                    <label className="taille"> ajouter un Mot de passe</label>
                    <div className="input-container ic4">
                    <input name="Mdp" type="password" onChange={(e) => {setMdp(e.target.value)}}/>
                    </div>
                    <div className="cut"></div>
                    <button className="btn btn-primary mt-3" type="submit" onClick={register} lstyle={{ marginRight: 20}}>Envoyer</button>
                    <h1 style ={{fontSize:'15px', textAlign: 'center', marginTop:'20'}}>{registerStatus}</h1>
                    <button className="btn btn-warning mt-3" type="reset">supprimer</button>
                </form>
                </div>
        </div>

    );
}