import { addEvent, deleteEvent, getEvent, updateEventCaption, updateEventPicture } from "../controllers/eventsController.mjs";
import e from "express";
import { upload } from '../middlewares/authenticateImage.mjs'
import { authenticateToken } from '../middlewares/authenticateToken.mjs';

export const router = e.Router();

router.get('/events', getEvent);
router.post('/events',authenticateToken, upload.single('eventPicture'), addEvent);
router.put('/events/caption/:id',authenticateToken, updateEventCaption);
router.put('/events/picture/:id',authenticateToken, upload.single('eventPicture'), updateEventPicture);
router.delete('/events/:id',authenticateToken, deleteEvent)