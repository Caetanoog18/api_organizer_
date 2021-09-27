const {PrismaClient} = require("@prisma/client");
const prisma = new PrismaClient();

exports.getCompany = async (req, res) => {

    if(req.params.id == null)
        res.sendStatus(400);

    const company = await prisma.company.findUnique({
        where:{
            id: Number(req.params.id)
        },
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

    if (company)
        res.status(200).json(company);

    res.sendStatus(404);
}