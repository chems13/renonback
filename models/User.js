import sequelize from "../db.js";  
import { DataTypes } from "sequelize";

const User = sequelize.define("User",
     {
    id:{
        type:DataTypes.INTEGER,
        primaryKey:true,
        autoIncrement:true  
    },
    prenom:{
        type:DataTypes.STRING(40),
        allowNull:false
    },
   login:{
        type:DataTypes.STRING(30),
        allowNull:false,
        unique:true
    },
    mdp:{
        type:DataTypes.STRING(255),
        allowNull:false
    },
    role:{
        type:DataTypes.ENUM("ADMIN","USER"),
        defaultValue:"USER"
    },
},

{
    timestamps:false
}
);
export default User