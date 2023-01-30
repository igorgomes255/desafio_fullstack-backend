import { Router } from "express";
import { createUserController } from "../controllers/users/createUser.controller";
import { listUserController } from "../controllers/users/listUser.controller";

const userRoutes = Router();

const usersRoutes = () => {
  userRoutes.post("", createUserController);
  userRoutes.get("/:id", listUserController);

  return userRoutes;
};

export { usersRoutes };
