import "reflect-metadata";
import "express-async-errors";
import express from "express";
import "express-async-errors";
import handleErrorMiddleware from "./middlewares/handleError.middleware";

const app = express();
app.use(express.json());

app.get("/", (request, response) => {
  response.send("Hello people");
});

app.use(handleErrorMiddleware);

export default app;
