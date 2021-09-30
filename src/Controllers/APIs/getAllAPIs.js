const {PrismaClient} = require("@prisma/client");
const prisma = new PrismaClient();

exports.getAllApis = async (req, res) => {
    const apis = await prisma.api.findMany({
        where: {
            OR: [{
                author: {
                    username: req.user.username
                }
            },
                {
                    private: false
                }
            ]
        }
    }).catch((e) => {
        res.status(400).json(e);
    });

    if(!apis && apis.length === 0)
        res.sendStatus(404);
    res.status(200).json(apis);
}