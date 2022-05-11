import mongoose  from "mongoose";


const PostSchema = new mongoose.Schema({
    postedBy: {
        type: mongoose.Schema.Types.ObjectId, ref: 'User'
    },
    content: {
        type: String,
        required: 'Content is required'
    },
    photo: {
        type: String
    },
    likes: [{
        type: mongoose.Schema.Types.ObjectId, ref: 'User'
    }],
    shares: [{
        type: mongoose.Schema.Types.ObjectId, ref: 'User'
    }],
    comments: [{
        text: String,
        created: { type: Date, default: Date.now }, 
        postedId: [{ type: mongoose.Schema.Types.ObjectId, ref: 'User' }]
    }],
    created: { type: Date, default: Date.now }
})

export const Post = mongoose.model('Post', PostSchema)