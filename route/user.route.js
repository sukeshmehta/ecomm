import { Router } from "express";
import {
  registerUserController,
  verifyEmaiController,
} from "../controllers/user.controller.js";
const userRouter = Router();
userRouter.post("/register", registerUserController);
userRouter.post("/verifyEmail", verifyEmaiController);
export default userRouter;
