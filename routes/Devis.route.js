import express from "express";
import {
    createDevis,
    deleteDevis,
    getDevis,
    getDevisById,
    updateDevis,
} from "../controllers/Devis_Controller.js";


const router = express.Router();

router.get("/", getDevis);

router.get("/:id", getDevisById);

router.post("/", createDevis);

router.put("/:id", updateDevis);

router.delete("/:id", deleteDevis);

export default router;