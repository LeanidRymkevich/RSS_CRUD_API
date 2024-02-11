import IUser from './interfaces/IUser';

type UserInfo = Omit<IUser, 'id'>;

export { UserInfo };
