"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const listUser_service_1 = __importDefault(require("../services/listUser.service"));
const listUserController = (req, res) => {
    const users = (0, listUser_service_1.default)();
    return res.status(200).json(users).send("Hello");
};
exports.default = listUserController;
