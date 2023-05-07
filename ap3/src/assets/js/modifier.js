import axios from 'axios';
import React, {  useEffect, useState } from 'react'; 
import { useForm } from 'react-hook-form';
import { useNavigate, useParams } from 'react-router-dom';
import AdminBar from './AdminBar';


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
                navigate("/Admin")
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
                    <div className="Title">Editer l'article </div>
                <form className='form' onSubmit={handleSubmit(EditArticles )}>
                    <label className="taille"> Nom : </label>
                    <div className="input-container ic4">
                    <input defaultValue={name} onChange={(e) => setName(e.target.value)} />
                    </div>
                    <div className="cut"></div>
                    <label className="taille"> Prix: </label>
                    <div className="input-container ic4">
                    <input defaultValue={prix} onChange={(e) => setPrix(e.target.value)}/>
                    </div>
                    <div className="cut"></div>
                    <label className="taille"> URL de L'image : </label>
                    <div className="input-container ic4">
                    <input defaultValue={image} onChange={(e) => setImage(e.target.value)}/>
                    </div>
                    <div className="cut"></div>
                    <label className="taille"> Quantité : </label>
                    <div className="input-container ic4">
                    <input defaultValue={quantite} onChange={(e) => setQuantite(e.target.value)}/>
                    </div>
                    <div className="cut"></div>
                    {(errors.name || errors.prix || errors.image || errors.quantite) ? <span>Tous les champs doivent être remplis</span> : ""}
                    <button className="btn btn-primary mt-3" type="submit" style={{ marginRight: 20}}>Confirmer</button>
                    <button className="btn btn-warning mt-3" type="reset">supprimer</button>
                </form>
                <br/><br/>
            </div>
        </div>
    )
}