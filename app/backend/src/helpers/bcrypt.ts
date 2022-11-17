
const bcrypt = require('bcrypt')

export default  {
    
    encryptPassword: async (password: string) => {
        const salt = await bcrypt.genSalt(10)
        const hashedPassword = await bcrypt.hash(password, salt)
        
        return hashedPassword
    },
    
    checkPassword: async (bodyPassword: string, databasePassword: string) => {
        const isPasswordValid = await bcrypt.compare(bodyPassword, databasePassword)

        return isPasswordValid
    }

}