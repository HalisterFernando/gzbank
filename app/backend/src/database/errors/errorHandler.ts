import type { ErrorRequestHandler } from 'express';
import { StatusCodes } from 'http-status-codes';

const errors = {
  TokenNotFound: {
    status: StatusCodes.UNAUTHORIZED,
  },
  JsonWebTokenError: {
    status: StatusCodes.UNAUTHORIZED,
  },
  UserNotFound: {
    status: StatusCodes.UNAUTHORIZED,
  },
  JoiError: {
    status: StatusCodes.BAD_REQUEST,
  },
  InsuficientBalance: {
    status: StatusCodes.BAD_REQUEST,
  },
  InternalError: {
    status: StatusCodes.INTERNAL_SERVER_ERROR,
  },
  TokenExpiredError: {
    status: StatusCodes.UNAUTHORIZED,
  },
};

const errorHandler: ErrorRequestHandler = (err, _req, res, _next) => {
  const { name, message } = err;

  const { status } = errors[name as keyof typeof errors];

  return res.status(status).json({ message });
};

export default errorHandler;
