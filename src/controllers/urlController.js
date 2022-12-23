import { nanoid } from 'nanoid';

export async function shortenUrl(req, res){
    const {url} = req.body;
    try {
        res.send('Chegou em shortenUrl');
    } catch (error) {
        console.log(error);
        res.status(500).send(`${error.name}: ${error.message}`);
    }
}