const {PrismaClient} = require("@prisma/client");
const prisma = new PrismaClient();

exports.getApi = async (req, res) => {

    if(req.params.id == null)
        res.sendStatus(400);

    const api = await prisma.api.findUnique({
        where:{
            id: Number(req.params.id)
        }
    });

    if (api)
        res.status(200).json(api);

    res.sendStatus(404);
}