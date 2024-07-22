import { connection } from "../config/database.mjs";

class DevotionalModel {
    getAll(callback) {
        const query = "SELECT * FROM dailyDevotional WHERE is_deleted = 0";
        connection.query(query, callback);
    }
    addDevotionalQoute(data, callback) {
        const query = "INSERT INTO dailyDevotional(userId,name,devotionapCaption,devotionalVerse,is_posted) values(?,?,?,?,?);"
        connection.query(query, data, callback); s
    }
    updateDevotionalCaption(data, callback) {
        const query = "UPDATE dailyDevotional SET devotionalCaption = ? where id = ?";
        connection.query(query, data, callback);
    }
    updateDevotionalVerse(data, callback) {
        const query = "UPDATE dailyDevotional SET devotionalVerse = ? where id = ?";
        connection.query(query, data, callback);
    }
    deleteDailyDevotional(data, callback) {
        const query = "UPDATE dailyDevotional SET is_deleted = 1 where id = ?";
        connection.query(query, data, callback);
    }
}

export const devotionalModel = new DevotionalModel();