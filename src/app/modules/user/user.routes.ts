import express from "express";
import { addUser, getUsers } from "./user.controller";
const router = express.Router();

router.get("/", getUsers);
router.post("/create-user", addUser);

export default router;
