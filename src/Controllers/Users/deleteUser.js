const {PrismaClient} = require("@prisma/client");
const prisma = new PrismaClient();

exports.deleteUser = async (req, res) => {

    if(req.params.username == null)
        res.sendStatus(400);
    else{
        try{
            await prisma.user.delete({
                where: {
                    username: req.params.username
                },
            });

            res.sendStatus(204);

        }catch (e) {
            res.status(400).json(e);
        }
    }
}