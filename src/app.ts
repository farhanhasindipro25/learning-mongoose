import cors from "cors";
import express, { Application } from "express";
import userRoutes from "./app/modules/user/user.routes";

const app: Application = express();
app.use(cors());

// parse data
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use("/api/v1/users", userRoutes);

export default app;
