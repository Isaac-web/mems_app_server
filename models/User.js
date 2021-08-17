import Joi from 'joi';
import mongoose from 'mongoose';


const userSchema = new mongoose.Schema({
    avatarUri: {
        type: String,
    },
    dateOfBirth: {
        type: Date, 
        default: function(){return Date.now()}
    },
    email: {
        type: String, 
        maxlength: 100, 
        createIndexes: true,
        require: true
    }, 
    firstname: {
        type: String, 
        minlength: 3,
        maxlength: 100, 
        require: true
    },
    lastname: {
        type: String, 
        minlength: 3,
        maxlength: 100, 
        require: true
    },
    password: {
        type: String, 
        minlength: 7,
        maxlength: 1024,
        required: true
    }
});



export const validateUser = (user) => {
    const schema = Joi.object({
        avatarUri: Joi.string(),
        confirmPassword: Joi.string().min(3).max(100).required(),
        dateOfBirth: Joi.date().default(Date.now()),
        email: Joi.string().email().required(),
        firstname: Joi.string().min(3).max(100).required(),
        lastname: Joi.string().min(3).max(100).required(),
        password: Joi.string().min(3).max(100).required(),
    });

    return schema.validate(user);
}



const User = mongoose.model("User", userSchema);

export default User;