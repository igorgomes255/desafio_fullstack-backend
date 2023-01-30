interface IContactRequest {
  full_name: string;
  email: string;
  phone: string;
}

interface IContactUpdate {
  full_name?: string;
  email?: string;
  phone?: string;
}

export { IContactRequest, IContactUpdate };
