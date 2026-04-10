import Commentaire from "../models/Commentaire.js";

// GET tous les commentaires
export const getCommentaires = async (req, res) => {
  try {
    const commentaires = await Commentaire.findAll();
    res.status(200).json(commentaires);
  } catch (error) {
    res.status(500).json({ erreur: error.message });
  }
};

// GET commentaire par ID
export const getCommentaireById = async (req, res) => {
  try {
    const commentaire = await Commentaire.findByPk(req.params.id);

    if (!commentaire) {
      return res.status(404).json({ msg: "Pas de commentaire avec cet ID" });
    }

    res.status(200).json(commentaire);
  } catch (error) {
    res.status(500).json({ erreur: error.message });
  }
};

// POST créer un commentaire
export const createCommentaire = async (req, res) => {
  try {
    const { contenu, date_comment, note, id_client, id_chantier } = req.body;

    const newCommentaire = await Commentaire.create({
      contenu,
      date_comment,
      note,
      id_chantier,
      id_client,
    });

    res.status(201).json(newCommentaire);
  } catch (error) {
    res.status(500).json({ erreur: error.message });
  }
};

// DELETE supprimer un commentaire
export const deleteCommentaire = async (req, res) => {
  try {
    const commentaire = await Commentaire.findByPk(req.params.id);

    if (!commentaire) {
      return res.status(404).json({ msg: "Pas de commentaire avec cet ID" });
    }

    await commentaire.destroy();
    res.status(200).json({ msg: "Commentaire supprimé" });
  } catch (error) {
    res.status(500).json({ erreur: error.message });
  }
};

// PUT modifier un commentaire
export const updateCommentaire = async (req, res) => {
  try {
    const commentaire = await Commentaire.findByPk(req.params.id);

    if (!commentaire) {
      return res.status(404).json({ msg: "Pas de commentaire avec cet ID" });
    }

    const { contenu, date_comment, id_chantier } = req.body;

    await commentaire.update({ contenu, date_comment, id_chantier });

    res.status(200).json(commentaire);
  } catch (error) {
    res.status(500).json({ erreur: error.message });
  }
};