const {PrismaClient} = require("@prisma/client");
const prisma = new PrismaClient();

exports.getAllCompanies = async (req, res) => {
    const companies = await prisma.company.findMany({
        select: {
            id: true,
            name: true,
            email: true,
            description: true,
            employees: {
                select:{
                    id: true,
                    username: true,
                    name: true
                }
            }
        }
    });

    res.status(200).json(companies);
}