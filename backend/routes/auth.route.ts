import express from 'express';
import { login, signup, logout, getMe} from '../controllers/auth.controller.js'
import protectRoute from '../src/middleware/protectRoute.js';

const router = express.Router();


router.get("/me", protectRoute, getMe);
router.post('/login', login);
router.post('/logout', logout);
router.post('/signup', signup);

export default router;