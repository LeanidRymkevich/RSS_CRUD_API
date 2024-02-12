import { ServerResponse, IncomingMessage } from 'http';

import EStatusCodes from '../types/enums/EStatusCodes';
import CustomError from '../CustomError';
import EErrorMsg from '../types/enums/EErrorMsg';

const CONTENT_TYPE_HEADER = 'Content-Type';
const CONTENT_TYPE_HEADER_VALUE = 'application/json';

const sendResponse = (
  res: ServerResponse<IncomingMessage> & {
    req: IncomingMessage;
  },
  code: EStatusCodes,
  body: unknown
): void => {
  res.statusCode = code;
  res.setHeader(CONTENT_TYPE_HEADER, CONTENT_TYPE_HEADER_VALUE);
  res.end(JSON.stringify(body));
};

const sendError = (
  res: ServerResponse<IncomingMessage> & {
    req: IncomingMessage;
  },
  err: unknown | Error
): void => {
  res.setHeader(CONTENT_TYPE_HEADER, CONTENT_TYPE_HEADER_VALUE);

  let msg: string;
  if (err instanceof CustomError) {
    res.statusCode = err.code;
    msg = err.message;
  } else {
    res.statusCode = EStatusCodes.INTERNAL_SERVER_ERROR;
    msg = EErrorMsg.UNKNOWN_ERR;
  }

  res.end(JSON.stringify({ message: msg }));
};

export { sendResponse, sendError };
