import { validate } from 'uuid';

import { UserInfo } from '../types/types';
import CustomError from '../CustomError';
import EErrorMsg from '../types/enums/EErrorMsg';
import EStatusCodes from '../types/enums/EStatusCodes';

const validateCreateUserData = (data: unknown): UserInfo => {
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

  return info;
};

const validateID = (id: string): string => {
  if (!validate(id))
    throw new CustomError(EErrorMsg.INVALID_ID, EStatusCodes.BAD_REQUEST);
  return id;
};

export { validateCreateUserData, validateID };
