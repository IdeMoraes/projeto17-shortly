import db from "../db.js";
import bcrypt from "bcrypt";
import jwt from 'jsonwebtoken';
import dotenv from "dotenv";
dotenv.config();

export async function signin(req, res){
    const {email, password} = req.body;
    try {
        const user = await db.query(`SELECT * FROM users WHERE email = $1 `, [email]);
        if(user.rowCount===0){
            return res.sendStatus(401);
        };
        if(!bcrypt.compareSync(password, user.rows[0].password)){
            return res.sendStatus(401);  
        };
        const token = jwt.sign({user: user.rows[0].id}, process.env.SECRET_KEY);
        const session = await db.query(`INSERT INTO sessions ("userId", token) VALUES ($1, $2);`, [user.rows[0].id, token]);
        if(session.rowCount>0){
            res.status(200).send(token);
        };
    } catch (error) {
        console.log(error);
        res.status(500).send(`${error.name}: ${error.message}`);
    }
}
