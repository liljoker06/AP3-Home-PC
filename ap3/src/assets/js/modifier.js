import axios from 'axios';
import React, {  useEffect, useState } from 'react'; 
import { useForm } from 'react-hook-form';
import { useNavigate, useParams } from 'react-router-dom';


export default function EditArticles(){
    let {id} = useParams()
    const {handleSubmit, formState :{errors} } = useForm();
    let navigate = useNavigate(); 


    const [name, setName] = useState("")
    const [prix, setPrix] = useState("")
    const [image, setImage] = useState("")
    const [quantite, setQuantite] = useState("")

    const recup = async () => {
        await axios.get('http://localhost:3001/articles/' + id)
        .then(res=> {
            console.log(res.data);
            setName(res.data[0].nom)
            setPrix(res.data[0].prix)
            setImage(res.data[0].imgUrl)
            setQuantite(res.data[0].quantityP)
        })
    }

    const EditArticles = async() => {
        console.log("edit");
        await axios.put('http://localhost:3001/articles/'+ id, {
            nom : name, 
            prix : prix,
            imgUrl : image, 
            quantityP : quantite 
        })
        .then(res => {
            console.log(res)
            console.log("EDIT 2 ")
            if (res.status === 200) {
                alert("Envoie réussi")
                navigate("/Modifier/")
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
            <h2> Editer un article</h2>

            <form onSubmit={handleSubmit(EditArticles )}>
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