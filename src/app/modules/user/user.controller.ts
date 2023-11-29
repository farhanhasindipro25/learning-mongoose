import { NextFunction, Request, Response } from "express";
import {
  addUserToDB,
  getAdminUsersFromDB,
  getUserByIDFromDB,
  getUsersFromDB,
} from "./user.service";

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

export const getUserByID = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  const { id } = req.params;
  const user = await getUserByIDFromDB(id);
  res.status(200).json({
    status: "Successfull",
    data: user,
  });
};

export const getAdminUsers = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  const user = await getAdminUsersFromDB();
  res.status(200).json({
    status: "Successfull",
    data: user,
  });
};

// Route -> Controller -> Service
