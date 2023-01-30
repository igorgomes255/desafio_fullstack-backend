import { Router } from "express";
import { createUserController } from "../controllers/users/createUser.controller";
import { deleteUserController } from "../controllers/users/deleteUser.controller";
import { listUserController } from "../controllers/users/listUser.controller";
import { updateUserController } from "../controllers/users/updateUser.controller";
import { verifyAuthUserMiddleware } from "../middlewares/verifyAuthUser.middleware";

const userRoutes = Router();

const usersRoutes = () => {
  userRoutes.post("", createUserController);
  userRoutes.get("/profile", verifyAuthUserMiddleware, listUserController);
  userRoutes.patch("/profile", verifyAuthUserMiddleware, updateUserController);
  userRoutes.delete("/profile", verifyAuthUserMiddleware, deleteUserController);

  return userRoutes;
};

export { usersRoutes };
