import { CustomServerCommand } from '../types/types';

const getUserCommand: CustomServerCommand = (req, res) => {
  console.log('Get user by id');
  console.log(req, res);
};

const updateUserCommand: CustomServerCommand = (req, res) => {
  console.log('Update user by id');
  console.log(req, res);
};

const deleteUserCommand: CustomServerCommand = (req, res) => {
  console.log('Delete user by id');
  console.log(req, res);
};

export { getUserCommand, updateUserCommand, deleteUserCommand };
