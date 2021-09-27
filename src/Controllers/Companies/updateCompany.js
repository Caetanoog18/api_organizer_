const {PrismaClient} = require("@prisma/client");
const {resolveUpdateData} = require("../Companies/services/updateCompany");
const prisma = new PrismaClient();

exports.updateCompany = async (req, res) => {

    let data = await resolveUpdateData(
        req.body.name,
        req.body.email,
        req.body.description,
        req.body.employees
    );

    if(req.params.id == null)
        res.sendStatus(400);
    else{
        try{
            const company = await prisma.company.update({
                where: {
                    id: Number(req.params.id)
                },
                data: data

            });

            res.status(200).json(company);

        }catch (e) {
            res.status(400).json(e);
        }

    }
}