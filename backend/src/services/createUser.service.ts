import database from "../database/db";
import { ICreateUser } from "../interfaces/userInterface";
import { v4 as uuid } from "uuid";

const createUserService = ({
  name,
  email,
  birthdate,
  cellphone,
}: ICreateUser) => {
  const userAlreadyExists = database.find((user) => user.email === email);

  if (userAlreadyExists) {
    const err = new Error("Email já existe");
    err.name = "Erro 400"
    throw err
  }

  const newUser = {
    id: uuid(),
    name: name,
    email: email,
    birthdate: birthdate,
    cellphone: cellphone,
  };

  database.push(newUser);

  return newUser;
};
export default createUserService;
