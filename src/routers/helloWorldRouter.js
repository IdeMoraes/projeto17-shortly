import { Router } from "express";
import { helloWorldFunction } from "../controllers/helloWorldController.js";

const helloWorldRouter = Router();
helloWorldRouter.get('/hello-world', helloWorldFunction);

export default helloWorldRouter;