import React, { useState } from "react";
import ReactDOM from "react-dom";
// import { Formik, Field, Form } from "formik";
import "../styles/Style.css";
import '../styles/test.css';

import Axios from 'axios';





export default  function Support() {
    const [Email, setEmail] = useState("");
    const [Objet,setObjet] = useState("");
    const [Message,setMessage] = useState("");
    const [registerStatus, setRegisterStatus] = useState("");

    const register =(e) =>{
        e.preventDefault();
        Axios.post("http://localhost:3001/support",{
            Email: Email,
            Objet :  Objet,
            Message : Message,
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

                {/* // initialValues={{
                //     Nom: "",
                //     Prenom: "", 
                //     Email: "",
                //     Mdp: "",
                // }}
                
                // onSubmit={data => {
                //     console.log(data)

                //     let formData = new FormData();
                //     formData.append('Nom',data.Nom)
                //     formData.append('Prenom',data.Prenom)
                //     formData.append('Email',data.Email)
                //     formData.append('Mdp',data.Mdp)
                    
                //     axios({
                //         method : 'post', 
                //         url : 'http://localhost/CoursSlam/AP3/ap3/src/assets/php/test.php/',
                //         data : formData,
                //         config : {headers : {'Content-Type' :'multipart/form-data' }}
                //     })

                //     .then(function (response) {
                //         //ajout d'un nouveau client
                //         console.log(response)
                //         alert ('Nouveau utilisateur ajouter.');
                //     })

                //     .catch(function(response){
                //         //Erreur d'ajout
                //         console.log(response)
                //     })
                // }} */}

                
                <div className="form">
                    <div className="Title">Contactez notre Support</div>
                <form>
                    <label className="taille"> votre Email</label>
                    <div className="input-container ic4">
                    <input name="Email" type="email" onChange={(e) => {setEmail(e.target.value)}}/>
                    </div>
                    <div className="cut"></div>
                    <label className="taille"> Objet de votre message</label>
                    <div className="input-container ic4">
                    <input name="Objet" type="text" onChange={(e) => {setObjet(e.target.value)}}/>
                    </div>
                    <div className="cut"></div>
                    <label className="taille"> Votre message </label>
                    <div className="input-container ic4">
                    <input name="Message" type="text" onChange={(e) => {setMessage(e.target.value)}}/>
                    </div>
                    <div className="cut"></div>
                    <button className="btn btn-primary mt-3" type="submit" onClick={register} lstyle={{ marginRight: 20}}>Envoyer</button>
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