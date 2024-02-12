import { CustomServerCommand, ICommands } from '../types/types';
import ERoutes from '../types/enums/ERoutes';
import EMethod from '../types/enums/EMethod';
import EErrorMsg from '../types/enums/EErrorMsg';
import EStatusCodes from '../types/enums/EStatusCodes';

import { getUsersCommand, createUserCommand } from './usersController';
import {
  getUserCommand,
  updateUserCommand,
  deleteUserCommand,
} from './userController';
import routePatterns from './routePatterns';
import CustomError from '../CustomError';

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

const execute: CustomServerCommand = async (req, res) => {
  const url: string | undefined = req.url;

  if (!url)
    throw new CustomError(EErrorMsg.NO_SUCH_PATH, EStatusCodes.NOT_FOUND);

  const matchPath: string | undefined = Object.keys(commands).find(
    (key: string): boolean => routePatterns[key as unknown as ERoutes].test(url)
  );

  if (!matchPath)
    throw new CustomError(EErrorMsg.NO_SUCH_PATH, EStatusCodes.NOT_FOUND);

  if (!req.method)
    throw new CustomError(EErrorMsg.NO_METHOD, EStatusCodes.BAD_REQUEST);

  const command: CustomServerCommand | undefined =
    commands[matchPath as unknown as ERoutes][req.method as EMethod];

  if (!command)
    throw new CustomError(
      EErrorMsg.NOT_SUPPORTED_METHOD_FOR_PATH,
      EStatusCodes.BAD_REQUEST
    );

  await command(req, res);
};

export default execute;
