import { insertUser } from "../repositories/userRepository.js";

export async function signUp(req,res){
    const {name, email, password} = req.body;
    try {
        const result = insertUser(name, email, password);
        console.log(result);
        if(result.rowCount>0){
            res.sendStatus(201);
        }
    } catch (error) {
        console.log(error);
        res.status(500).send(`${error.name}: ${error.message}`);
    }
}