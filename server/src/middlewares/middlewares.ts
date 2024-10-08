import multer from 'multer';

// Configure storage
const storage = multer.memoryStorage();

// Create the upload middleware
const upload = multer({
    storage: storage,
    limits: {
        fileSize: 5 * 1024 * 1024, // Limit files to 5MB
    },
    fileFilter: (req, file, cb) => {
        const fileTypes = /jpeg|jpg|png|gif/;
        const extname = fileTypes.test(file.mimetype);
        const mimetype = fileTypes.test(file.originalname.toLowerCase());

        if (extname && mimetype) {
            return cb(null, true);
        }
        cb(new Error('Invalid file type, only JPEG, PNG, and GIF files are allowed!'));
    },
});

// Export the upload middleware
export const uploadImage = upload.single('image'); // Ensure this matches the field name
