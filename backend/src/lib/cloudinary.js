import {v2 as cloudinary} from "cloudinary";
import {config} from "dotenv";

config()

cloudinary.config({
    cloud_name: process.env.Cloudinary_Cloud_NAME,
    api_key: process.env.Cloudinary_API_KEY,
    api_secret: process.env.Cloudinary_API_SECRET,
})

export default cloudinary;