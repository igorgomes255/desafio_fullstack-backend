import AppDataSource from "../../data-source";
import { Contact } from "../../entities/client.entity";
import { AppError } from "../../errors/appError";
import { IContactUpdate } from "../../interfaces/contact";

const updateContactService = async (
  { full_name, email, phone }: IContactUpdate,
  id: string
) => {
  const contactRepository = AppDataSource.getRepository(Contact);

  const contacts = await contactRepository.find();

  const contact = contacts.find((contact) => contact.id === id);

  if (!contact) {
    throw new AppError("Contact not found", 404);
  }

  await contactRepository.update(contact!.id, {
    full_name: full_name ? full_name : contact.full_name,
    email: email ? email : contact.email,
    phone: phone ? phone : contact.phone,
  });
};
0;

export { updateContactService };

/* 

await GamesRepository.update(game!.id, {
  name: name ? name : game.name,
  price: price ? price : game.price,
  age: age ? age : game.age,
  launch: launch ? launch : game.launch,
  description: description ? description : game.description,
  developer: developer ? developer : game.developer,
  image: image ? image : game.image,
});

return game; */
