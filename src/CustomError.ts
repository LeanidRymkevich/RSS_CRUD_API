import EStatusCodes from './types/enums/EStatusCodes';

export default class CustomError extends Error {
  public readonly code: EStatusCodes;

  constructor(msg: string, code: EStatusCodes) {
    super(msg);
    this.code = code;
  }
}
