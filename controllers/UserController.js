import User from "../models/User.js";
import  bcrypt  from "bcrypt";

export const inscription = async ( req, res) => {
    try {
       const {prenom,login,mdp,role} = req.body;
       const exist = await User.findOne({where:{login}});

       if(exist){
           return res
           .status(409)
           .json({msg:"Cet utilisateur existe deja"});
       }
    //hashé le mot de passe
       const hash = await bcrypt.hash(mdp,10);
      
       const user = await User.create({prenom,login,mdp:hash,role});

    //    const userObj = user.toJSON();
    //    delete userObj.mdp;

       // renvoie le user sans le mdp au front
       const{ mdp: _, ...userSansmdp} = user.toJSON();

       res.status(200).json(userSansmdp);

    } catch (error) {
        res.status(500).json({erreur:error.message});
    }
};