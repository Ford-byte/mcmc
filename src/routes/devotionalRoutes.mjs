import e from "express";
import { addDevotionalQoute, deleteDailyDevotional, getAll, updateDevotionalCaption, updateDevotionalVerse } from "../controllers/devotionalController.mjs";

export const router = e.Router();

router.get('/devotional', getAll)
router.post('/devotional/:id', addDevotionalQoute);
router.patch('/devotionalCaption/:id', updateDevotionalCaption);
router.patch('/devotionalVerse/:id', updateDevotionalVerse);
router.delete('/devotional/:id',deleteDailyDevotional);