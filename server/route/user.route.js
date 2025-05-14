import { Router } from "express";
import {
  forgetPasswordController,
  loginUserController,
  logoutController,
  refreshToken,
  registerUserController,
  removeImageFromCloudinary,
  resetpasswor,
  updateUserDetails,
  userAvatarController,
  userDetails,
  verifyEmaiController,
  verifyForgotPasswordOtp,
} from "../controllers/user.controller.js";

import auth from "../middlewares/auth.js";
import upload from "../middlewares/multer.js";

const userRouter = Router();

userRouter.post("/register", registerUserController);
userRouter.post("/verifyEmail", verifyEmaiController);
userRouter.post("/login", loginUserController);
userRouter.get("/logout", auth, logoutController);
userRouter.put(
  "/user-avatar",
  auth,
  upload.array("avatar"),
  userAvatarController
);

userRouter.delete("/deleteImage", auth, removeImageFromCloudinary);
userRouter.put("/:id", auth, updateUserDetails);
userRouter.post("/forgot-password", auth, forgetPasswordController);
userRouter.post("/verify-forgot-password-otp", verifyForgotPasswordOtp);
userRouter.post("/reset-password", resetpasswor);
userRouter.post("/refresh-token", refreshToken);
userRouter.get("/user-details", auth, userDetails);

export default userRouter;
