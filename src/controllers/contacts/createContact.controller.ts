import { createContactService } from "../../services/contacts/createContact.service";
import { Request, Response } from "express";
import { instanceToPlain } from "class-transformer";

const createContactController = async (req: Request, res: Response) => {
  const { full_name, email, phone } = req.body;
  const id = req.user.id;
  const createdContact = await createContactService(
    { full_name, email, phone },
    id
  );
  return res.status(201).json(instanceToPlain(createdContact));
};

export { createContactController };
