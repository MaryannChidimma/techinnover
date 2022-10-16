import Joi from "joi";
import express from "express";
import { BadRequestError } from "../../lib/appError";

type Source = "body" | "query" | "params" | "headers";

const Validator =
  (schema: Joi.ObjectSchema, source: Source) =>
    (req: express.Request, res: express.Response, next: express.NextFunction) => {
      const result = schema.validate(req[source]);

      if (result.error) {
        throw new BadRequestError(result.error.message);
      }
      next();
    };

export { Validator };