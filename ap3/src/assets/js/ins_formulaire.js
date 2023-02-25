import React from "react";
import {Formik, Form} from 'formik';
import {TextField} from './TextField';
import * as Yup from 'yup';



export const F = () =>{
    const  validate = Yup.object ({
        Nom : Yup.string()
        .max(15, 'maximum 15 caractéres')
        .required('Required')
    })
    return(
        <Formik
            initiaValues = {{
                Nom:'',
                Prenom:'',
                email:'',
                Mdp:'',
                confirmeMdp:'',

            }}
            validationSchema={validate}
            >
        {formik => (
        <div> 
            <h1 className="my-4 font-weight-bold .display4"> Inscription</h1>
            <Form>
                <TextField label ="Entrer votre Nom" name ="Nom" type="text"/>
                <TextField label ="Entrer votre prénom" name ="Prenom" type="text"/>
                <TextField label ="Entrer votre E-mail" name ="email" type="email"/>
                <TextField label ="Entrer votre mot de passe" name ="Mdp" type="password"/>
                <TextField label ="Confirmer votre mot de passe" name ="confirmeMdp" type="password"/>
                <button className="btn btn-primary mt-3" type="submit" style={{marginRight : 20}}>Enregistrer</button>
                <button className="btn btn-warning mt-3" type="reset">supprimer</button>
            </Form>
        </div>
        )}
        </Formik>
    )
}
export default F