const mariadb = require('mariadb')
const express = require('express')
const app = express()
let cors = require('cors')

require('dotenv').config()

const pool = mariadb.createPool({
    host: process.env.DB_HOST,
    database: process.env.DB_DTB,
    user: process.env.DB_USER,
    password: process.env.DB_PWD,
    connectionLimit: 100,
})

app.use(express.json())
app.use(cors())

app.get('/achat', async (req, res) => {
    let conn;
    try {
        console.log("lancement de la connexion")
        conn = await pool.getConnection();
        console.log("lancement de la requete select")
        const rows = await conn.query('SELECT * FROM achat');
        res.status(200).json(rows)
    }
    catch (err) {
        console.log(err);
    }
})

app.get('/question/:id', async (req, res) => {
    const id = parseInt(req.params.id)
    let conn;
    try {
        console.log("lancement de la connexion")
        conn = await pool.getConnection();
        console.log("lancement de la requete select")
        const rows = await conn.query('SELECT * FROM questions WHERE id = ?', [id]);
        res.status(200).json(rows)
    }
    catch (err) {
        console.log(err);
    }
})

app.post('/question', async (req, res) => {
    let conn;
    try {
        console.log("lancement de la connexion")
        conn = await pool.getConnection();
        console.log("lancement de la requete insert")
        console.log(req.body);
        let requete = 'INSERT INTO questions (theme, question, reponse) VALUES (?, ?, ?);'
        let rows = await conn.query(requete, [req.body.theme, req.body.question, req.body.reponse]);
        console.log(rows);
        res.status(200).json(rows.affectedRows)
    }
    catch (err) {
        console.log(err);
    }
})

app.put('/question/:id', async (req, res) => {
    const id = parseInt(req.params.id)
    let conn;
    try {
        console.log("lancement de la connexion")
        conn = await pool.getConnection();
        console.log("lancement de la requete update")
        let requete = 'UPDATE questions SET theme = ?, question = ?, reponse = ? WHERE id = ?;'
        let rows = await conn.query(requete, [req.body.theme, req.body.question, req.body.reponse, id]);
        console.log(rows);
        res.status(200).json(rows.affectedRows)
    }
    catch (err) {
        console.log(err);
    }
})

app.delete('/question/:id', async (req, res) => {
    const id = parseInt(req.params.id)
    let conn;
    try {
        console.log("lancement de la connexion")
        conn = await pool.getConnection();
        console.log("lancement de la requete delete")
        let requete = 'DELETE FROM questions WHERE  id= ?;'
        let rows = await conn.query(requete, [id]);
        console.log(rows);
        res.status(200).json(rows.affectedRows)
    }
    catch (err) {
        console.log(err);
    }
})

app.listen(8000, () => { // ouverture du serveur sur le port 8000
    console.log("Serveur à l'écoute") // afficher un message dans la console.
})