const jwt = require('jsonwebtoken')

const auth = async (req, res, next) => {
    try {
        const token = req.headers.authorization.split(" ")[1]

        let decodedData

        if(token){
            decodedData = jwt.verify(token, 'hashed')

            req.userId = decodedData?.id
        }else{
            decodedData = jwt.decode(token)

            req.userId = decodedData?.sub
        }

        next()

    } catch (error) {
        res.status(401).json({message: error})
    }
}

module.exports = auth