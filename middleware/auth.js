import jwt  from "jsonwebtoken";
import config from 'config';


export default (req, res, next) => {
    const token = req.headers.authorization?.split(" ")[1];
    if(!token) return res.status(401).json({message: "Access denied! No token provided."});

    let decoded;
    
    try {
        if(token.length < 500) {
            decoded = jwt.verify(token, config.get("jwtPrivateKey"));
            req.userId = decoded;
        }
        else {
            decoded = jwt.decode(token);
            req.userId = decoded;
        }
    }
    catch(err) {
        res.status(401).json({message: "Invalid token."});
    }

    next();
}