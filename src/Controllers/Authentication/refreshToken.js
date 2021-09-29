require('dotenv');

const JWT = require("jsonwebtoken");


exports.refreshToken = async (req, res) => {
    const refreshToken = req.body.token;
    if(refreshToken == null) return res.sendStatus(401);

    // TODO: See if the new refreshToken is the same that exists on DB

    JWT.verify(refreshToken, process.env.REFRESH_TOKEN_SECRET, (err, user) => {
        if(err) res.sendStatus(403);

        const accessToken = JWT.sign({username: user.username}, process.env.ACCESS_TOKEN_SECRET,
            {expiresIn: '1440m'});

        res.status(201).json({accessToken: accessToken});
    });

}