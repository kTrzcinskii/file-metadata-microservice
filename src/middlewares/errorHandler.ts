import { ErrorRequestHandler } from "express";
import { StatusCodes } from "http-status-codes";
import CustomError from "../errors/CustomError";

const errorHandler: ErrorRequestHandler = (err: CustomError, _, res, __) => {
  let CustomError = {
    statusCode: err.statusCode || StatusCodes.INTERNAL_SERVER_ERROR,
    message: err.message || "Something went wrong, try again later",
  };

  return res
    .status(CustomError.statusCode)
    .json({ error: CustomError.message });
};

export default errorHandler;
