import bcrypt from 'bcrypt';
import config from 'config';
import jwt from 'jsonwebtoken';
import Joi from 'joi';


import User from '../models/User.js';

export const auth = async (req, res) => {
    const user = await User.findOne({email: req.body.email});
    if(!user) return res.status(400).json({message: "Invalid username or password."});
    
    const validPassword = await bcrypt.compare(req.body.password, user.password);
    if(!validPassword) return res.status(400).json({message: "Invalid username or password"});

    const token = jwt.sign({_id: user._id, isAdmin: user.isAdmin, isRoot: user.isRoot}, config.get("jwtPrivateKey"));
    
    res.json({user, token});
}



export const validateAuth = (req) => {
    const schema = Joi.object({
        email: Joi.string().email().required(),
        password: Joi.string().required(),
    });

    return schema.validate(req);
}