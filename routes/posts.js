import express from 'express';
import {createPost, deletePost, getPosts, updatePost} from '../controllers/post.js';

import validateId from '../middleware/validateId.js';
import validateInput from '../middleware/validateInput.js';
import { validatePost } from '../models/Post.js';

const router = express.Router();


router.post("/", [validateInput(validatePost)], createPost);
router.get("/", getPosts);
router.patch("/:id", [validateId, validateInput(validatePost)], updatePost);
router.delete("/:id", [validateId], deletePost);


export default router;