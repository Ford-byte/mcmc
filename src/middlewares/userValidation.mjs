import { body, validationResult } from 'express-validator';

const validateUserLogin = [

    body('username')
        .notEmpty().withMessage({type: '0', msgRequired: 'Username is required'})
        .isEmail().withMessage({type: '1', msgRequired:'Invalid email format'})
        .normalizeEmail(),

    body('password')
        .notEmpty().withMessage({type: '2', msgRequired:'Password is required'})
        .trim(),

    (req, res, next) => {
        const errors = validationResult(req);
        if (!errors.isEmpty()) {
            return res.json({ success: false, message: 'Validation failed', errors: errors.array() });
        }
        next();
    }
];
// end
const validateUserRegistration = [
    body('fullname').notEmpty().withMessage({ type: '0', msgRequired: 'Fullname is required' })
        .matches(/^[a-zA-Z\s]+$/).withMessage({ type: '0', msgRequired: 'Fullname must contain only letters and spaces' }),
    body('username').isEmail().withMessage({ type: '1', msgRequired: 'Email is not valid' }),
    body('password').isLength({ min: 6 }).withMessage({ type: '2', msgRequired: 'Password must be at least 6 characters long' }),
    (req, res, next) => {
        const errors = validationResult(req);
        if (!errors.isEmpty()) {//kung naay sulod e run niya code nga naay error
            return res.json({ success: false, message: 'Validation failed', errors: errors.array() });
        }
        next();
    }
];
// end
export { validateUserLogin, validateUserRegistration };
