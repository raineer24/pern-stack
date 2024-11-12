import express from 'express';
import { login, signup, logout} from '../controllers/auth.controller.js'

const router = express.Router();

router.get('/login', (req,res) => {
    res.send('Logged in sucessfully');
});
router.get('/logout', (req,res) => {
    res.send('Logged out sucessfully');
});
//router.post('/signup', signup);

export default router;