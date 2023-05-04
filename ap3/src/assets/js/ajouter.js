import React, { useState } from "react";
// import { Formik, Field, Form } from "formik";
import "../styles/Style.css";
import '../styles/test.css';

import Axios from 'axios';

import AdminBar from "./AdminBar";





export default  function Ajouter() {
    const [nom, setNom] = useState("");
    const [prix,setPrix] = useState("");
    const [imgUrl,setImgUrl] = useState("");
    const [quantityP,setQuantityP] = useState("");
    const [registerStatus, setRegisterStatus] = useState("");

    const register =(e) =>{
        e.preventDefault();
        Axios.post("http://localhost:3001/articles",{
            nom: nom ,
            prix:  prix,
            imgUrl: imgUrl,
            quantityP : quantityP
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
                    <div className="Title">Aouter un article </div>
                <form>
                    <label className="taille"> ajouter un Nom pour votre article</label>
                    <div className="input-container ic4">
                    <input name="nom" type="text" onChange={(e) => {setNom(e.target.value)}}/>
                    </div>
                    <div className="cut"></div>
                    <label className="taille"> ajouter un prix</label>
                    <div className="input-container ic4">
                    <input name="prix" type="text" onChange={(e) => {setPrix(e.target.value)}}/>
                    </div>
                    <div className="cut"></div>
                    <label className="taille"> ajouter une image</label>
                    <div className="input-container ic4">
                    <input name="imgUrl" type="text" onChange={(e) => {setImgUrl(e.target.value)}}/>
                    </div>
                    <label className="taille"> ajouter une quantité</label>
                    <div className="input-container ic4">
                    <input name="quantityP" type="text" onChange={(e) => {setQuantityP(e.target.value)}}/>
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