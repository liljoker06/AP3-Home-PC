import axios from 'axios';
import React, {  useEffect, useState } from 'react'; 
import { useForm } from 'react-hook-form';
import { useNavigate, useParams } from 'react-router-dom';


export default function EditArticles(){
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
        <div>
        <div className='container'>
            <h2> Editer un utilisateur</h2>

            <form onSubmit={handleSubmit(EditUsers)}>
                <label>Nom : </label>
                <input defaultValue={Nom} onChange={(e) => setNom(e.target.value)} />
                <br/>
                <label>Prenom : </label>
                <input defaultValue={Prenom} onChange={(e) => setPrenom(e.target.value)} />
                <br/>
                <label>Email : </label>
                <input defaultValue={Email} onChange={(e) => setEmail(e.target.value)} />
                <br/>

                {(errors.Nom || errors.Prenom || errors.Email) ? <span>Tous les champs doivent être remplis</span> : ""}

                <input type="submit" />
            </form>
        </div>
    </div>
    )
}