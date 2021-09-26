const {PrismaClient} = require("@prisma/client");
const prisma = new PrismaClient();

exports.updateApi = async (req, res) => {

    // TODO: Create resolve data for API update

    if(req.params.id == null)
        res.sendStatus(400);
    else{
        try{
            const api = await prisma.api.update({
                where: {
                    id: req.params.id
                },
                data: data

            });

            res.status(200).json(api);

        }catch (e) {
            res.status(400).json(e);
        }

    }
}