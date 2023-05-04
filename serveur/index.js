const express = require("express");
const mysql = require("mysql");
const cors = require("cors");
const mariadb = require('mariadb')

const app = express();

app.use(express.json());
app.use(cors());



require('dotenv').config()

const con = mariadb.createPool({
    host: process.env.DB_HOST,
    database: process.env.DB_DTB,
    user: process.env.DB_USER,
    password: process.env.DB_PWD,
    connectionLimit : 100,
})

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

// app.post ('/Connexion', (req, res) => {
//     const Email = req.body.Email
//     const Mdp = req.body.Mdp 

//     con.query("SELECT * FROM utilisateur WHERE Email = ? AND Mdp = ? ", [Email, Mdp],
//         (err, result) => {
//             if(err){
//                 req.setEncoding({err: err});
//             }else{
//                 if(result.length > 0){
//                     res.send(result);
//                 }else{
//                     res.send({message : "Email ou Mot incorrect !"});
//                 }
//             }
//         }
//     )
// })
app.post('/connexion', async (req, res) => {  
    const id = parseInt(req.params.id);
    const { Email, Mdp } = req.body;
    let conn; 
    try {
      console.log("Lancement de la connexion");
      conn = await con.getConnection();
      console.log("Lancement de la requête");
      // Interroger la base de données pour récupérer l'utilisateur
      const rows = await conn.query('SELECT * FROM utilisateur  WHERE Email = ? AND Mdp = ?', [Email, Mdp]);
      console.log(rows);
      // Si un utilisateur est trouvé, le renvoyer, sinon renvoyer une erreur d'authentification
      if (rows.length === 1) {
        res.status(200).json(rows);
      } else {
        console.log("pas correct")
        res.status(401).json({ message: "Nom d'utilisateur ou mot de passe incorrect." });
      }
    } catch (err) {
      console.log(err);
      res.status(500).json({ message: "Une erreur s'est produite lors de la connexion à la base de données." });
    } finally {
      if (conn) {
        conn.release(); // Libérer la connexion à la base de données
      }
    }
});


app.post ('/support', (req, res) => {
    const Email = req.body.Email 
    const Objet= req.body.Objet
    const Message = req.body.Message

    con.query('INSERT INTO support (Email, Objet, Message) Values(?,?,?)', [Email, Objet, Message],
        (err, result) => {
            if(result){
                res.send(result);
            }else{
                res.send({message:"donnée incorrect"})
            }
        }
    )
})

// app.get('/produit', (req, res) => {
//   console.log("je suis là")
//     const sql = 'SELECT * FROM produit';
//     con.query(sql, (error, results) => {
//     if (error) {
//       console.log('Erreur de récupération des produits : ', results);
//       res.status(500).json({ error });
//     } else {
//       console.log('Produits récupérés avec succès');
//       res.status(200).json(results);
//     }
//   });
// });

app.get('/produit', async(req,res) => {
  let conn; 
  try{
      console.log("lancement de la connexion")
      conn = await con.getConnection();
      console.log("lancement de la requete")
      const rows = await conn.query('SELECT * FROM produit');
      console.log(rows);
      res.status(200).json(rows)
  }
  catch(err){
      // On affiche les erreurs s'il y en a une
      console.log(err)
  }
})




//ADMIN
app.get('/articles', async (req, res) => {
  let conn;
  try {
      conn = await con.getConnection();
      const rows = await conn.query('SELECT * FROM produit');
      res.status(200).json(rows)
  }
  catch (err) {
      console.log(err);
  }
})

app.get('/articles/:id', async (req, res) => {
  const id = parseInt(req.params.id)
  let conn;
  try {
      console.log("lancement de la connexion")
      conn = await con.getConnection();
      console.log("lancement de la requete select")
      const rows = await conn.query('SELECT * FROM produit WHERE id = ?', [id]);
      res.status(200).json(rows)
  }
  catch (err) {
      console.log(err);
  }
})

// app.post('/articles', async (req, res) => {
//   let conn;
//   try {
//       console.log("lancement de la connexion")
//       conn = await con.getConnection();
//       console.log("lancement de la requete insert")
//       console.log(req.body);
//       let requete = 'INSERT INTO produit (nom, prix, imgUrl, quantityP) VALUES (?, ?, ?, ?);'
//       let rows = await conn.query(requete, [req.body.nom, req.body.prix, req.body.imgUrl, res.body.quantityP]);
//       console.log(rows);
//       res.status(200).json(rows.affectedRows)
//   }
//   catch (err) {
//       console.log(err);
//   }
// })

// app.post ('/articles', (req, res) => {
//     const nom = req.body.nom
//     const prix= req.body.prix
//     const imgUrl = req.body.imgUrl
//     const quantityP = req.body.quantityP

//     con.query('INSERT INTO support (nom, prix, imgUrl, quantityP) Values(?,?,?,?)', [nom, prix, imgUrl, quantityP],
//         (err, result) => {
//             if(result){
//                 res.send(result);
//             }else{
//                 res.send({message:"donnée incorrect"})
//             }
//         }
//     )
// })

app.get('/user', async (req, res) => {
    let conn;
    try {
        conn = await con.getConnection();
        const rows = await conn.query('SELECT * FROM utilisateur WHERE Role = 0');
        res.status(200).json(rows)
    }
    catch (err) {
        console.log(err);
    }
})

app.get('/user/:id', async (req, res) => {
    const id = parseInt(req.params.id)
    let conn;
    try {
        console.log("lancement de la connexion")
        conn = await con.getConnection();
        console.log("lancement de la requete select")
        const rows = await conn.query('SELECT * FROM utilisateur WHERE id = ? ', [id]);
        res.status(200).json(rows)
    }
    catch (err) {
        console.log(err);
    }
  })



app.put('/user/:id', async (req, res) => {
    const id = parseInt(req.params.id)
    let conn;
    try {
        console.log("lancement de la connexion")
        conn = await con.getConnection();
        console.log("lancement de la requete update",req.body)
        let requete = 'UPDATE utilisateur SET Nom = ?, Prenom = ?, Email = ?, WHERE id = ?;'
        let rows = await conn.query(requete, [req.body.Nom, req.body.Prenom, req.body.Email,id]);
        console.log(rows);
        res.status(200).json(rows.affectedRows)
    }
    catch (err) {
        console.log(err);
    }
})




app.post('/articles', async (req, res) => {
    let conn;
    try {
        conn = await con.getConnection();
        console.log(req.body);
        let requete = 'INSERT INTO produit (nom, prix, imgUrl, quantityP) VALUES (?, ?, ?, ?);'
        let rows = await conn.query(requete, [req.body.nom, req.body.prix, req.body.imgUrl, req.body.quantityP]);
        console.log(rows);
        res.status(200).json(rows.affectedRows)
        console.log('kr');
    }
    catch (err) {
        console.log(err);
    }
})


app.put('/articles/:id', async (req, res) => {
  const id = parseInt(req.params.id)
  let conn;
  try {
      console.log("lancement de la connexion")
      conn = await con.getConnection();
      console.log("lancement de la requete update",req.body)
      let requete = 'UPDATE produit SET nom = ?, prix = ?, imgUrl = ?, quantityP = ? WHERE id = ?;'
      let rows = await conn.query(requete, [req.body.nom, req.body.prix, req.body.imgUrl, req.body.quantityP ,id]);
      console.log(rows);
      res.status(200).json(rows.affectedRows)
  }
  catch (err) {
      console.log(err);
  }
})

app.delete('/articles/:id', async (req, res) => {
  const id = parseInt(req.params.id)
  let conn;
  try {
      console.log("lancement de la connexion")
      conn = await con.getConnection();
      console.log("lancement de la requete delete")
      let requete = 'DELETE FROM produit WHERE  id= ?;'
      let rows = await conn.query(requete, [id]);
      console.log(rows);
      res.status(200).json(rows.affectedRows)
  }
  catch (err) {
      console.log(err);
  }
})


app.listen(3001, () =>{
    console.log("serveur à l'écoute")
})