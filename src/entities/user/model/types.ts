/* --- STATE --- */
export interface UserState {
  users: User[];
}

export interface User {
  id: number;
  name: string;
  email: string;
  role: string;
  createdAt: number;
  updatedAt: number;
}
