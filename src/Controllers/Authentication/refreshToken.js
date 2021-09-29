require('dotenv');
const {PrismaClient} = require("@prisma/client");
const prisma = new PrismaClient();
const JWT = require("jsonwebtoken");


exports.refreshToken = async (req, res) => {
    const refreshToken = req.body.token;
    if(refreshToken == null) return res.sendStatus(401);

    JWT.verify(refreshToken, process.env.REFRESH_TOKEN_SECRET, async (err, user) => {
        if (err) res.sendStatus(403);

        const accessToken = JWT.sign({username: user.username}, process.env.ACCESS_TOKEN_SECRET,
            {expiresIn: '1440m'});

        await prisma.user.update({
            where: {
                username: user.username
            },
            data: {accessToken: accessToken}

        });

        res.status(201).json({accessToken: accessToken});
    });

}