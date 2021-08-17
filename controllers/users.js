import _ from 'lodash';
import bcrypt from 'bcrypt';
import User from '../models/User.js';


export const createUser = async (req, res) => {
    const existingUser = await User.find({email: req.body.email});
    if(existingUser) return res.status(400).json({message: "Email alrealdy taken."});

    const passwordsMatch = req.body.password === req.body.confirmPassword;
    if(!passwordsMatch) return res.status(400).json({message: "Passwords donnot match."});

    const user = new User(_.pick(req.body, 
        ["avatarUri", "dateOfBirth", "email", "firstname", "lastname"]));

    
    const salt = await bcrypt.genSalt(12);
    const hashedPassword = await bcrypt.hash(req.body.password, salt);
    user.password = hashedPassword;

    await user.save();

    res.json(user);
}



export const updateUser = async (req, res) => {
    const user = await User.findByIdAndUpdate(req.params.id, {
        $set: _.pick(req.body,
            ["avatarUri", "dateOfBirth", "email", "firstname", "lastname"])
    }, {new: true});

    if(!user) return res.status(404).json({message: "User not found."});

    res.json(user);
}