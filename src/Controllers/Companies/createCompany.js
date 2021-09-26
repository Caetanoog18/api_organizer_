const {PrismaClient} = require("@prisma/client");
const prisma = new PrismaClient();

exports.createCompany = async (req, res) => {

    try{
        const company = await prisma.company.create({
            data: {
                name: req.body.name,
                email: req.body.email,
                description: req.body.description
            }
        });

        res.status(201).json(company);
    }catch (e) {
        res.status(400).json(e);
    }
}


