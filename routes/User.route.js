import express from "express";
import verifyToken from "../middleware/verifyToken.js";
import verifyRole from "../middleware/verifyRole.js";
import { inscription,login,getAllUsers } from "../controllers/UserController.js";

const router = express.Router();

router.post("/",inscription);

router.post("/login",login);

router.get("/all",verifyToken, verifyRole("ADMIN"),getAllUsers);

export default router;