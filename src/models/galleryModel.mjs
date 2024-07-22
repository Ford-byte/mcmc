import { connection } from '../config/database.mjs';

class GalleryModel {
    getGallery(callback) {
        const query = "SELECT * FROM sampleimage where is_deleted = 0 ORDER BY sampleimage.id DESC";
        connection.query(query, callback);
    }
    getPictures(data,callback){
        const query = "SELECT * FROM sampleimage where is_deleted = 0 && userID = ? ORDER BY sampleimage.id DESC";
        connection.query(query,data,callback);
    }
    addGallery(data, callback) {
        const query = "INSERT INTO sampleimage (userID,name,caption,is_posted,is_updated) VALUES (?,?,?,?,null)";
        connection.query(query, data, callback);
    }
    deleteGallery(data, callback) {
        const query = "UPDATE sampleimage SET is_deleted = 0 where id = ?";
        connection.query(query, data, callback);
    }
    updateGallery(data, callback) {
        const query = "UPDATE sampleimage SET caption = ?, is_updated = ? where id = ? ";
        connection.query(query, data, callback);
    }
    updateGalleryPictures(data, callback) {
        const query = "UPDATE sampleimage SET name = ?  where userID = ?";
        connection.query(query, data, callback)
    }
}

const galleryModel = new GalleryModel();

export { galleryModel };