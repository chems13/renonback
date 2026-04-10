import express from "express";
import {createChantier,deleteChantier,getChantiers,updateChantier} from "../controllers/Chantier_Controller.js";

const router = express.Router();

router.get("/", getChantiers);

router.post("/", createChantier);


router.put("/:id", updateChantier);

router.delete("/:id", deleteChantier);

export default router;