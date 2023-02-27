const express = require("express");
const mysql = require("mysql");
const cors = require("cors");

const app = express();

app.use(express.json());
app.use(cors());

const con = mysql.createConnection(
    {
        user: "root",
        host: "localhost",
        password: "",
        database: "ap3",
    }
)

app.post ('/utilisateur', (req, res) => {
    const Nom = req.body.Nom
    const Prenom = req.body.Prenom
    const Email = req.body.Email
    const Mdp = req.body.Mdp 

    con.query("INSERT INTO utilisateur(Nom, Prenom, Email, Mdp) Values(?,?,?,?)", [Nom, Prenom, Email, Mdp],
        (err, result) => {
            if(result){
                res.send(result);
            }else{
                res.send({message:"donnée incorrect"})
            }
        }
    )
})

app.get('/produit', (req, res) => {
    const sql = 'SELECT * FROM produit';
    con.query(sql, (error, results) => {
    if (error) {
      console.log('Erreur de récupération des produits : ', error);
      res.status(500).json({ error });
    } else {
      console.log('Produits récupérés avec succès');
      res.status(200).json(results);
    }
  });
});



app.listen(3001, () =>{
    console.log("serveur à l'écoute")
})