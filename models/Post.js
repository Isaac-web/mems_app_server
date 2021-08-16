import mongoose from 'mongoose';
import Joi from 'joi';

const postSchema = new mongoose.Schema({
    author: String,
    message: {
        type: String, 
        minlength: 3,
        maxlength: 100,
        required: true
    }, 
    imageUri: String, 
    likes: {
        type: [String],
        default: [],
    },
    title: {
        type: String, 
        minlength: 3,
        maxlength: 100,
        required: true
    }

});


const Post = mongoose.model("Post", postSchema);


export const validatePost = (post) => {
    const schema = Joi.object({
        author: Joi.string().min(3).max(100).required(),
        message: Joi.string().min(3).max(100).required(),
        imageUri: Joi.string(),
        title: Joi.string().min(3).max(100).required(),
    });

    return schema.validate(post);
}

export default Post;