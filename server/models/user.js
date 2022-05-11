import mongoose from "mongoose";
import bcrypt from 'bcryptjs'

const UserSchema = new mongoose.Schema({
    name: String,
    email: {
        type: String,
        trim: true, 
        unique: 'Email already exists!',
        match: [/.+\@.+\..+/, 'Please fill a vlaid email address'],
        required: 'Email is required!'
    },
    password: {
        type: String,
        minlength: 8,
        required: "password require!"
    },
    created: {
        type: Date,
        default: new Date
    },
    updated: Date,
    following: [{ type: mongoose.Schema.Types.ObjectId, ref: "User" }],
    follower: [{ type: mongoose.Schema.Types.ObjectId, ref: "User" }]
})

UserSchema.pre('save', async function(next){
    const salt = await bcrypt.genSalt()
    this.password = await bcrypt.hash(this.password, salt)
    next()
})

UserSchema.methods.matchPass = async function(password) {
    return await bcrypt.compare(password, this.password)
}

export const User = mongoose.model('User', UserSchema)  


