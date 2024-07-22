import { connection } from '../config/database.mjs';

class myPostModel {
    myPost(data, callback) {
          const query = "SELECT u.id,u.fullname,u.role,u.status,s.name,s.caption FROM users u JOIN sampleimage s ON u.id = s.userID WHERE u.id = ? ORDER BY u.id DESC";
      connection.query(query, data, callback);
    }
}

const MyPostModel = new myPostModel();
export { MyPostModel };