import { User } from "../models/user.js"
import mongoose from "mongoose"

export const getUsers =  async (req, res) => {
    try {
        const users = await User.find().select("name email created follower following")
        res.status(200).json(users)
    } catch (error) {
        res.status(401).send({"error": error.message})
    }
}

export const createUser = async (req, res) => {
    try {
        const existingUser = await User.findOne({email: req.body.email})
        if (existingUser) return res.send('User already exists')
        const user =  new User(req.body)
        await user.save()

        res.status(201).send('User Created')
    } catch (error) {
        res.status(400).send({"error": error.message})
    }
}

export const getuserbyId = async (req, res, next) => {
    try {
        const user = await User.findById(id)
        if(!user) return res.status(402).json({message: "user not found!"})
        req.user = user
        next()
    } catch (error) {
        res.status(400).send({"error": error.message})
    }
    
}

// export const currentUser = async (req, res) => {

//     try {
//        const user = await User.findById(req.user._id).select(" name email following follower created")
//        res.json(user)
//     } catch (error) {
//         res.status(400).send({"error": error.message})
//     }
// }

export const followingLists = async (req, res) => {
    try {
        const followingList = await User.findById(req.user._id).select('following')
                                        .populate('following', 'name')
                                        .exec()
        res.json(followingList)
    } catch (error) {
        res.status(400).send({"error": error.message})
    }
}

export const followUser = async (req, res) => {
    const id = req.params.id
    try {
        const unFollowing = await User.findByIdAndUpdate(req.user._id, {$push: {following: id}})
        const unFollower = await User.findByIdAndUpdate(id, {$push: { follower: req.user._id }},{new: true})
                                      .populate('following', '_id name')
                                      .populate('follower', '_id name')
                                      .exec()
        res.json('sucess')
    } catch (error) {
        res.status(400).send({"error": error.message})
    }
}
export const unfollowUser = async (req, res) => {
    const id = req.params.id
    try {
        const unFollowing = await User.findByIdAndUpdate(req.user._id, {$pull: {following: id}})
        const unFollower = await User.findByIdAndUpdate(id, {$pull: { follower: req.user._id }},{new: true})
                                      .populate('following', '_id name')
                                      .populate('follower', '_id name')
                                      .exec()
        res.json('sucess')
    } catch (error) {
        res.status(400).send({"error": error.message})
    }
}


