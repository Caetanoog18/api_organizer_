const bcrypt = require('bcryptjs');
const salt = bcrypt.genSaltSync(10);

exports.resolveUpdateData = async (name, email, description, employees) => {

    if(employees && employees.password)
        employees.password = bcrypt.hashSync(String(employees.password), salt);

    let data = {};

    if(employees)
        data = {
            name: name,
            email: email,
            description: description,
            employees: {
                connect: {
                    where: {
                        id: Number(employees.id)
                    }
                }
            }
        }
    else
        data = {
            name: name,
            email: email,
            description: description
        }

    Object.keys(data).forEach(function(key) {
        if(data[key] == null)
            delete data[key]
    });

    return data;
}
