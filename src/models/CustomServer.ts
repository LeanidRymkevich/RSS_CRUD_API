import { IncomingMessage, Server, ServerResponse, createServer } from 'http';

import execute from '../controllers/controller';

const createCustomServer = (): Server<
  typeof IncomingMessage,
  typeof ServerResponse
> =>
  createServer((req, res) => {
    execute(req, res);
  });

export default createCustomServer;
