import { Router } from "express";
import { validateSignupSchema } from "../middlewares/validateSignupSchema.js";
import { validateSigninSchema } from "../middlewares/validateSigninSchema.js";
import { signup } from "../controllers/signupController.js";
import { signin } from "../controllers/signinController.js";

const userRouter = Router();
userRouter.post('/signup', validateSignupSchema, signup);
userRouter.post('/signin', validateSigninSchema, signin)

export default userRouter;