exports.list = (req, h) => {
    const params = {
        'name': 'Mario Carlos'
    };
    return params;
}

exports.add = async (req, h, database) => {
     const user = {
        'name': req.payload.name,
        'surname': req.payload.surname,
        'password': req.payload.password
     };

    return new Promise(function(resolve, reject){
      database.dataBaseRunner.run('INSERT INTO user(name, surname, password) VALUES (?,?,?)'
        , [user.name, user.surname, user.password], function (err) {
            if (err) {
                const error = {
                    'status': 400,
                    'message': 'erro ao cadastrar usuario'
                }
                reject(error);
            }
            const UserResponse = {
                 'status':200,
                 'data':user
            };
            resolve(UserResponse);
    });
  });
}


 
