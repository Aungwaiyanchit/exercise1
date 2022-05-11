import jwt from 'jsonwebtoken'
import dotenv from 'dotenv'

dotenv.config()

export const auth = (req, res, next) => {
        const authHeader = req.headers['authorization']
        const token = authHeader && authHeader.split(' ')[1]
        if (token == null) return res.sendStatus(401)
        jwt.verify(token, process.env.JWT_SECRECT , (err, user) => {
            console.log(err);
            if(err) return res.sendStatus(403)
            req.user = user
            next()
        } );   
}