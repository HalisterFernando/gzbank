const jwt = require('jsonwebtoken')
import 'dotenv/config'
export default {
    sign: (payload: {username: string}) => {
        const token = jwt.sign(payload, process.env.JWT_SECRET || 'jwt_secret', {
            expiresIn: '24h'
        })
        return token
    },

    verify: (token: string) => {
        const isTokenValid = jwt.verify(token, process.env.JWT_SECRET || 'jwt_secret')
        return isTokenValid
    }
}
