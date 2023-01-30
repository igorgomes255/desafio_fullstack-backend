import { Request, Response } from "express";
import { deleteContactService } from "../../services/contacts/deleteContact.service";

const deleteContactController = async (req: Request, res: Response) => {
  const { id } = req.params;

  const contactDelete = await deleteContactService(id);

  return res.status(204).json(contactDelete);
};

export { deleteContactController };
