const {PrismaClient} = require("@prisma/client");
const prisma = new PrismaClient();

exports.createApi = async (req, res) => {

    try{
        const api = await prisma.api.create({
            data: {
                name: req.body.name,
                description: req.body.description,
                documentation_url: req.body.documentation_url,
                private: Boolean(req.body.private),
                authorId: Number(req.body.authorId)
            }
        });

        res.status(201).json(api);
    }catch (e) {
        res.status(400).json(e);
    }
}


