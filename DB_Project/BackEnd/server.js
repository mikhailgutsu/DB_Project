const bcrypt = require('bcrypt');
const express = require("express");
const mysql = require('mysql');

const cors = require('cors');

const { check, validationResult } = require('express-validator');


const app = express();app.use(cors());app.use(express.json());
const db = mysql.createConnection(
    {
        host: "localhost",
        user: "root",
        password: "",
        database: "signup"
    })
// При обработке регистрации
app.post('/signup', async (req, res) => {
    try {
        const hashedPassword = await bcrypt.hash(req.body.password, 10); // Хеширование пароля
        const sql = "INSERT INTO login (name, email, password) VALUES ?";
        const values = [[req.body.name, req.body.email, hashedPassword]];
        db.query(sql, [values], (err, data) => {
            if (err) {
                return res.json("Error");
            }
            return res.json(data);
        });
    } catch (err) {
        return res.json("Error");
    }
});

// При обработке входа
app.post('/login', async (req, res) => {
    const sql = "SELECT * FROM login WHERE email = ?";
    db.query(sql, [req.body.email], async (err, data) => {
        if (err) {
            return res.json("Error");
        }
        if (data.length > 0) {
            const match = await bcrypt.compare(req.body.password, data[0].password); // Сравнение хеша пароля
            if (match) {
                return res.json("Success");
            } else {
                return res.json("Fail");
            }
        } else {
            return res.json("Fail");
        }
    });
});
app.listen(8081, ()=>
{
    console.log("listening");
})