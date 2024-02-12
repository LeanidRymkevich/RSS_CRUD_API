import { CustomServerCommand } from '../types/types';

import { addUser, getUsers } from '../data/customDB';
import createUser from '../models/userModel';

const getUsersCommand: CustomServerCommand = (_req, res) => {
  res.end(JSON.stringify(getUsers()));
};

const createUserCommand: CustomServerCommand = (_req, res) => {
  res.end(JSON.stringify(addUser(createUser('Ivan', 10, []))));
};

export { getUsersCommand, createUserCommand };
