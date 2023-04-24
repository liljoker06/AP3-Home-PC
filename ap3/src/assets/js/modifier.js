import axios from 'axios';
import React, { useEffect, useState } from 'react'; 
import { useForm } from 'react-hook-form';
import { useNavigate, useParams } from 'react-router-dom';


export default function EditArticles(){
    let {id} = useParams()
    const {handelSubmit, formStates :{errors} } = useForm();
    let navigate = useNavigate(); 


    const [name, setName] = useState("")
    const [prix, setPrix] = useState("")
    const [image, setImage] = useState("")
    const [quantite, setQuantite] = useState("")

    const recup = async () => {
        await axios.get('http://localhost:3001/articles/' + id)
        .then(res=> {
            setName(res.data[0].nom)
            setPrix(res.data[0].prix)
            setImage(res.data[0].image)
            setQuantite(res.data[0].quantite)
        })
    }

    const EditArticles = async() => {
        await axios.put('http://localhost:8000/articles/'+ id, {
            name : name, 
            prix : prix,
            imgUrl : image, 
            quantityP : quantite 
        })
        .then(res => {
            console.log(res)
            if (res.status === 200) {
                alert("Envoie réussi")
                navigate("/")
            }
            else{
                alert("Erreur d'envoi")
            }
        })
    }

    useEffect(() => {
        recup()
    },[])

    return (
        <div>
        <div className='container'>
            <h2> Editer un article</h2>

            <form onSubmit={handelSubmit(EditArticles )}>
                <label>Nom : </label>
                <input defaultValue={name} onChange={(e) => setName(e.target.value)} />
                <br/>
                <label>Prix : </label>
                <input defaultValue={prix} onChange={(e) => setPrix(e.target.value)} />
                <br/>
                <label>image : </label>
                <input defaultValue={image} onChange={(e) => setImage(e.target.value)} />
                <br/>
                <label>Quantité : </label>
                <input defaultValue={quantite} onChange={(e) => setQuantite(e.target.value)} />

                {(errors.name || errors.prix || errors.image || errors.quantite) ? <span>Tous les champs doivent être remplis</span> : ""}

                <input type="submit" />
            </form>
        </div>
    </div>
    )
}