class AppError extends Error {
  statusCode: number;
  message: string;
  isOperational: boolean;
  date: Date;
  constructor(message: string, statusCode: number = 500) {
    super(message);
    this.message = message;
    this.name = "AppError";
    this.statusCode = statusCode;
    this.isOperational = true;
    this.date = new Date();

    if (Error.captureStackTrace) {
      Error.captureStackTrace(this, this.constructor);
    }
  }
}

class BadRequestError extends AppError {
  constructor(message = "Bad Request", statusCode = 400) {
    super(message, statusCode);
  }
}

class InternalServerError extends AppError {
  constructor(message = "Something Went Wrong.", statusCode = 500) {
    super(message, statusCode);
  }
}

class ForbiddenError extends AppError {
  constructor(message = "Forbidden", statusCode = 403) {
    super(message, statusCode);
  }
}
class NotFoundError extends AppError {
  constructor(message = "Resource not found", statusCode = 404) {
    super(message, statusCode);
  }

}

export {
  BadRequestError,
  InternalServerError,
  ForbiddenError,
  NotFoundError,
  AppError,
};
