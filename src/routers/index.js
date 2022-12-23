import { Router } from "express";
import urlRouter from "./urlRouter.js";
import userRouter from "./userRouter.js";

const router = Router();

router.use(userRouter);
router.use(urlRouter);

export default router;