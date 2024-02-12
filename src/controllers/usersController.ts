import { CustomServerCommand } from '../types/types';
import IUser from '../types/interfaces/IUser';
import EStatusCodes from '../types/enums/EStatusCodes';

import { addUser, getUsers } from '../data/customDB';
import { sendResponse } from '../utils/respUtils';
import { readReqBody } from '../utils/reqUtils';
import { validateCreateUserData } from '../utils/validateUtils';
import createUser from '../models/userModel';

const getUsersCommand: CustomServerCommand = (_req, res) => {
  sendResponse(res, EStatusCodes.OK, getUsers());
};

const createUserCommand: CustomServerCommand = async (req, res) => {
  const data: unknown = await readReqBody(req);
  const newUser: IUser = createUser(validateCreateUserData(data));

  addUser(newUser);
  sendResponse(res, EStatusCodes.CREATED, newUser);
};

export { getUsersCommand, createUserCommand };
