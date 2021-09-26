const {PrismaClient} = require("@prisma/client");
const prisma = new PrismaClient();

exports.getAllCompanies = async (req, res) => {
    const companies = await prisma.company.findMany();

    res.status(200).json(companies);
}