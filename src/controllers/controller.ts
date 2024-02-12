import { CustomServerCommand, ICommands } from '../types/types';
import ERoutes from '../types/enums/ERoutes';
import EMethod from '../types/enums/EMethod';

import { getUsersCommand, createUserCommand } from './usersController';
import {
  getUserCommand,
  updateUserCommand,
  deleteUserCommand,
} from './userController';
import routePatterns from './routePatterns';

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

const execute: CustomServerCommand = (req, res) => {
  const url: string = req.url!; // check later

  const matchPath: string | undefined = Object.keys(commands).find(
    (key: string): boolean => routePatterns[key as unknown as ERoutes].test(url)
  );

  if (!matchPath) {
    console.log('no such path');
    return;
  }

  const command: CustomServerCommand | undefined =
    commands[matchPath as unknown as ERoutes][req.method! as EMethod];

  if (!command) {
    console.log('no method for this route');
  } else {
    command(req, res);
  }
};

export default execute;
