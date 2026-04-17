import User from "../models/User.js";
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";

// ---------------------- INSCRIPTION ----------------------
export const inscription = async (req, res) => {
  try {
    const { prenom, login, mdp, role } = req.body;

    const exist = await User.findOne({ where: { login } });

    if (exist) {
      return res.status(409).json({ msg: "Cet utilisateur existe déjà" });
    }

    // Hash du mot de passe
    const hash = await bcrypt.hash(mdp, 10);

    const user = await User.create({
      prenom,
      login,
      mdp: hash,
      role,
    });

    // On retire le mdp avant d'envoyer au front
    const { mdp: _, ...userSansMdp } = user.toJSON();

    res.status(200).json(userSansMdp);

  } catch (error) {
    res.status(500).json({ erreur: error.message });
  }
};


// ---------------------- LOGIN ----------------------
export const login = async (req, res) => {
  try {
    const { login, mdp } = req.body;
    
    
    // Vérifier si l'utilisateur existe
    const user = await User.findOne({ where: { login } });
    
    if (!user) {
      return res.status(401).json({ message: "Login ou mot de passe incorrect !" });
    }
    
    // Vérifier le mot de passe
    const mdpValide = await bcrypt.compare(mdp, user.mdp);
    
    if (!mdpValide) {
      return res.status(401).json({ message: "Login ou mot de passe incorrect !" });
    }
    
    
    
    // Si OK → renvoyer l'utilisateur sans mdp
    const { mdp: _, ...userSansMdp } = user.toJSON();


    //generé un token
    const token = jwt.sign(
        { id: user.id, login: user.login, role: user.role }, 
            process.env.TOKEN,
     { 
      expiresIn: "1h"
    }
    );
    res.status(200).json({
      message: "Connexion réussie",
      token,
      user: userSansMdp,
      
    })

  } catch (err) {
    res.status(500).json({ erreur: err.message });
  }
};

//get all users (ADMIN)
export const getAllUsers = async (req, res) => {
  try {
    const users = await User.findAll({
      attributes: { exclude: ["mdp"] }
    });

    res.status(200).json(users);

  } catch (err) {
    res.status(500).json({ erreur: err.message });
  }
};

