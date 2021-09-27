const {PrismaClient} = require("@prisma/client");
const prisma = new PrismaClient();

exports.getAllUsers = async (req, res) => {
    const users = await prisma.user.findMany({
        select: {
            username: true,
            name: true,
            id: true
        }
    });

    res.status(200).json(users);
}