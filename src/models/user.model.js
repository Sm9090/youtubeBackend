import mongoose , {Schema , model, trusted} from "mongoose"

const userSchema = new Schema({
    username: {
        type: String,
        required: true,
        unique: true,
        lowercase: true,
        trim: true,
        index: true
    },
    email: {
        type: String,
        required: true,
        unique: true,
        lowercase: true,
        trim: true,
    },
    fullname: {
        type: String,
        required: true,
        trim: true,
        index: true
    },
    avatar: {
        type: String, // third party service
        required: true, 
    },
    coverImage: {
        type: String, // third party service
    },
    watchHistory: [
        {
            type: Schema.Types.ObjectId,
            ref: "Video"
        }
    ],
    password: {
        type: String,
        required: [true , 'Password is required'],
        
    },
    refreshToken: {
        type: String
    }
},{timestamps: true})

export const User = model("User" , userSchema)