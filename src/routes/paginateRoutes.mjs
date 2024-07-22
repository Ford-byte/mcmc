import express from 'express';
import { authenticateToken } from '../middlewares/authenticateToken.mjs';
import { paginateGallery, paginateUser } from '../controllers/paginateController.mjs';
const router = express.Router();

//api protected gaurd
router.get("/paginateUser", authenticateToken, paginateUser);
router.get("/paginateGallery", authenticateToken, paginateGallery)

export { router };