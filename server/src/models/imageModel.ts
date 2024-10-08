import mongoose, { Document, Schema } from 'mongoose';

export interface IImage extends Document {
    image: {
        data: Buffer;
        contentType: string;
    };
}

const ImageSchema: Schema = new Schema({
    image: {
        data: { type: Buffer, required: true },
        contentType: { type: String, required: true },
    },
});

// Use a different name for the model
export const ImageModel = mongoose.model<IImage>('Image', ImageSchema);
