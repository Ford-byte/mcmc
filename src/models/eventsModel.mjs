import { connection } from "../config/database.mjs";

class EventsModel {
    getEvent(callback) {
        const query = "SELECT * FROM events WHERE is_deleted = 0";
        connection.query(query, callback);
    }
    addEvent(data, callback) {
        const query = "INSERT INTO events(userId, eventPicture, eventCaption, is_posted,is_deleted) VALUES (?,?,?,?,1)"
        connection.query(query, data, callback)
    }
    updateEventCaption(data, callback) {
        const query = "UPDATE events SET eventCaption = ? WHERE id = ?";
        connection.query(query, data, callback);
    }
    updateEventPicture(data, callback) {
        const query = "UPDATE events SET eventPicture = ? WHERE id = ?";
        connection.query(query, data, callback);
    }
    deleteEvent(data, callback) {
        const query = "UPDATE events SET is_deleted = 1 WHERE id=?";
        connection.query(query, data, callback)
    }
}

export const eventsModel = new EventsModel();