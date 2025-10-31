import { v2 as cloudinary } from 'cloudinary';

cloudinary.config({
  cloud_name: process.env.CLOUDINARY_CLOUD_NAME || 'dytw0yx6j',
  api_key: process.env.CLOUDINARY_API_KEY || '597652322327412',
  api_secret:
    process.env.CLOUDINARY_API_SECRET || '9jXEyjkMQubMvLK-Xzln7hOLYx0',
});

export default cloudinary;
