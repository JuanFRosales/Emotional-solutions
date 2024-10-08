import { Request, Response } from 'express';
import { ImageModel } from '../models/imageModel';

export const uploadImage = async (req: Request, res: Response) => {
    try {
        if (!req.file) {
            return res.status(400).json({ message: 'No file uploaded.' });
        }

        const newImage = new ImageModel({
            image: {
                data: req.file.buffer,
                contentType: req.file.mimetype,
            },
        });

        await newImage.save();
        res.status(201).json({ message: 'Image uploaded successfully!' });
    } catch (error) {
        console.error('Error uploading image:', error);
        res.status(500).json({ message: 'Server error.' });
    }
};
