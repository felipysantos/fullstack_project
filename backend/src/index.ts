import express from "express";
import appRouter from "./routes/routes";

const app = express();

app.use(express.json());

app.use("/", appRouter);

app.listen(3000);

export default app;
