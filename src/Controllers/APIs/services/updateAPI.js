exports.resolveUpdateData = async (name, description, documentation_url, private_, authorId) => {

    let data = {
        name: name,
        description: description,
        documentation_url: documentation_url,
        private: Boolean(private_),
        authorId: Number(authorId)
    }

    Object.keys(data).forEach(function(key) {
        if(data[key] == null)
            delete data[key]
    });

    return data;
}
