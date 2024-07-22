import express from 'express';
import { uploadProfilePic, getGallery, uploadPictures, deleteGallery, updateCaptionGallery, uploadGalleryPictures } from '../controllers/galleryController.mjs';
import { authenticateToken } from '../middlewares/authenticateToken.mjs';
import { upload } from '../middlewares/authenticateImage.mjs';

export const router = express.Router();

router.get('/upload', authenticateToken, getGallery)
router.post('/uploadProfile', authenticateToken, upload.single('profile'), uploadProfilePic)
router.post('/uploadPictures', authenticateToken, upload.array('pictures'), uploadPictures)
router.delete('/upload/:id', authenticateToken, deleteGallery);
router.patch('/upload/:id', authenticateToken, updateCaptionGallery);
router.put('/updateGalleryPictures/:id',upload.array('pictures'), uploadGalleryPictures)