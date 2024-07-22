import express from 'express';
import { validateUserLogin, validateUserRegistration } from '../middlewares/userValidation.mjs';
import { validateToken, loginUser, createUser, searchUser } from '../controllers/userController.mjs';
import { authenticateToken } from '../middlewares/authenticateToken.mjs';

const router = express.Router();

//api protected gaurd
router.get("/api/validateToken", authenticateToken, validateToken);
router.post("/user/login", validateUserLogin, loginUser);
router.post("/user", validateUserRegistration, createUser);
router.get("/user/:id", authenticateToken, searchUser);


export { router };