import { connection } from '../config/database.mjs';

class UserModel {

    loginUser(username, callback) {
        const query = "SELECT * FROM users WHERE username =? AND status ='active' AND is_deleted = '0'";
        connection.query(query, username, callback);
    }
    // end
    createUser(data, callback) {
        const query = "INSERT INTO users (fullname, username, password) VALUES(?, ?, ?)";
        connection.query(query, data, callback);
    }
    // end
    searchUser(data, callback) {
        const query = "SELECT * FROM users WHERE id =? AND status ='active' AND is_deleted = '0'";
        connection.query(query, data, callback);
    }
    // end
    getUser(data, callback) {
        const query = "SELECT * FROM users WHERE status = 'active' AND role ='admin' ORDER BY users.id DESC";
        connection.query(query, data, callback);
    }
}

const userModel = new UserModel();
export { userModel };