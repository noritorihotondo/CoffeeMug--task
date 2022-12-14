import { HTTPCode } from '../../types';

export default class APIError extends Error {
  public code: number;

  constructor(message: string, code = HTTPCode.INTERNAL_SERVER_ERROR) {
    super(message);

    this.code = code;
  }
}
