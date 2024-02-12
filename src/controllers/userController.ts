import IUser from '../types/interfaces/IUser';
import { CustomServerCommand } from '../types/types';
import EErrorMsg from '../types/enums/EErrorMsg';
import EStatusCodes from '../types/enums/EStatusCodes';
import CustomError from '../CustomError';

import { validateCreateUserData, validateID } from '../utils/validateUtils';
import { deleteUser, getUser, updateUser } from '../data/customDB';
import { getID, readReqBody } from '../utils/reqUtils';
import { sendResponse } from '../utils/respUtils';

const getUserCommand: CustomServerCommand = (req, res) => {
  const id: string = getID(req);
  const user: IUser | null = getUser(validateID(id));

  if (!user)
    throw new CustomError(EErrorMsg.USER_NOT_EXISTS, EStatusCodes.NOT_FOUND);

  sendResponse(res, EStatusCodes.OK, user);
};

const updateUserCommand: CustomServerCommand = async (req, res) => {
  const id: string = getID(req);
  const data: unknown = await readReqBody(req);

  const user: IUser | null = updateUser(
    validateID(id),
    validateCreateUserData(data)
  );

  if (!user)
    throw new CustomError(EErrorMsg.USER_NOT_EXISTS, EStatusCodes.NOT_FOUND);

  sendResponse(res, EStatusCodes.OK, user);
};

const deleteUserCommand: CustomServerCommand = (req, res) => {
  const id: string = getID(req);
  const user: IUser | null = deleteUser(validateID(id));

  if (!user)
    throw new CustomError(EErrorMsg.USER_NOT_EXISTS, EStatusCodes.NOT_FOUND);

  sendResponse(res, EStatusCodes.NO_CONTENT, {});
};

export { getUserCommand, updateUserCommand, deleteUserCommand };
