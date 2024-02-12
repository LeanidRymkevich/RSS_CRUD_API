import { v4 as uuid } from 'uuid';

import IUser from '../types/interfaces/IUser';
import { UserInfo } from '../types/types';

const createUser = (info: UserInfo): IUser => {
  return {
    id: uuid(),
    ...info,
  };
};

export default createUser;
