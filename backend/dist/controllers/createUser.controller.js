"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const createUser_service_1 = __importDefault(require("../services/createUser.service"));
const createUserController = (req, res) => {
    const { name, email, cellphone, birthdate } = req.body;
    try {
        const newUser = (0, createUser_service_1.default)({ name, email, cellphone, birthdate });
        return res.status(201).json({ message: "User created", user: newUser });
    }
    catch (err) {
        if (err instanceof Error) {
            return res.status(400).send({
                error: err.name,
                message: err.message,
            });
        }
    }
};
exports.default = createUserController;
