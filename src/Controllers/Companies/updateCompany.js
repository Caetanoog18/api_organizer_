const {PrismaClient} = require("@prisma/client");
const prisma = new PrismaClient();

exports.updateCompany = async (req, res) => {

    // TODO: Create resolve data for company update

    if(req.params.id == null)
        res.sendStatus(400);
    else{
        try{
            const company = await prisma.company.update({
                where: {
                    id: req.params.id
                },
                data: data

            });

            res.status(200).json(company);

        }catch (e) {
            res.status(400).json(e);
        }

    }
}