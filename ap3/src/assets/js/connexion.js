
import React, { useState } from "react"
import "../styles/Connexion.css"
import "../styles/Style.css"
import Axios from 'axios';
import { useNavigate } from "react-router-dom";
import { useForm } from "react-hook-form";
import Navbar from "./Navbar";

export default function Connexion (){
    const {register, formState : {errors}} = useForm();
    let navigate = useNavigate();

    const [Email, setEmail] = useState("");
    const [Mdp, setMdp] = useState("");

    const connexion =(e) =>{
        e.preventDefault();
        Axios.post("http://localhost:3001/Connexion",{
            Email : Email,
            Mdp : Mdp,
        }).then(res => {
            console.log(res)
            if(res.status === 200) {
                alert("Connexion reussi")
                navigate("/Produit")
            }else{
                alert("Erreur de connexion")
            }
        })
    }

    return (
        <div className="App">
            <Navbar/>
        <div className="form">
                    <div className="Title">Connexion</div>
                <form className='form' onSubmit={connexion}>
                    <label className="taille">  Adresse Mail </label>
                    <div className="input-container ic4">
                    <input {...register("Email", { required: true })} onChange={(e) => setEmail(e.target.value)} />
                    </div>
                    <div className="cut"></div>
                    <label className="taille"> Mot de passe </label>
                    <div className="input-container ic4">
                    <input type="password" {...register("Mdp", { required: true })} onChange={(e) => setMdp(e.target.value)}/>
                    </div>
                    <div className="cut"></div>
                    {(errors.Email || errors.Mdp) ? <span>Tous les champs doivent être remplis</span> : ""}
                    <button className="btn btn-primary mt-3" type="submit"lstyle={{ marginRight: 20}}>Connexion</button>
                    <button className="btn btn-warning mt-3" type="reset">supprimer</button>
                </form>
                <br/><br/>
            </div>
            
        </div>
    )
}
