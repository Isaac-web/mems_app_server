import _ from 'lodash';

import Comment from '../models/Comment.js';



export const createComment = async (req, res) => {
    const comment = new Comment(_.pick(req.body, ["postId", "message"]));
    comment.user = req.body.userId;

    await comment.save()
    res.json(comment);
}



export const getPostComment = async (req, res) => {
    const comments = await Comment
        .find({postId: req.params.id})
        .sort("-_Id")
        .populate("user", "firstname lastname email avatarUri");
    
    res.json(comments);
}



export const deleteComment = async () => {
    const comment = await Comment.findByIdAndRemove(req.params.id);

    res.json(comment);
}