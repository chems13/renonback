import  Clients  from "../models/Clients.js";

// GET all
export const getClients = async (req, res) => {
  try {
    const clients = await Clients.findAll();
    res.status(200).json(clients);
  } catch (error) {
    res.status(500).json({ erreur: error.message });
  }
};

// POST
export const createClients = async (req, res) => {
  try {
    const { nom, prenom, telephone, email, mot_de_passe } = req.body;

    const newClient = await Clients.create({
      nom,
      prenom,
      telephone,
      email,
      mot_de_passe,
    });n

    res.status(201).json(newClient);
  } catch (error) {
    res.status(500).json({ erreur: error.message });
  }
};

// GET by ID
export const getClient = async (req, res) => {
  try {
    const client = await Clients.findByPk(req.params.id);

    if (!client)
      return res.status(404).json({ msg: "Pas de client avec cet ID" });

    res.status(200).json(client);
  } catch (error) {
    res.status(500).json({ erreur: error.message });
  }
};

// PUT
export const updateClient = async (req, res) => {
  try {
    const client = await Clients.findByPk(req.params.id);

    if (!client)
      return res.status(404).json({ msg: "Pas de client avec cet ID" });

    const { nom, prenom, telephone, email, mot_de_passe } = req.body;

    await client.update({
      nom,
      prenom,
      telephone,
      email,
      mot_de_passe,
    });

    res.status(200).json(client);
  } catch (error) {
    res.status(500).json({ erreur: error.message });
  }
};

// DELETE
export const deleteClient = async (req, res) => {
  try {
    const client = await Clients.findByPk(req.params.id);

    if (!client)
      return res.status(404).json({ msg: "Pas de client avec cet ID" });

    await client.destroy();

    res.status(200).json({ msg: `Client ${client.nom} supprimé` });
  } catch (error) {
    res.status(500).json({ erreur: error.message });
  }
};