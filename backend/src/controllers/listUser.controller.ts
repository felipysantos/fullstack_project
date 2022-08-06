import { Request, Response } from "express";
import listUserService from "../services/listUser.service";

const listUserController = (req: Request, res: Response) => {
  const users = listUserService();

  return res.status(200).json(users);
};

export default listUserController;
