import express from "express";
import appRouter from "./routes/routes";
import cors from "cors"

const app = express();

const port = process.env.PORT || 3333;

app.use(express.json());

app.use(cors())
app.use("/", appRouter);

app.listen(port, () => {
  console.log(`App rodando ${port}`);
});

export default app;
