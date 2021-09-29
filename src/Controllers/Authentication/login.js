require('dotenv');

const bcrypt = require('bcryptjs');
const {PrismaClient} = require("@prisma/client");
const prisma = new PrismaClient();
const JWT = require("jsonwebtoken");

exports.login = async (req, res) => {

    if(req.body.password == null)
        res.status(401);

    let hashPassword = await prisma.user.findUnique({
        where:{
            username: req.body.username
        },
        select: {
            password: true
        }
    });

    bcrypt.compare(req.body.password, hashPassword, function(err, _) {
        if(err) res.status(401);

        const accessToken = JWT.sign({username: req.body.username}, process.env.ACCESS_TOKEN_SECRET,
            {expiresIn: '1440m'});
        const refreshToken = JWT.sign({username: req.body.username}, process.env.REFRESH_TOKEN_SECRET);

        res.status(201).send({token: accessToken, refreshToken: refreshToken});
    });
}