import axios from 'axios';
import React, {  useEffect, useState } from 'react'; 
import { useForm } from 'react-hook-form';
import { useNavigate, useParams } from 'react-router-dom';
import AdminBar from './AdminBar';


export default function EditUsers(){
    let {id} = useParams()
    const {handleSubmit, formState :{errors} } = useForm();
    let navigate = useNavigate(); 


    const [Email, setEmail] = useState("")
    const [Nom, setNom] = useState("")
    const [Prenom, setPrenom] = useState("")

    const recup = async () => {
        await axios.get('http://localhost:3001/user/' + id)
        .then(res=> {
            console.log(res.data);
            setEmail(res.data[0].Email)
            setNom(res.data[0].Nom)
            setPrenom(res.data[0].Prenom)
        })
    }

    const EditUsers = async() => {
        console.log("edit");
        await axios.put('http://localhost:3001/user/'+ id, {
            Email: Email, 
            Nom : Nom,
            Prenom : Prenom,  
        })
        .then(res => {
            console.log(res)
            console.log("EDIT 2 ")
            if (res.status === 200) {
                alert("Envoie réussi")
                navigate("/user/")
            }
            else{
                alert("Erreur d'envoi")
            }
        })
    }

    useEffect(() => {
        recup()
        // eslint-disable-next-line react-hooks/exhaustive-deps
    },[])

    return (
        <div className='App'>
            <AdminBar/>
            <div className="form">
                    <div className="Title">Editer l'utilisateur </div>
                <form className='form' onSubmit={handleSubmit(EditUsers)}>
                    <label className="taille"> Email : </label>
                    <div className="input-container ic4">
                    <input defaultValue={Email} onChange={(e) => setEmail(e.target.value)} />
                    </div>
                    <div className="cut"></div>
                    <label className="taille"> Nom: </label>
                    <div className="input-container ic4">
                    <input defaultValue={Nom} onChange={(e) => setNom(e.target.value)}/>
                    </div>
                    <div className="cut"></div>
                    <label className="taille"> Prenom : </label>
                    <div className="input-container ic4">
                    <input defaultValue={Prenom} onChange={(e) => setPrenom(e.target.value)}/>
                    </div>
                    <div className="cut"></div>
                    {(errors.Email || errors.Nom || errors.Prenom) ? <span>Tous les champs doivent être remplis</span> : ""}
                    <button className="btn btn-primary mt-3" type="submit" style={{ marginRight: 20}}>Confirmer</button>
                    <button className="btn btn-warning mt-3" type="reset">supprimer</button>
                </form>
                <br/><br/>
            </div>
        </div>
    )
}