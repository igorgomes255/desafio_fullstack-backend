import { Router } from "express";
import { createContactController } from "../controllers/contacts/createContact.controller";
import { deleteContactController } from "../controllers/contacts/deleteContact.controller";
import { listContactController } from "../controllers/contacts/listContact.controller";
import { updateContactController } from "../controllers/contacts/updateContact.controller";
import { verifyAuthUserMiddleware } from "../middlewares/verifyAuthUser.middleware";
import { verifyOwnerMiddleware } from "../middlewares/verifyOwner.middleware";

const routes = Router();

const contactRoutes = () => {
  routes.post("", verifyAuthUserMiddleware, createContactController);
  routes.get("", verifyAuthUserMiddleware, listContactController);
  routes.patch(
    "/:id",
    verifyAuthUserMiddleware,
    verifyOwnerMiddleware,
    updateContactController
  );
  routes.delete(
    "/:id",
    verifyAuthUserMiddleware,
    verifyOwnerMiddleware,
    deleteContactController
  );

  return routes;
};

export { contactRoutes };
