import React, { useState } from "react";
import ReactDOM from "react-dom";
// import { Formik, Field, Form } from "formik";
import "../styles/Style.css";
import '../styles/test.css';

import Axios from 'axios';





export default  function Test() {
    const [Nom, setNom] = useState("");
    const [Prenom, setPrenom] = useState("");
    const [Email, setEmail] = useState("");
    const [Mdp, setMdp] = useState("");
    const [registerStatus, setRegisterStatus] = useState("");

    const register =(e) =>{
        e.preventDefault();
        Axios.post("http://localhost:3001/utilisateur",{
            Nom : Nom,
            Prenom :Prenom,
            Email : Email,
            Mdp : Mdp,
        }).then((response) => {
            if(response.data.message){
                setRegisterStatus(response.data.message);
            }else{
                setRegisterStatus("Votre compte à bien été créé")

            }
        })
    }
    return (
        <div className="App">
                
                <div className="form">
                    <div className="Title">inscription</div>
                <form>
                    <div className="input-container ic4"></div>
                   <label className="taille"> Nom </label>
                    <div className="input-container ic4">
                    <input name="Nom" type="text" onChange={(e) => {setNom(e.target.value)}} placeholder = "Entrer votre Nom" required />
                    </div>
                    <label className="taille"> Prenom </label>
                    <div className="input-container ic4">
                    <input name="Prenom" type="text" onChange={(e) => {setPrenom(e.target.value)}}/>
                    </div>
                    <div className="cut"></div>
                    <label className="taille">  Adresse Mail </label>
                    <div className="input-container ic4">
                    <input name="Email" type="email" onChange={(e) => {setEmail(e.target.value)}}/>
                    </div>
                    <div className="cut"></div>
                    <label className="taille"> Mot de passe </label>
                    <div className="input-container ic4">
                    <input name="Mdp" type="password" onChange={(e) => {setMdp(e.target.value)}}/>
                    </div>
                    <div className="cut"></div>
                    <button className="btn btn-primary mt-3" type="submit" onClick={register} lstyle={{ marginRight: 20}}>Enregistrer</button>
                    <h1 style ={{fontSize:'15px', textAlign: 'center', marginTop:'20'}}>{registerStatus}</h1>
                    <button className="btn btn-warning mt-3" type="reset">supprimer</button>
                    {/* <Field label="Entrer votre prénom" name="Prenom" type="text" />
                    <Field label="Entrer votre E-mail" name="email" type="email" />
                    <Field label="Entrer votre mot de passe" name="Mdp" type="password" />
                    <Field label="Confirmer votre mot de passe" name="confirMdp" type="password" />
                    <button className="btn btn-primary mt-3" type="submit" style={{ marginRight: 20 }}>Enregistrer</button>
                    <button className="btn btn-warning mt-3" type="reset">supprimer</button> */}
                </form>
                </div>
        </div>

    );
}


