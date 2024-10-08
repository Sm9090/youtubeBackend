import { v2 as cloudinary } from 'cloudinary';
import fs from "fs"

import { v2 as cloudinary } from 'cloudinary';

cloudinary.config({ 
    cloud_name: process.env.CLOUDNARY_CLOUD_NAME, 
    api_key: process.env.CLOUDNARY_API_KEY, 
    api_secret: process.env.CLOUDNARY_API_SCERET
});

const uploadOnCloudinary = async (localFilePath) =>{
    if(!localFilePath) (console.log("local file not found"))

    try {
        const uploadResult = await cloudinary.uploader
           .upload(
               localFilePath, {
                   resource_type: 'auto'
               }
           )
           console.log("File uploaded successfully" , uploadResult.url)
           return uploadResult
    } catch (error) {
        fs.unlinkSync(localFilePath)
        return null
    }
}


export {uploadOnCloudinary}