import { Request, Response } from "express";

export const uploadFile = (req: Request, res: Response) => {
  res.send("upload me");
};
export const getFileInfo = (req: Request, res: Response) => {
  res.send("see my info");
};
