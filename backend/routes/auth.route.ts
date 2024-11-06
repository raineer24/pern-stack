import express from 'express';

const router = express.Router();

router.get('/login', (req,res) => {
    res.send('Logged in sucessfully');
});
router.get('/logout', (req,res) => {
    res.send('Logged out sucessfully');
});
router.get('/signup', (req,res) => {
    res.send('Signed up sucessfully');
});

export default router;