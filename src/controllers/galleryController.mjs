import { galleryModel } from '../models/galleryModel.mjs';
import { getCurrentDateTime } from '../middlewares/getDate.mjs';

export const uploadPictures = (req, res) => {
    const caption = req.body;

    if (!req.files || req.files.length === 0) {
        return res.send({ success: false, message: "No file" });
    }

    const images = req.files.map(file => file.path.replace('src\\uploads\\', ''));
    const data = [
        JSON.stringify(images),
        caption,
        getCurrentDateTime()
    ];

    galleryModel.addGallery(data, (error, result) => {
        if (error) {
            return res.json({ success: false, message: 'Failure to upload' });
        }
        res.json({ success: true, message: "Uploaded successfully!" });
    });
};



export const uploadProfilePic = (req, res) => {
    const profileFile = req.file;

    if (!profileFile) {
        return res.status(400).json({ error: 'No file uploaded' });
    }

    const data = [
        profileFile.filename,
        'try',
        getCurrentDateTime(),
        null
    ];
    galleryModel.addGallery(data, (err, result) => {
        if (err) {
            console.error('Error adding photo:', err);
            return res.status(500).json({ error: 'Error adding photo', details: err });
        }
        res.json({ message: 'File Uploaded Successfully', profile: profileFile });
    });
};

export const getGallery = (req, res) => {
    galleryModel.getGallery((err, result) => {
        if (err) {
            return res.status(500).json({ error: 'Error fetching gallery', details: err });
        }
        res.json(result);
    });
};

export const deleteGallery = (req, res) => {
    const { id } = req.params;
    galleryModel.deleteGallery(id, (err, result) => {
        if (err)
            return res.status(500).json({ error: "Error deleting photo", details: err })
        res.send(result);
    })
}
export const updateCaptionGallery = (req, res) => {
    const { id } = req.params;
    const { caption } = req.body;
    const data = [
        caption, getCurrentDateTime(), id
    ]
    galleryModel.updateGallery(data, (err, result) => {
        if (err)
            res.status(500).json({ error: "Update Error", details: err })
        res.send(result);
    })
}
// end
export const uploadGalleryPictures = (req, res) => {
    if (!req.files || req.files.length === 0) {
        return res.json({ success: false, message: "No file" });
    }

    const id = req.params.id;
    const images = req.files.map(file => file.path.replace('src\\uploads\\', ''));

    galleryModel.getPictures(id, (error, result) => {
        if (error) {
            return res.json({ success: false, message: error.message });
        }

        let existingImages = [];

        try {
            existingImages = JSON.parse(result[0].name);
        } catch (e) {
            return res.json({ success: false, message: 'Error parsing existing images or No Existing Image, Please add image first.' });
        }

        const updatedImages = existingImages.concat(images);
        const data = [
            JSON.stringify(updatedImages),
            id
        ];

        galleryModel.updateGalleryPictures(data, (error) => {
            if (error) {
                return res.json({ success: false, message: 'Failure to upload' });
            }
            res.json({ success: true, message: "Uploaded successfully!" });
        });
    });
};
