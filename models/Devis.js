import { DataTypes } from "sequelize";
import sequelize from "../db.js";




const Devis = sequelize.define("Devis", {
    id_devis: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true,
    },

    montant:{
        type: DataTypes.STRING(30),
        allowNull: false,
    },

    description:{
     type:DataTypes.STRING(255),
     allowNull:false,
    },

    statut:{
        type:DataTypes.STRING(30),
        allowNull:false,
    },
    date_creation: {
        type: DataTypes.DATE,
        allowNull: false,
    },
    id_chantier:{
    type: DataTypes.INTEGER,
   allowNull: false,
   references: {
     model: 'Chantiers',
     key: 'id_chantier',
   },
   },

});



export default Devis