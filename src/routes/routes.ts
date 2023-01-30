import { Express } from "express";
import { sessionRoutes } from "./sessions.routes";

import { usersRoutes } from "./users.routes";

const appRoutes = (app: Express) => {
  app.use("/users", usersRoutes());
  app.use("/login", sessionRoutes());
};

export { appRoutes };
