import { MyPostModel } from "../models/myPostModel.mjs";

export async function myPost(req, res) {
    const { id } = req.params;

    MyPostModel.myPost(id, (error, result) => {
        if (error) {
            return res.status(500).json({ success: false, message: "Server Error!", error });
        }
        res.status(200).json({ success: true, details: result });
    });
}