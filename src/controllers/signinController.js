import db from "../db.js";
import bcrypt from "bcrypt";

export async function signin(req, res){
    const {email, password} = req.body;
    try {
        const result = await db.query(`SELECT * FROM users WHERE email = $1 `, [email]);
        if(result.rowCount>0){
            console.log(result.rows);
            res.send(result.rows);
        }
    } catch (error) {
        console.log(error);
        res.status(500).send(`${error.name}: ${error.message}`);
    }
}
