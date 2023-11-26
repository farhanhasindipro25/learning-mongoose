import { NextFunction, Request, Response } from "express";
import { addUserToDB } from "./user.service";

export const  addUser = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  const user = await addUserToDB();
  res.status(200).json({
    status: "Successfull",
    data: user,
  });
};

// Route -> Controller -> Service
