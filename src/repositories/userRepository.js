import db from "../db.js";
import bcrypt from "bcrypt";

export async function insertUser(name, email, password){
    const passwordHash = bcrypt.hashSync(password, 10);
    const result = await db.query(`INSERT INTO users (name, email, password)VALUES ($1, $2, $3);`, [name, email, passwordHash]);
    return result;
};