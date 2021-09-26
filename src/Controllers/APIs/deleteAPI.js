const {PrismaClient} = require("@prisma/client");
const prisma = new PrismaClient();

exports.deleteApi = async (req, res) => {

    if(req.params.id == null)
        res.sendStatus(400);
    else{
        try{
            await prisma.api.delete({
                where: {
                    id: req.params.id
                },
            });

            res.sendStatus(204);

        }catch (e) {
            res.status(400).json(e);
        }
    }
}