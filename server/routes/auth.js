import express from 'express'
import { signin, login } from '../controllers/auth.js'
const router = express.Router()


router.route('/auth/singin').post(signin)
router.route('/auth/login').post(login)




export default router