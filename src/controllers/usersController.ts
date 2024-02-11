import { CustomServerCommand } from '../types/types';

const getUsersCommand: CustomServerCommand = (req, res) => {
  console.log('All users controller');
  console.log(req, res);
};

const createUserCommand: CustomServerCommand = (req, res) => {
  console.log('Create user by id');
  console.log(req, res);
};

export { getUsersCommand, createUserCommand };
