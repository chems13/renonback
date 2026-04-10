import express from "express";
import {
    createCommentaire,
    deleteCommentaire,
    getCommentaires,
    getCommentaireById,
    updateCommentaire,
} from "../controllers/Commentaire_Controller.js";

const router = express.Router();

router.get("/", getCommentaires);
router.get("/:id", getCommentaireById);
router.post("/", createCommentaire);
router.put("/:id", updateCommentaire);
router.delete("/:id", deleteCommentaire);

export default router;