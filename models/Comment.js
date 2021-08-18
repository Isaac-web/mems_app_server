import mongoose from 'mongoose';


const commentSchema = new mongoose.Schema({
    user: {
        type: mongoose.Schema.Types.ObjectId, 
        ref: "User",
        required: true
    }, 
    postId: {
        type: mongoose.Types.ObjectId,
        required: true
    },
    message: {
        type: String, 
        minlength: 3, 
        maxlength: 300, 
        required: true,
    }, 
    dateCommented: {
        type: Date,
        default: function(){return Date.now()}
    }
});

const Comment = mongoose.model("Comment", commentSchema);


export default Comment;