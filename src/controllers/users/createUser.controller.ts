import { instanceToInstance } from "class-transformer";
import { Request, Response } from "express";
import { createUserService } from "../../services/users/createUser.service";

const createUserController = async (req: Request, res: Response) => {
  const { full_name, email, phone, password } = req.body;

  const user = await createUserService({ full_name, email, phone, password });

  return res.status(201).json(instanceToInstance(user));
};

export { createUserController };
