import bcrypt from 'bcryptjs';
import { userModel } from '../models/userModel.mjs';

async function checkUserExists(role) {
    return new Promise((resolve, reject) => {
        userModel.getUser({ role }, (err, data) => {
            if (err || !data || data.length === 0) {
                resolve(false);
            } else {
                resolve(true);
            }
        });
    });
}

const adminDefault = async () => {
    try {
        const role = "admin";
        const password = "admin";

        const userExists = await checkUserExists(role);

        if (userExists) {
            console.log({ error: 'User already has an account' });
            return;
        }

        const saltRounds = 10;
        const hashedPassword = await bcrypt.hash(password, saltRounds);

        const newUser = [
            "admin",
            "admin",
            hashedPassword
        ];

        userModel.createUser(newUser, (err, data) => {
            if (err) {
                console.log({ error: 'Failed to add data' + err });
                return;
            }
            console.log({ message: "Adding admin successful!" });
        });
    } catch (error) {
        console.log({ error: 'An unexpected error occurred' + error });
    }
};

export { adminDefault };
