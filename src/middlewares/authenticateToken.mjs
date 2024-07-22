import jwt from 'jsonwebtoken';
import dotenv from 'dotenv';

dotenv.config();

const SECRET_KEY = process.env.SECRET_KEY;
const TOKEN_EXPIRATION = process.env.EXPIRE_AT;  
const REFRESH_THRESHOLD = 30; 

const authenticateToken = (req, res, next) => {
    const authHeader = req.headers['authorization'];
    const token = authHeader && authHeader.split(' ')[1];
    
    if (!token) {
        return res.status(401).json({ message: 'Token not found' });
    }

    jwt.verify(token, SECRET_KEY, (err, user) => {
        if (err) {
            console.error('JWT Verification Error:', err.message);
            if (err.name === 'TokenExpiredError') {
                return res.status(403).json({ message: 'Token expired' });
            } else {
                return res.status(403).json({ message: 'Failed to authenticate token' });
            }
        }

        const currentTime = Math.floor(Date.now() / 1000);
        const timeLeft = user.exp - currentTime;

        if (timeLeft < REFRESH_THRESHOLD) {
            const refreshedToken = jwt.sign({ id: user.id }, SECRET_KEY, { expiresIn: TOKEN_EXPIRATION });
            res.setHeader('Authorization', `Bearer ${refreshedToken}`);
            return res.json({ message: 'Token refreshed', token: refreshedToken });
        }

        req.user = user;
        next();
    });
};

export { authenticateToken };
