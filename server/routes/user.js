import express from 'express'
import  { getUsers, createUser, followUser, unfollowUser,  followingLists }  from '../controllers/user.js'
import { auth } from '../middleware/auth.js'
const router = express.Router()


router.route('/users').get(getUsers)
                      .post(auth, createUser)
// router.route('/users/current_user/').get(auth, currentUser)
router.route('/users/following_lists').get(auth, followingLists)
router.route('/users/follow/:id').patch(auth, followUser)
router.route('/users/unfollow/:id').patch(auth, unfollowUser)

// router.param("id", getuserbyId)

export default router  