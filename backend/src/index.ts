import express from "express";
import appRouter from "./routes/routes";

const app = express();

const port = process.env.PORT || 3333

app.use(express.json());

app.use("/", appRouter);

app.listen(port);

export default app;
