const UserController = require('../controller/user');
exports.routers = (server,database) => {
  server.route({
    method: 'GET',
    path: '/user',
    handler: (request, h) => {
      return UserController.list(request, h);
    }
  });

  server.route({
    method: 'POST',
    path: '/user',
    config: {
      handler: async (request, h) => {
        return UserController.add(request,h,database).then((value , error)=>{ 
             if(value.status == 201)
               return h.response(value).code(201);
             else
               return  h.response(value).code(400); 
         });
      }
    }


  });


}