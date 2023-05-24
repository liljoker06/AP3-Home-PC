


import { useParams, useNavigate, Link } from "react-router-dom";
import React from 'react';
import { useForm } from "react-hook-form";
import axios from 'axios';
import AdminBar from "./AdminBar";

export default function SuppressionArticles() {
    const { handleSubmit } = useForm();
    let { id } = useParams()
    let navigate = useNavigate()

    const SuppressionUser = async () => {

        await axios.delete(`http://localhost:3001/user/` + id)
            .then(res => {
                console.log(res)
                if (res.status === 200) {
                    alert("Suppression réussi")
                    navigate("/User");
                }
                else {
                    alert("Erreur de supression")
                }
            })
    }
    return (
    <div className="App">
        <AdminBar/>
        <div className="form">
            <form onSubmit={handleSubmit(SuppressionUser)} >
                <h2 style={{color : "white"}}> Êtes-vous sûr de vouloir supprimer cette utilisateur ?</h2>
                <button className="btn btn-primary mt-3" type="submit"  value = "Valider"style={{ marginRight: 20}}>Confirmer</button>
                <Link to="/Admin"> <button className="btn btn-primary mt-3" style={{ marginRight: 20}}>Annuler</button> </Link>
            </form>
        </div>
    </div>
    )
}
