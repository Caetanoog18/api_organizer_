const {PrismaClient} = require("@prisma/client");
const bcrypt = require('bcryptjs');
const JWT = require("jsonwebtoken");
const salt = bcrypt.genSaltSync(10);
const prisma = new PrismaClient();

exports.createUser = async (req, res) => {

    const accessToken = JWT.sign({username: req.body.username}, process.env.ACCESS_TOKEN_SECRET,
        {expiresIn: '1440m'});
    const refreshToken = JWT.sign({username: req.body.username}, process.env.REFRESH_TOKEN_SECRET);

    try{
        const newUser = await prisma.user.create({
            data: {
                username: req.body.username,
                name: req.body.name,
                password: bcrypt.hashSync(String(req.body.password), salt),
                accessToken: accessToken,
                refreshToken: refreshToken
            }
        });
        res.status(201).json(newUser);
    }catch (e) {
        res.status(400).json(e);
    }
}


