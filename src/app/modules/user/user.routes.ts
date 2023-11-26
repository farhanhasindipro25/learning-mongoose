import express from "express";
import { addUser } from "./user.controller";
const router = express.Router();

router.get("/");
router.get("/create-user", addUser);

export default router;
