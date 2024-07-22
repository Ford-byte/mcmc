import { connection } from '../config/database.mjs';

class OtpModel {
    getOtp(data, callback) {
        const query = "SELECT * from otp";
        // const query = "SELECT o.otp_id,o.otpnumber,o.user_id,u.firstname,u.lastname FROM `otp` AS o LEFT JOIN `users` AS u ON o.user_id = u.id WHERE o.user_id = u.id;";
        connection.query(query, data, (err, results) => {
            callback(err, results);
        });
    }
    // end
    addOtp(data, callback) {
        const query = "INSERT INTO otp() values(null,?,null)";
        connection.query(query, data, callback);
    }
    // end
}

const otpModel = new OtpModel();
export { otpModel }