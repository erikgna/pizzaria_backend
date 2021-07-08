const jwt = require('jsonwebtoken')

const funcioAuth = async (req, res, next) => {
    try {
        const token = req.headers.authorization.split(" ")[1]

        let decodedData = jwt.verify(token, 'hashed')

        if(decodedData?.admin === 2 || decodedData?.admin === 3){
            req.userId = decodedData?.admin

            next()
        }else{
            decodedData = jwt.decode(token)
            req.userId = decodedData?.sub
            res.status(401).json({message: "Not allowed!"})
        }

    } catch (error) {
        res.status(401).json({message: error})
    }
}

module.exports = funcioAuth