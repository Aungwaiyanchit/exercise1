import { User } from "../models/user.js"
import jwt from 'jsonwebtoken'
import dotenv from 'dotenv'

dotenv.config()

export const signin = async (req, res) => {
    try {
        const existingUser = await User.findOne({email: req.body.email})
        if (existingUser) return res.status(402).json({message: 'User already exists'})
        const newUser =  new User(req.body)
        await newUser.save()
        const token = jwt.sign({_id: newUser._id}, process.env.JWT_SECRECT)
        res.status(201).json({
            token: token,
            user: {
                _id: newUser._id,
                name: newUser.name,
                email: newUser.email
            }
        })
    } catch (error) {
        res.status(402).json(error.message)
    }
}

export const login  = async  (req, res) => {
    try {
        const user = await User.findOne({email: req.body.email})
        if(!user) return res.status(401).json({"message": "Email doesn't exists"})
        const matchPassword = user.matchPass(req.body.password)
        if (!matchPassword) return res.status(401).json({"message": "Email and password don't match!"})
        const token = jwt.sign({_id: user._id}, process.env.JWT_SECRECT)
        res.status(201).json({
            token: token,
            user: {
                _id: user._id,
                name: user.name,
                email: user.email
            }
        })
    } catch (error) {
        res.status(402).json(error.message)
    }
}