import { ICommands } from '../types/types';
import ERoutes from '../types/enums/ERoutes';
import EMethod from '../types/enums/EMethod';

import { getUsersCommand, createUserCommand } from './usersController';
import {
  getUserCommand,
  updateUserCommand,
  deleteUserCommand,
} from './userController';

const commands: ICommands = {
  [ERoutes.USERS]: {
    [EMethod.GET]: getUsersCommand,
    [EMethod.POST]: createUserCommand,
  },
  [ERoutes.USER]: {
    [EMethod.GET]: getUserCommand,
    [EMethod.PUT]: updateUserCommand,
    [EMethod.DELETE]: deleteUserCommand,
  },
};

export default commands;
