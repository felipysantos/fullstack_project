import createUserService from "../services/createUser.service";

import { Request, Response } from "express";

const createUserController = (req: Request, res: Response) => {
  const { name, email, cellphone, birthdate } = req.body;
  try {
    const newUser = createUserService({ name, email, cellphone, birthdate });

    return res.status(201).json({ message: "User created", user: newUser });
  } catch (err) {
    if (err instanceof Error) {
      return res.status(400).send({
        error: err.name,
        message: err.message,
      });
    }
  }
};
export default createUserController;
