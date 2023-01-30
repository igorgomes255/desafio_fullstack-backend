import { Router } from "express";
import { createContactController } from "../controllers/contacts/createContact.controller";
import { listContactController } from "../controllers/contacts/listContact.controller";
import { verifyAuthUserMiddleware } from "../middlewares/verifyAuthUser.middleware";

const routes = Router();

const contactRoutes = () => {
  routes.post("", verifyAuthUserMiddleware, createContactController);
  routes.get("", verifyAuthUserMiddleware, listContactController);

  return routes;
};

export { contactRoutes };
