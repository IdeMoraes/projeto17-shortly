import { Router } from "express";
import helloWorldRouter from "./helloWorldRouter.js";

const router = Router();

router.use(helloWorldRouter);

export default router;