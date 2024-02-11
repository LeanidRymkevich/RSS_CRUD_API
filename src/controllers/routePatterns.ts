import { IRoutePattern } from 'src/types/types';
import ERoutes from '../types/enums/ERoutes';

const routePatterns: IRoutePattern = {
  [ERoutes.USERS]: /\/api\/users/,
  [ERoutes.USER]: /\/api\/users\/(\w-?)+/,
};

export default routePatterns;
