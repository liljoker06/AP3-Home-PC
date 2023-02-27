
import React, { useState } from "react"
import "../styles/Connexion.css"
import "../styles/Style.css"
import Axios from 'axios';

export default function Connexion (){

    const [Email, setEmail] = useState("");
    const [Mdp, setMdp] = useState("");
    const [ConnexionStatus, setConnexionStatus] = useState("");

    const connexion =(e) =>{
        e.preventDefault();
        Axios.post("http://localhost:3001/Connexion",{
            Email : Email,
            Mdp : Mdp,
        }).then((response) => {
            if(response.data.message){
                setConnexionStatus(response.data.Email);
            }else{
                setConnexionStatus(response.data[0].Email);

            }
        })
    }

    return (
        <div className="App">
        <div className="form">
                    <div className="Title">Connexion</div>
                <form>
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
                    <button className="btn btn-primary mt-3" type="submit" onClick={connexion} lstyle={{ marginRight: 20}}>Connexion</button>
                    <h1 style ={{fontSize:'15px', textAlign: 'center', marginTop:'20'}}>{ConnexionStatus}</h1>
                    <button className="btn btn-warning mt-3" type="reset">supprimer</button>
                </form>
            </div>
        </div>
    )
}
