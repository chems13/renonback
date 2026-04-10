import Devis from "../models/Devis.js";

//get all
export const getDevis = async (req,res) => {
    try{
        const devis =await Devis.findAll();
        res.status(200).json(devis);
    }catch(error){
        res.status(500).json({erreur:error.message});
    }
};

//post
export const createDevis = async (req,res) => {
    try {
        const {montant,description,statut,date_creation,id_chantier} = req.body;
        const newDevis = await Devis.create({
            montant,
            description,
            statut,
            date_creation,
            id_chantier,
        });
        res.status(201).json(newDevis);
    } catch (error) {
        res.status(500).json({ erreur: error.message });
    }
};

//get by id
export const getDevisById = async (req,res) => {
    try{
        const devis =await Devis.findByPk(req.params.id);
if(!devis)
    return res.status(404).json({msg:"Pas de devis avec cet ID"});


        res.status(200).json(devis);
    }catch(error){
        res.status(500).json({erreur:error.message});
    }
};

//put 
export const updateDevis = async (req,res)=>{
    try {
        const devis = await Devis.findByPk(req.params.id);
    
        if (!devis)
          return res.status(404).json({ msg: "Pas de devis avec cet ID" });
    
        const { montant, description, statut, date_creation } = req.body;
    
        await devis.update({ montant, description, statut, date_creation });
    
        res.status(200).json(devis);
    }catch (error) {
        res.status(500).json({ erreur: error.message });
    }
};

//Delete
export const deleteDevis = async (req,res) => {
    try {
        const devis = await Devis.findByPk(req.params.id);
    
        if (!devis)
          return res.status(404).json({ msg: "Pas de devis avec cet ID" });
    
        await devis.destroy();
    
        res.status(200).json({ msg: `Devis ${devis.titre} supprimé` });
    } catch (error) {
        res.status(500).json({ erreur: error.message });
    }
};