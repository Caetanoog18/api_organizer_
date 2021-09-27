const {PrismaClient} = require("@prisma/client");
const prisma = new PrismaClient();

exports.getUser = async (req, res) => {

    if(req.params.username == null)
        res.sendStatus(400);

    const user = await prisma.user.findUnique({
        where:{
            username: String(req.params.username)
        },
        select: {
            username: true,
            name: true,
            id: true
        }
    });

    if (user && 'password' in user){
        delete user.password;
        res.status(200).json(user);
    }

    res.sendStatus(404);
}