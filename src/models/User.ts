import { v4 as uuid } from 'uuid';

import IUser from '../types/interfaces/IUser';

const User = (username: string, age: number, hobbies: string[]): IUser => {
  return {
    id: uuid(),
    username,
    age,
    hobbies,
  };
};

export default User;
