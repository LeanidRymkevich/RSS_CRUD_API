import { UserInfo } from '../types/types';
import CustomError from '../CustomError';
import EErrorMsg from '../types/enums/EErrorMsg';
import EStatusCodes from '../types/enums/EStatusCodes';
import IUser from '../types/interfaces/IUser';
import createUser from 'src/models/userModel';

const validateCreateUserData = (data: unknown): IUser => {
  const err = new CustomError(
    EErrorMsg.MISSING_DATA_FOR_USER_CREATING,
    EStatusCodes.BAD_REQUEST
  );

  if (typeof data !== 'object') throw err;

  const info = data as UserInfo;

  if (
    !info.age ||
    !info.username ||
    !info.hobbies ||
    !Array.isArray(info.hobbies)
  )
    throw err;

  return createUser(info);
};

export { validateCreateUserData };
