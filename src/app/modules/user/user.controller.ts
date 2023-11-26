import { NextFunction, Request, Response } from "express";
import { addUserToDB, getUsersFromDB } from "./user.service";

export const addUser = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  const data = req.body;
  const user = await addUserToDB(data);
  res.status(200).json({
    status: "Successfull",
    data: user,
  });
};

export const getUsers = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  const user = await getUsersFromDB();
  res.status(200).json({
    status: "Successfull",
    data: user,
  });
};

// Route -> Controller -> Service
