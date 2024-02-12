import { IncomingMessage } from 'http';
import CustomError from '../CustomError';
import EErrorMsg from '../types/enums/EErrorMsg';
import EStatusCodes from '../types/enums/EStatusCodes';

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

const getID = (req: IncomingMessage): string => {
  const url: string | undefined = req.url;

  if (!url)
    throw new CustomError(EErrorMsg.NO_SUCH_PATH, EStatusCodes.NOT_FOUND);

  return url.split('/').at(-1) || '';
};

export { readReqBody, getID };
