import db from "../db.js";
import bcrypt from "bcrypt";

export async function signup(req, res){
    const {name, email, password} = req.body;
    const passwordHash = bcrypt.hashSync(password, 10);
    try {
        const result = await db.query(`INSERT INTO users (name, email, password) VALUES ($1, $2, $3);`, [name, email, passwordHash]);
        if(result.rowCount>0){
            res.sendStatus(201);
        }
    } catch (error) {
        console.log(error);
        res.status(500).send(`${error.name}: ${error.message}`);
    }
}