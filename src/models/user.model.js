import mongoose, {Schema} from "mongoose";

const userSchema = new Schema({
    username: {
        type: String,
        required: true,
        unique: true,
        trim : true,
        index : true
    },
    email: {
        type: String,
        required: true,
        unique: true,
        trim : true,
        lowercase : true
    },
    password: {
        type: String,
        required: [true,'Password is Required'],
        trim : true

    },
    refreshTokens: {
        type: String
    },
    fullName: {
        type: String,
        required: true,
        trim : true,
        index : true
    },
    avatar: {
        type: String, // cloudnary url
        required: true
    },
    coverImage:{
        type: String, // cloudnary url
    },
    watchHistory: [{
        type: Schema.Types.ObjectId,
        ref: 'Video'
    }]
    }, { timestamps : true}
)

export const User = mongoose.model('User', userSchema); 