import joi from 'joi';

const userSchema = joi.object({
    name: joi.string().required(),
    email: joi.string().email().required(),
    password: joi.string().required(),
    confirmPassword: joi.string().required()
});

export function validateUserSchema(req,res,next){
    const user = req.body;
    const validation = userSchema.validate(user);
    if(validation.error){
        return res.sendStatus(422);
    }
    if(user.password !== user.confirmPassword){
        return res.sendStatus(422);
    }
    next();
};