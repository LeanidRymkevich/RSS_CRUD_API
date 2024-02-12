import { IncomingMessage, Server, ServerResponse, createServer } from 'http';

import execute from '../controllers/controller';
import { sendError } from '../utils/respSender';

const createCustomServer = (): Server<
  typeof IncomingMessage,
  typeof ServerResponse
> =>
  createServer(async (req, res) => {
    try {
      await execute(req, res);
    } catch (err) {
      sendError(res, err);
    }
  });

export default createCustomServer;
