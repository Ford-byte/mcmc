import { paginateModel } from "../models/paginateModel.mjs";

export async function paginateUser(req, res) {
    let limit = req.query.limit || 3;
    const { offset = 0 } = req.query;

    if (limit > 5) limit = 5;

    const data = [parseInt(limit), parseInt(offset)];

    paginateModel.paginateUser(data, (error, result) => {
        if (error) {
            return res.status(500).json({ success: false, message: "Server Error!", error });
        }
        res.status(200).json({ success: true, details: result });
    });
}
// end
export async function paginateGallery(req, res) {
    let limit = req.query.limit || 10;
    const { offset = 0 } = req.query;

    if (limit > 20) limit = 20;

    const data = [parseInt(limit), parseInt(offset)];

    paginateModel.paginateGallery(data, (error, result) => {
        if (error)
            return res.status(500).json({ success: false, message: "Server Error!", error });
        res.status(200).json({ success: true, details: result })
    })
}