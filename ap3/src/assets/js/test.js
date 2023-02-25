import React from "react";
import ReactDOM from "react-dom";
import { Formik, Field, Form } from "formik";
import "../styles/Style.css";
import ins from '../images/inscription.png';
import '../styles/test.css';



const Test = () => {
    return (
        <div className="App">

            <Formik
                initialValues={{
                    Nom: "",
                    Prenom: "", 
                    Email: "",
                    Mdp: "",
                }}
                
                onSubmit={data => {
                    console.log(data)
                }}
            >
                <div className="form">
                    <div className="Title">inscription</div>
                <Form>
                    <div className="input-container ic4"></div>
                   <label className="taille"> Nom </label>
                    <div className="input-container ic4">
                    <Field name="Nom" type="text" />
                    </div>
                    <label className="taille"> Prenom </label>
                    <div className="input-container ic4">
                    <Field name="Prenom" type="text"/>
                    </div>
                    <div className="cut"></div>
                    <label className="taille">  Adresse Mail </label>
                    <div className="input-container ic4">
                    <Field name="Email" type="email" />
                    </div>
                    <div className="cut"></div>
                    <label className="taille"> Mot de passe </label>
                    <div className="input-container ic4">
                    <Field name="Mdp" type="password" />
                    </div>
                    <div className="cut"></div>
                    <button className="btn btn-primary mt-3" type="submit" style={{ marginRight: 20}}>Enregistrer</button>
                    <button className="btn btn-warning mt-3" type="reset">supprimer</button>
                    {/* <Field label="Entrer votre prénom" name="Prenom" type="text" />
                    <Field label="Entrer votre E-mail" name="email" type="email" />
                    <Field label="Entrer votre mot de passe" name="Mdp" type="password" />
                    <Field label="Confirmer votre mot de passe" name="confirMdp" type="password" />
                    <button className="btn btn-primary mt-3" type="submit" style={{ marginRight: 20 }}>Enregistrer</button>
                    <button className="btn btn-warning mt-3" type="reset">supprimer</button> */}
                </Form>
                </div>

            </Formik>
        </div>

    );
}

ReactDOM.render(<test />, document.getElementById("root"));
export default Test