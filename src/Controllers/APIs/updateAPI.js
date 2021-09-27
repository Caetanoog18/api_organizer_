const {PrismaClient} = require("@prisma/client");
const {resolveUpdateData} = require("../APIs/services/updateAPI");
const prisma = new PrismaClient();

exports.updateApi = async (req, res) => {

    let data = await resolveUpdateData(
        req.body.name,
        req.body.description,
        req.body.documentation_url,
        req.body.private,
        req.body.authorId
    )

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