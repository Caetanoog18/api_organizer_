const bcrypt = require('bcryptjs');
const salt = bcrypt.genSaltSync(10);

exports.resolveUpdateData = async (password, company, apis) => {

    if(password)
        password = bcrypt.hashSync(String(password), salt)
    let data = {
        password: password,
        company: company,
        apis: apis
    }
    if(company && password && apis)
        return data;

    Object.keys(data).forEach(function(key) {
        if(data[key] == null)
            delete data[key]
    });

    return data;
}
