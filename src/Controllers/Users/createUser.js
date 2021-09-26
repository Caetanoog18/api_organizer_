const {PrismaClient} = require("@prisma/client");
const bcrypt = require('bcryptjs');
const salt = bcrypt.genSaltSync(10);
const prisma = new PrismaClient();

exports.createUser = async (req, res) => {

    try{
        const newUser = await prisma.user.create({
            data: {
                username: req.body.username,
                name: req.body.name,
                password: bcrypt.hashSync(String(req.body.password), salt)
            }
        });

        res.status(201).json(newUser);
    }catch (e) {
        res.status(400).json(e);
    }
}


