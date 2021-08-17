import mongoose from 'mongoose';
import Joi from 'joi';
import objectId from 'joi-objectid';


Joi.objectId = objectId(Joi);

const postSchema = new mongoose.Schema({
    author: {
        type: mongoose.Schema.Types.ObjectId, 
        ref: "User", 
        required: true,
    },
    message: {
        type: String, 
        min: 3,
        max: 100,
        required: true
    }, 
    imageUri: String, 
    likes: {
        type: [String],
        default: [],
    },
    title: {
        type: String, 
        min: 3,
        max: 100,
        required: true
    }

});


const Post = mongoose.model("Post", postSchema);


export const validatePost = (post) => {
    const schema = Joi.object({
        author: Joi.objectId().required(),
        message: Joi.string().min(3).max(100).required(),
        imageUri: Joi.string(),
        title: Joi.string().min(3).max(100).required(),
    });

    return schema.validate(post);
}

export default Post;