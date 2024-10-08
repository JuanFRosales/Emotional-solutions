import { Router } from 'express';
import { uploadImage } from '../middlewares/middlewares'; 
import { uploadImage as uploadImageController } from '../controllers/imageController';

const router = Router();

router.post('/upload', uploadImage, uploadImageController);

export default router;
