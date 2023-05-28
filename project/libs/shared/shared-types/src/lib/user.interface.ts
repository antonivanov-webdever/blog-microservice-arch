export interface User {
  _id?: string;
  email: string;
  firstname: string;
  lastname: string;
  passwordHash: string;
  avatar?: string;
  createdAt?: number;
}
