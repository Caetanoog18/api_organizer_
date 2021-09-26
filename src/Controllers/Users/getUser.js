const {PrismaClient} = require("@prisma/client");
const prisma = new PrismaClient();

exports.getUser = async (req, res) => {
    const user = await prisma.user.findUnique({
        where:{
            id: Number(req.params.id)
        }
    });

    if (user && 'password' in user){
        delete user.password;
        res.status(200).json(user);
    }

    res.sendStatus(404);
}