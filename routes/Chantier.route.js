import express from "express";
import {createChantier,deleteChantier,getChantier,getChantiers,updateChantier} from "../controllers/Chantier_Controller.js";


const router = express.Router();

router.get("/", getChantiers);

router.post("/", createChantier);

router.get("/:id", getChantier);


router.put("/:id", updateChantier);

router.delete("/:id", deleteChantier);

export default router;