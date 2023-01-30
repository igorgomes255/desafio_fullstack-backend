import { Request, Response } from "express";
import { updateContactService } from "../../services/contacts/updateContact.service";

const updateContactController = async (req: Request, res: Response) => {
  const { full_name, email, phone } = req.body;
  const { id } = req.params;

  const updatedContact = await updateContactService(
    { full_name, email, phone },
    id
  );

  return res.status(200).json({ message: "Contact updated" });
};

export { updateContactController };
