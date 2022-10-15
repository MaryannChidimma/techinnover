import express from "express";
const isProduction = process.env.NODE_ENV === "production";
import appResponse from "../../lib/appResponse";
import { AppError } from "../../lib/appError";

const errorNames = [
  "CastError",
  "JsonWebTokenError",
  "ValidationError",
  "SyntaxError",
  "DatabaseError",
  "ConnectionError"
];

const ErrorMiddleware = function (
  error: AppError,
  req: express.Request,
  res: express.Response,
  next: express.NextFunction
) {
  if (error.name === "AppError" || error.isOperational) {
    return res
      .status(error.statusCode)
      .send(appResponse(error.message, null, false));
  }

  if (errorNames.includes(error.name)) {
    return res.status(400).send(appResponse(error.message, null, false));
  }

  const message = isProduction
    ? "An unexpected error has occured. Please, contact the administrator"
    : error.message;

  return res.status(500).send(appResponse(message, null, false));
};

export { ErrorMiddleware };
