import express from 'express';
import protectRoute from '../src/middleware/protectRoute.js';
import {sendMessage}  from '../controllers/message.controller.js'
const router = express.Router();

router.post('send/:id', protectRoute, sendMessage);

export default router;