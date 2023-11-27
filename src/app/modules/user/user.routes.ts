import express from "express";
import { addUser, getUserByID, getUsers } from "./user.controller";
const router = express.Router();

router.get("/", getUsers);
router.get("/:id", getUserByID);
router.post("/create-user", addUser);

export default router;
