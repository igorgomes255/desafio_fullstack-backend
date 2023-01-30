import AppDataSource from "../../data-source";
import { Contact } from "../../entities/client.entity";
import { User } from "../../entities/user.entity";

const listContactService = async (id: string) => {
  const userRepository = AppDataSource.getRepository(User);

  const contactProperties = await userRepository.findOne({
    where: {
      id: id,
    },
    relations: {
      clients: true,
    },
  });

  return contactProperties?.clients;
};

export { listContactService };
