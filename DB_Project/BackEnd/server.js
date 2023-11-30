const express = require("express");
const mysql = require('mysql');
const cors = require('cors');
const { check, validationResult } = require('express-validator');
const app = express();app.use(cors());app.use(express.json());
const db = mysql.createConnection(
    {
        host: "localhost",
        user: "root",
        password: "root",
        database: "project"})

app.post('/signup', (req, res) =>
{
    const sql = "INSERT INTO login (name, email, password) VALUES (?, ?, ?)";
    const values = [
        req.body.name,
        req.body.email,
        req.body.password
    ]
    db.query(sql, [req.body.name, req.body.email, req.body.password], (err, data) => {
        if (err) {
            console.error("Error:", err);
            return res.status(500).json({ error: "An error occurred" });
        }
        console.log("Data inserted into the database:");
        console.log("Name:", req.body.name);
        console.log("Email:", req.body.email);
        console.log("Password:", req.body.password);

        return res.json(data);
    });
})
app.post('/login',[    check('email', "Emaill length error").isEmail().isLength({min: 10, max:30}),
    check('password', "password length 8-10").isLength({min: 8, max: 10})],
    (req, res) =>
    {
        const sql = "SELECT * FROM login WHERE email = ? AND password = ?";
        db.query(sql, [req.body.email,req.body.password ], (err, data) =>
        {
            const errors = validationResult(req);
            if(!errors.isEmpty())
            {
                return res.json(errors);
            }
            else {
                if(err)
                {
                    return res.json("Error");
                }
                if(data.length > 0)
                {
                    return res.json("Success");
                }
                else
                {
                    return res.json("Faile");
                }
            }
        })
    })

//---------------------------------Test
app.get('/getdata', (req, res) => {
    const sql = "SELECT * FROM first"; // Предполагается, что таблица называется "first"

    db.query(sql, (err, data) => {
        if (err) {
            console.error("Error:", err);
            return res.status(500).json({ error: "An error occurred" });
        }

        // Отправляем данные в ответ
        return res.json(data);
    });
});
//--------------------------------------
app.get('/getdata2', (req, res) => {
    const sql = "SELECT * FROM second"; // Предполагается, что таблица называется "first"

    db.query(sql, (err, data) => {
        if (err) {
            console.error("Error:", err);
            return res.status(500).json({ error: "An error occurred" });
        }

        // Отправляем данные в ответ
        return res.json(data);
    });
});
//--------------------------------------
app.get('/getdata3', (req, res) => {
    const sql = "SELECT * FROM third"; // Предполагается, что таблица называется "first"

    db.query(sql, (err, data) => {
        if (err) {
            console.error("Error:", err);
            return res.status(500).json({ error: "An error occurred" });
        }

        // Отправляем данные в ответ
        return res.json(data);
    });
});
//--------------------------------------
app.get('/getdata4', (req, res) => {
    const sql = "SELECT * FROM info"; // Предполагается, что таблица называется "first"

    db.query(sql, (err, data) => {
        if (err) {
            console.error("Error:", err);
            return res.status(500).json({ error: "An error occurred" });
        }

        // Отправляем данные в ответ
        return res.json(data);
    });
});
//--------------------------------------

app.listen(8081, ()=> {    console.log("listening");})