"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const db_1 = __importDefault(require("../database/db"));
const uuid_1 = require("uuid");
const createUserService = ({ name, email, birthdate, cellphone, }) => {
    const userAlreadyExists = db_1.default.find((user) => user.email === email);
    if (userAlreadyExists) {
        const err = new Error("Email já existe");
        err.name = "Erro 400";
        throw err;
    }
    const newUser = {
        id: (0, uuid_1.v4)(),
        name: name,
        email: email,
        birthdate: birthdate,
        cellphone: cellphone,
    };
    db_1.default.push(newUser);
    return newUser;
};
exports.default = createUserService;
