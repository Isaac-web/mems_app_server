import _ from 'lodash';
import Post from "../models/Post.js";


export const createPost = async  (req, res) => {
    const post = new Post(
            _.pick(req.body, ["author", "message", "title", "imageUri", "title"]));

    await post.save();
    res.json(post);
}



export const getPosts = async (req, res) => {
    const posts = await Post.find().sort("-_id").populate("author", "-_id -password");
    
    res.json(posts);
}



export const updatePost = async (req, res) => {
    const post = await Post.findByIdAndUpdate(req.params.id, {
        $set: _.pick(req.body, ["author", "message", "title", "imageUri", "title"])
    }, {new: true})

    if(!post) return res.status(404).json({message: "Post not found."});
    
    res.json(post);
}



export const deletePost = async (req, res) => {
    const post = await Post.findByIdAndRemove(req.params.id);

    if(!post) return res.status(404).json({message: "Post not found."});

    res.json(post);
}

