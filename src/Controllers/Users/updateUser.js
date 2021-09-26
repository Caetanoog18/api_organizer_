const {PrismaClient} = require("@prisma/client");
const prisma = new PrismaClient();
const {resolveUpdateData} = require ("./services/updateUser");

exports.updateUser = async (req, res) => {

    let data = await resolveUpdateData(req.body.password, req.body.company, req.body.apis);

    if(req.params.username == null)
        res.sendStatus(400);
    else{
        try{
            const user = await prisma.user.update({
                where: {
                    username: req.params.username
                },
                data: data

            });

            delete user.password;

            res.status(200).json(user);

        }catch (e) {
            res.status(400).json(e);
        }

    }
}