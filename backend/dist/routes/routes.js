"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const listUser_controller_1 = __importDefault(require("../controllers/listUser.controller"));
const createUser_controller_1 = __importDefault(require("../controllers/createUser.controller"));
const appRouter = (0, express_1.Router)();
appRouter.get("", listUser_controller_1.default);
appRouter.post("", createUser_controller_1.default);
exports.default = appRouter;
