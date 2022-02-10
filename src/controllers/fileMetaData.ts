import { Request, Response } from "express";
import { StatusCodes } from "http-status-codes";
import CustomError from "../errors/CustomError";

export const uploadFile = (req: Request, res: Response) => {
  if (!req.file) {
    throw new CustomError("You must provide a file", StatusCodes.BAD_REQUEST);
  }

  res.status(StatusCodes.OK).json({
    name: req.file?.originalname,
    type: req.file?.mimetype,
    size: req.file?.size,
  });
};
