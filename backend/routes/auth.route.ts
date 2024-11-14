import express from 'express';
import { login, signup, logout, getMe} from '../controllers/auth.controller.js'

const router = express.Router();


router.get('/me', getMe)
router.post('/login', login);
router.get('/logout', (req,res) => {
    res.send('Logged out sucessfully');
});
router.post('/signup', signup);

export default router;