import mongoose from "mongoose";

const companySchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: true,
      unique: true,
      lowercase: true,
    },
    email: {
      type: String,
      required: true,
      unique: true,
      lowercase: true,
    },
    password: {
      type: String,
      required: true,
      min: [8, "password must be atleast 8 characters"],
    },
    image: {
      type: String,
      required: false,
    },
  },
  { timestamps: true }
);

export const Company = mongoose.model("Company", companySchema);
