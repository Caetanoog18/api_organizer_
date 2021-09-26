const {PrismaClient} = require("@prisma/client");
const prisma = new PrismaClient();

exports.getAllApis = async (req, res) => {
    const apis = await prisma.api.findMany();

    res.status(200).json(apis);
}