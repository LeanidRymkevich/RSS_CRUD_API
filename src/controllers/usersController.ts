import { CustomServerCommand } from '../types/types';

import { addUser, getUsers } from '../data/customDB';
import { sendResponse } from '../utils/respSender';
import EStatusCodes from '../types/enums/EStatusCodes';
import readReqBody from '../utils/reqBodyReader';
import IUser from '../types/interfaces/IUser';
import { validateCreateUserData } from 'src/utils/validator';

const getUsersCommand: CustomServerCommand = async (_req, res) => {
  sendResponse(res, EStatusCodes.OK, getUsers());
};

const createUserCommand: CustomServerCommand = async (req, res) => {
  const data: unknown = await readReqBody(req);
  const newUser: IUser = validateCreateUserData(data);

  addUser(newUser);
  sendResponse(res, EStatusCodes.OK, newUser);
};

export { getUsersCommand, createUserCommand };
