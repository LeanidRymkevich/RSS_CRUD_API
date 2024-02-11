import { Server } from 'http';

export default interface ICustomServer {
  launch: () => Server;
  off: () => Server;
}
