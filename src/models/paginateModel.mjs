import { connection } from '../config/database.mjs';

class PaginateModel {
    paginateUser(data, callback) {
        const query = "SELECT * FROM users WHERE is_deleted = 0 ORDER BY users.id DESC LIMIT ? OFFSET ?";
        connection.query(query, data, callback);
    }
    paginateGallery(data, callback) {
        const query = "SELECT * FROM sampleimage WHERE is_deleted = 0 ORDER BY sampleimage.id DESC LIMIT ? OFFSET ? ";
        connection.query(query, data, callback)
    }
}

const paginateModel = new PaginateModel();
export { paginateModel };