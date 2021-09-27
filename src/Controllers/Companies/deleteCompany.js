const {PrismaClient} = require("@prisma/client");
const prisma = new PrismaClient();

exports.deleteCompany = async (req, res) => {

    if(req.params.id == null)
        res.sendStatus(400);
    else{
        try{
            await prisma.company.delete({
                where: {
                    id: Number(req.params.id)
                },
            });

            res.sendStatus(204);

        }catch (e) {
            res.status(400).json(e);
        }
    }
}