import { v2 as cloudinary } from "cloudinary";
import fs from "fs";
import "dotenv/config";

cloudinary.config({
  cloud_name: process.env.CLOUDNARY_API_NAME,
  api_key: process.env.CLOUDNARY_API_KEY,
  api_secret: process.env.CLOUDNARY_API_SCERET,
});
const uploadOnCloudinary = async (localFilePath) => {
  console.log(localFilePath, "localfilePath");
  if (!localFilePath) {
    console.log("local file not found");
    return null;
  }
  console.log("yaha tk aya");
  try {
    const uploadResult = await cloudinary.uploader.upload(localFilePath, {
      resource_type: "auto",
    });
    console.log("File uploaded successfully", uploadResult.url);
    fs.unlinkSync(localFilePath);
    return uploadResult;
  } catch (error) {
    fs.unlinkSync(localFilePath);
    console.log("error in cloudnary upload", error);
    return null;
  }
};

export { uploadOnCloudinary };
