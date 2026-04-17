import jwt from "jsonwebtoken";


const verifyToken = (req,res,next) =>{
    try{
    const authHeader = req.headers.authorization;
    

    if(!authHeader || !authHeader.startsWith("Bearer "))
        return res.status(401).json({erreur:"Token manquant"});

        //extraire le token(sans le mot bearer)
        const token =authHeader.split(" ")[1];

        //verifier le token
        const decoded = jwt.verify(token,process.env.JWT_SECRET);


        //ajouter l'utilisateur décodé a la requête
         req.user = decoded;
      
        next();

    }catch(err){
        return res.status(500).json({error:"Token non valide"});
    }
};
export default verifyToken;