import { userModel } from '../models/userModel.mjs';
import bcrypt from 'bcryptjs';
import jwt from 'jsonwebtoken';
import dotenv from 'dotenv';

dotenv.config();

async function validateToken(req, res) {
    res.json({ valid: true, message: 'Token validated successfully.' });
}

async function loginUser(req, res) {
    const SECRET_KEY = process.env.SECRET_KEY;
    const EXPIRE_AT = process.env.EXPIRE_AT;
    const { username, password } = req.body;

    userModel.loginUser([username], async (error, result) => {
        if (error) throw error;

        if (result.length === 0) {
            return res.json({ success: false, message: 'User not found!' });
        }

        const user = result[0];
        const passwordMatch = await bcrypt.compare(password, user.password);

        if (!passwordMatch) {
            return res.json({ success: false, message: 'Invalid credentials!' });
        }
        
        const token = jwt.sign({ id: user.id }, SECRET_KEY, { expiresIn: EXPIRE_AT });
        res.json({ success: true, message: 'Login successfully!', token: token });
    })
}

// end
async function createUser(req, res) {
    const { fullname, username, password } = req.body;
    const hashPassword = await bcrypt.hash(password, 10);
    const data = [fullname, username, hashPassword];

    userModel.createUser(data, (error, result) => {
        if (error) {
            if (error.code === 'ER_DUP_ENTRY') {
                return res.json({ success: false, duplicate: true, message: 'Email already exists' });
            }
            console.error('Error inserting user:', error);
            return res.status(500).json({ success: false, message: 'Internal server error' });
        }
        res.json({ success: true, message: 'Inserted successful!' });
    });
}
// end
async function searchUser(req, res) {
    const id = req.params.id;
    userModel.searchUser([id], (error, result) => {
        if (error) {
            console.error('Error searching user:', error);
            return res.json({ success: false, message: 'Internal server error' });
        }

        if (result.length === 0) {
            return res.json({ success: false, message: 'User not found' });
        }

        res.json({ success: true, user: result[0] });
    });
}
// end
async function getUser(req, res) {
    userModel.getUser((error, result) => {
        if (error)
            console.log('Error fetching data', error);
        res.json({ success: true, result })
    })
}
// end

export { validateToken, loginUser, createUser, searchUser, getUser };