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
  let userToDelete: IUser | null = null;

  users = users.filter((user: IUser): boolean => {
    if (user.id !== id) return true;
    userToDelete = user;
    return false;
  });

  return userToDelete;
};

export { getUsers, getUser, addUser, updateUser, deleteUser };
