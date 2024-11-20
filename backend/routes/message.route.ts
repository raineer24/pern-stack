import express from 'express';
import protectRoute from '../src/middleware/protectRoute.js';
import { getMessages, sendMessage }  from '../controllers/message.controller.js'
const router = express.Router();

router.post('/send/:id', protectRoute, sendMessage);
router.get('/:id', protectRoute, getMessages);

export default router;