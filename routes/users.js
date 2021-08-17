import express from 'express';
import { createUser, updateUser } from '../controllers/users.js';
import {auth, validateAuth} from '../controllers/auth.js';

import validateInput from '../middleware/validateInput.js';
import validateId from '../middleware/validateId.js';
import { validateUser } from '../models/User.js';

const router = express.Router();

router.post("/auth", [validateInput(validateAuth)], auth);
router.post("/register", [validateInput(validateUser)], createUser);
router.patch("/update/:id", [validateId, validateInput(validateUser)], updateUser);


export default router;