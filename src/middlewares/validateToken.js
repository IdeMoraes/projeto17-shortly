import db from "../db.js";
import jwt from 'jsonwebtoken';
import dotenv from "dotenv";
dotenv.config();

export async function validateToken(req, res, next){
    const authorization = req.headers.authorization;
    const token = authorization?.replace("Bearer ", "");
    try {
        const decoded = jwt.verify(token, process.env.SECRET_KEY);
        console.log(decoded);
        const session = await db.query(`SELECT * FROM sessions WHERE "userId"=${decoded.userId} AND active=TRUE;`);
        if(session.rowCount>0){
            next();
        }
    } catch (error) {
        console.log(error);
        res.status(500).send(`${error.name}: ${error.message}`);
    }
}