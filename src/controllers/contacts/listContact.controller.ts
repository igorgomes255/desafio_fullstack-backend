import { instanceToPlain } from "class-transformer";
import { Request, Response } from "express";
import { listContactService } from "../../services/contacts/listContact.service";

const listContactController = async (req: Request, res: Response) => {
  const id = req.user.id;
  const listAllContacts = await listContactService(id);

  return res.json(instanceToPlain(listAllContacts));
};

export { listContactController };
