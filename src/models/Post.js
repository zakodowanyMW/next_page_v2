import mongoose from "mongoose";

const {Schema} = mongoose;

let postSchema = new Schema({
    title: {
        type: String,
        required: true,
    },
    desc: {
        type: String,
        unique: true,
        required: true,
    },
    img: {
        type: String,
        required: true,
    },
    content: {
        type: String,
        required: true,
    },
    username: {
        type: String,
        required: true,
    },
}, {timestamps: true});


const Post = mongoose.models?.Post || mongoose.model("Post", postSchema);
export  { Post };