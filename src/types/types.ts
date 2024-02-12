import { IncomingMessage, ServerResponse } from 'http';

import IUser from './interfaces/IUser';
import EMethod from './enums/EMethod';
import ERoutes from './enums/ERoutes';

type UserInfo = Omit<IUser, 'id'>;

type CustomServerCommand = (
  req: IncomingMessage,
  res: ServerResponse<IncomingMessage> & {
    req: IncomingMessage;
  }
) => Promise<void>;

type ICommands = {
  [key in ERoutes]: { [key in EMethod]?: CustomServerCommand };
};

type IRoutePattern = {
  [key in ERoutes]: RegExp;
};

export { UserInfo, CustomServerCommand, ICommands, IRoutePattern };
