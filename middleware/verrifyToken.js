import jwt from "jsonwebtoken";


const verifyToken = (req,res,next) =>{
    try{
    const authHeader = req.headers.authorization;
    console.log(authHeader);

    if(!authHeader || !authHeader.startsWith("Bearer "))
        return res.status(401).json({erreur:"Token manquant"});

        //extraire le token(sans le mot bearer)
        const token =authHeader.split(" ")[1];

         const decode = jwt.verify(token,process.env.TOKEN);
         
         req.user = decode;
      
    

    next();
    }catch(err){
        res.status(500).json({error:err.message});
    }
};
export default verifyToken;