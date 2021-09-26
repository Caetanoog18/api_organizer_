const {PrismaClient} = require("@prisma/client");
const prisma = new PrismaClient();

exports.getCompany = async (req, res) => {

    if(req.params.username == null)
        res.sendStatus(400);

    const company = await prisma.company.findUnique({
        where:{
            id: Number(req.params.id)
        }
    });

    if (company)
        res.status(200).json(company);

    res.sendStatus(404);
}