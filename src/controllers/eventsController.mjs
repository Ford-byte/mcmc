import { eventsModel } from "../models/eventsModel.mjs";
import { getCurrentDateTime } from "../middlewares/getDate.mjs";

export const getEvent = (req, res) => {
    eventsModel.getEvent((error, result) => {
        if (error) res.send({ message: error })
        res.send({ success: true, details: result })
    })
}
// end
export const addEvent = (req, res) => {
    const { eventCaption } = req.body;
    const { id } = req.params
    const eventPicture = req.file.filename;
    const data = [
        id,
        eventPicture,
        eventCaption,
        getCurrentDateTime(),
    ];
    try {
        eventsModel.addEvent(data, (error, result) => {
            if (error) res.send({ message: error })
            res.send({ success: true, details: result })
        })
    } catch (error) {
        if (error) {
            res.send({ message: error })
        }
    }
}
// end
export const updateEventCaption = (req, res) => {
    const eventCaption = req.body.eventCaption;
    const id = req.params.id
    const data = [eventCaption, id];
    eventsModel.updateEventCaption(data, (error, result) => {
        if (error) res.send({ message: error })
        res.send({ success: true, details: result })
    })
}
// end
export const updateEventPicture = (req, res) => {
    const eventPicture = req.file.filename;
    const id = req.params.id;
    const data = [eventPicture, id]
    eventsModel.updateEventPicture(data, (error, result) => {
        if (error) res.send({ message: error })
        res.send({ success: true, details: result })
    })
}
// end
export const deleteEvent = (req, res) => {
    const id = req.params.id;
    eventsModel.deleteEvent(id, (error, result) => {
        if (error) res.send({ message: error })
        res.send({ success: true, details: result })
    })
}