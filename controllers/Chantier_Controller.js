import Chantier from "../models/Chantier.js";

// GET all
export const getChantiers = async (req, res) => {
  try {
    const chantiers = await Chantier.findAll();
    res.status(200).json(chantiers);
  } catch (error) {
    res.status(500).json({ erreur: error.message });
  }
};

// POST
export const createChantier = async (req, res) => {
  try {
    const { titre, description, date_debut, date_fin,statut, id_client } = req.body;
    console.log(req.body);

    const chantier = await Chantier.create({
      titre,
      description,
      date_debut,
      date_fin,
      statut,
      id_client,
    });

    res.status(201).json(chantier);
  } catch (error) {
    res.status(500).json({ erreur: error.message });
  }
};

// GET by ID
export const getChantier = async (req, res) => {
  try {
    const chantier = await Chantier.findByPk(req.params.id);

    if (!chantier)
      return res.status(404).json({ msg: "Pas de chantier avec cet ID" });

    res.status(200).json(chantier);
  } catch (error) {
    res.status(500).json({ erreur: error.message });
  }
};

// PUT
export const updateChantier = async (req, res) => {
  try {
    const chantier = await Chantier.findByPk(req.params.id);

    if (!chantier)
      return res.status(404).json({ msg: "Pas de chantier avec cet ID" });

    const { titre, description, date_debut, date_fin } = req.body;

    await chantier.update({ titre, description, date_debut, date_fin, statut, id_client });

    res.status(200).json(chantier);
  } catch (error) {
    res.status(500).json({ erreur: error.message });
  }
};

// DELETE
export const deleteChantier = async (req, res) => {
  try {
    const chantier = await Chantier.findByPk(req.params.id);

    if (!chantier)
      return res.status(404).json({ msg: "Pas de chantier avec cet ID" });

    await chantier.destroy();

    res.status(200).json({ msg: `Chantier ${chantier.titre} supprimé` });
  } catch (error) {
    res.status(500).json({ erreur: error.message });
  }
};