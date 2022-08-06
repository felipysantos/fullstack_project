import { Router } from "express";

import listUserController from "../controllers/listUser.controller";
import createUserController from "../controllers/createUser.controller";

const appRouter = Router();

appRouter.get("", listUserController);
appRouter.post("", createUserController);

export default appRouter;
