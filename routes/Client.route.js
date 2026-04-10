import express from "express";
import {
  createClients,
  deleteClient,
  getClient,
  getClients,
  updateClient
} from "../controllers/Client_Contoller.js";

const router = express.Router();

router.get("/", getClients);
router.post("/", createClients);
router.get("/:id", getClient);
router.put("/:id", updateClient);
router.delete("/:id", deleteClient);

export default router;