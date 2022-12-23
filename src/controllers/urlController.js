import { nanoid } from 'nanoid';
import db from '../db.js';

export async function shortenUrl(req, res){
    const {url} = req.body;
    const shortenedUrl = nanoid(10);
    try {
        const result = db.query(`INSERT INTO shortened ("userId", "originalUrl", "shortenedUrl") VALUES ($1, $2, $3);`, [res.locals.user.id, url, shortenedUrl]);
        if(result.rowCount>0){
            return res.sendStatus(200);
        }
    } catch (error) {
        console.log(error);
        res.status(500).send(`${error.name}: ${error.message}`);
    }
}