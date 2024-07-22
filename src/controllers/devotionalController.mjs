import { getCurrentDateTime } from "../middlewares/getDate.mjs";
import { sanitizeData } from "../middlewares/sanitizationData.mjs";
import { devotionalModel } from "../models/devotionalModel.mjs";
export const getAll = (req, res) => {
    devotionalModel.getAll((error, result) => {
        if (error) {
            res.send({ message: error });
        } else {
            const santizedResult = sanitizeData(result);
            res.send({ santizedResult })
        }
    });
}


// end
export const addDevotionalQoute = (req, res) => {
    const id = req.params.id;
    const { name, devotionalCaption, devotionalVerse } = req.body;
    const data = [
        id,
        name,
        devotionalCaption,
        devotionalVerse,
        getCurrentDateTime()
    ]
    devotionalModel.addDevotionalQoute(data, (error, result) => {
        if (error) res.send({ message: error })
        res.send({ success: true, details: result })
    })
}
// end
export const updateDevotionalCaption = (req, res) => {
    const { devotionalCaption } = req.body;
    const id = req.params.id;
    const data = [
        devotionalCaption,
        id
    ]
    devotionalModel.updateDevotionalCaption(data, (error, result) => {
        if (error) res.send({ message: error })
        res.send({ success: true, details: result })
    })
}
// end
export const updateDevotionalVerse = (req, res) => {
    const { devotionalVerse } = req.body;
    const { id } = req.params;
    const data = [
        devotionalVerse,
        id
    ]
    devotionalModel.updateDevotionalVerse(data, (error, result) => {
        if (error) res.send({ message: error })
        res.send({ success: true, details: result })
    })
}

export const deleteDailyDevotional = (req, res) => {
    const { id } = req.params;
    devotionalModel.deleteDailyDevotional(id, (error, result) => {
        if (error) res.send({ message: error })
        res.send({ success: true, details: result })
    })
}