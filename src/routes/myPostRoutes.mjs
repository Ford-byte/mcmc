import express from 'express';
import { myPost } from '../controllers/myPostController.mjs';
import { authenticateToken } from '../middlewares/authenticateToken.mjs';
const router = express.Router();

//api protected gaurd
router.get('/myPost/:id',authenticateToken, myPost);

export { router };