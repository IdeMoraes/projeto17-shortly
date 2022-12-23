import { Router } from "express";
import { validateToken } from "../middlewares/validateToken.js";

const urlRouter = Router();
urlRouter.post('/urls/shorten', validateToken, )

export default urlRouter;