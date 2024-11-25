import mongoose, {Schema} from "mongoose";

const userSchema = new Schema({
    videoFile : {
        type : String, //cloudnary ulr
        required : true
    }, 
    thumbnail:{
        type : String, //cloudnary url
        required : true
    }, 
    title : {
        type : String,
        required : true
    },
    description : {
        type : String,
        required : true
    },
    views : {
        type : Number,
        default : 0
    },
    likes : {
        type : Number,
        default : 0
    },
    dislikes : {
        type : Number,
        default : 0
    },
    owner: {
        type : Schema.Types.ObjectId,
        ref : 'User'
    },
    isPublished: {
        type : Boolean,
        default : false
    }
}, {timestamps : true})