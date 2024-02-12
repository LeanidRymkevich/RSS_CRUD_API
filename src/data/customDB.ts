import IUser from '../types/interfaces/IUser';
import { UserInfo } from '../types/types';

let users: IUser[] = [];

const getUsers = (): IUser[] => users;

const getUser = (id: string): IUser | null =>
  users.find((user: IUser): boolean => user.id === id) || null;

const addUser = (user: IUser): number => users.push(user);

const updateUser = (id: string, info: UserInfo): IUser | null => {
  const userIdx: number = users.findIndex(
    (user: IUser): boolean => user.id === id
  );
  const user: IUser | undefined = users[userIdx];

  if (userIdx === -1 || !user) return null;

  users[userIdx] = { id: user.id, ...info };

  return users[userIdx] || null;
};

const deleteUser = (id: string): IUser | null => {
  const userIdx: number = users.findIndex(
    (user: IUser): boolean => user.id === id
  );
  const user: IUser | undefined = users[userIdx];

  if (userIdx === -1 || !user) return null;

  users = users.splice(userIdx, 1);

  return user;
};

export { getUsers, getUser, addUser, updateUser, deleteUser };
