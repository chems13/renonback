import express from "express";
import {
  createClients,
  deleteClient,
  getClient,
  getClients,
  updateClient
} from "../controllers/Client_Contoller.js";
import verifyToken from "../middleware/verrifyToken.js";
import verifyRole from "../middleware/verifyRole.js";


const router = express.Router();

router.get("/", getClients);

router.use(verifyToken, verifyRole("ADMIN"));

router.get("/:id", getClient);
router.post("/", createClients);
router.put("/:id", updateClient);
router.delete("/:id", deleteClient);

export default router;