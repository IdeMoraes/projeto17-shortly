import { Router } from "express";
import { validateToken } from "../middlewares/validateToken";

const urlRouter = Router();
urlRouter.post('/urls/shorten', validateToken, )

export default urlRouter;