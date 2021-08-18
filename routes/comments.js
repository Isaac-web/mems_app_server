import express from 'express';


import {createComment, deleteComment, getPostComment} from '../controllers/comment.js'
import validateId from '../middleware/validateId.js';



const router = express.Router();


router.post("/", createComment);
router.get("/:id", [validateId], getPostComment);
router.delete("/:id", deleteComment);


export default router;