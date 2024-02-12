import { IncomingMessage } from 'http';

const readReqBody = (req: IncomingMessage): Promise<unknown> => {
  return new Promise((resolve, reject) => {
    let res = '';

    try {
      req.on('data', (chunk: unknown): void => {
        res += String(chunk);
      });

      req.on('end', (): void => {
        resolve(JSON.parse(res));
      });
    } catch (err) {
      reject(err);
    }
  });
};

export default readReqBody;
