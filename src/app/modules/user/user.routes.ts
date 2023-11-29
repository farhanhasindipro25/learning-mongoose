import express from "express";
import {
  addUser,
  getAdminUsers,
  getUserByID,
  getUsers,
} from "./user.controller";
const router = express.Router();

router.get("/", getUsers);
router.get("/admins", getAdminUsers);
router.get("/:id", getUserByID);
router.post("/create-user", addUser);

export default router;
