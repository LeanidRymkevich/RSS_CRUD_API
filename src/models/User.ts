import IUser from 'src/types/interfaces/IUser';
import { v4 as uuid } from 'uuid';

const User = (username: string, age: number, hobbies: string[]): IUser => {
  return {
    id: uuid(),
    username,
    age,
    hobbies,
  };
};

export default User;
