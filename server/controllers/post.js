import { Post } from "../models/post.js"
import { User } from '../models/user.js'

export const getPosts = async (req, res) => {
    try {
        const posts = await Post.find().all()
        res.status(200).json(posts)
    } catch (error) {
        res.status(400).json({message: error.message})
    }
}

export const createPost = async (req, res) => {
    try {
        const post = new Post(req.body)
        post.postedBy =  await req.user._id
        await post.save()
        res.status(201).json(post)
    } catch (error) {
        res.status(400).json({message: error.message})
    }
}

export const feedbyFollow = async (req, res) => {
    
    try {
        const user = await User.findById(req.user._id)
        const posts = await Post.find({postedBy: { $in: user.following }})
                                // .populate('comments.postedBy', '_id name')
                                .populate('postedBy', '_id name')
                                .sort('-created')
                                .exec()
        res.status(200).json(posts)
    } catch (error) {
        res.status(400).json({ message: error.message })
    }
} 