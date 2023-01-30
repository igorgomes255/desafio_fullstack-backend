interface IUserRequest {
  full_name: string;
  email: string;
  password: string;
  phone: string;
}

interface IUser {
  id: string;
  full_name: string;
  email: string;
  password: string;
  phone: string;
  createdAt: Date;
}

interface IUserLogin {
  email: string;
  password: string;
}

interface IUserUpdate {
  full_name?: string;
  email?: string;
  password?: string;
  phone?: string;
}

export { IUserRequest, IUser, IUserLogin, IUserUpdate };
