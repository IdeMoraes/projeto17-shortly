import joi from 'joi';

const signinSchema = joi.object({
    email: joi.string().email().required(),
    password: joi.string().required()
});

export function validateSigninSchema(req, res, next){
    const signin = req.body;
    const validation = signinSchema.validate(signin);
    if(validation.error){
        return res.sendStatus(422);
    };
    next();
};