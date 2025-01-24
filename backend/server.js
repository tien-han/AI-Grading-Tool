import express from "express";
import cors from "cors";
import modelRouter from "./routers/modelRouter.js";

const app = express();
app.use(cors());
app.use(express.json());

app.use('/', modelRouter);

app.listen(3000, () => console.log(`Server started...`));