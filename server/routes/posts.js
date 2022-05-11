import express from 'express'
import { getPosts, createPost, feedbyFollow } from '../controllers/post.js'
import { auth } from '../middleware/auth.js'

const router = express.Router()

router.route('/posts/').get(auth, getPosts)
                        .post(auth, createPost)

router.route('/posts/userfeeds/').get(auth, feedbyFollow)

export default router