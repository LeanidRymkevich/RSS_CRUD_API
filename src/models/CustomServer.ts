import { IncomingMessage, Server, ServerResponse, createServer } from 'http';

const createCustomServer = (): Server<
  typeof IncomingMessage,
  typeof ServerResponse
> =>
  createServer((req, res) => {
    console.log(req, res);
  });

export default createCustomServer;
