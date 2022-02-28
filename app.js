'use strict';

const Hapi = require('@hapi/hapi');
const Joi = require ('joi');
const TaskController =  require('./src/controllers/task');
const mongoose = require('mongoose');
const Schema = mongoose.Schema;



const init = async () => {
//conexão com servidor
    const server = Hapi.server({
        port: 3000,
        host: 'localhost'
    });

    server.route({
        method: 'GET',
        path: '/',
        handler: (request, h) => {

            return 'Welcome';
        }
    });

    // usuario

    server.route({
        method: 'GET',
        path: '/account/{username}',
        handler:(request, h) => {
            var accountMock ={};
            if(request.params.username == "danilo"){
                accountMock ={
                    "username": "Danilo",
                    "password": "1234",
                    "twitter":"@danilo____matos",
                }
            }
            return (accountMock)
        }
    })

    server.route({
        method: 'POST',
        path: '/account',
        options:{
            validate:{
                payload: Joi.object({
                    firstname: Joi.string().required(),
                    lastname: Joi.string().required(),
                    timestamp:Joi.any().forbidden().default((new Date).getTime())
                }), 
                
            }
        },
        handler: function (request, h) {
    
            const payload = request.payload;
    
            return (request.payload)
        }
    });

    //tarefas
    server.route({
        method: 'GET',
        path: '/tasks',
        handler: TaskController.list
      });

      server.route({
        method: 'GET',
        path: '/tasks/{id}',
        handler: TaskController.get
      });
      server.route({
        method: 'POST',
        path: '/tasks',
        handler: TaskController.create
      });
      
      server.route({
        method: 'PUT',
        path: '/tasks/{id}',
        handler: TaskController.update
      });
      
      server.route({
        method: 'DELETE',
        path: '/tasks/{id}',
        handler: TaskController.remove
      });
      
      

    await server.start();
    console.log('Server running on %s', server.info.uri);
};

process.on('unhandledRejection', (err) => {

    console.log(err);
    process.exit(1);
});

init();

// const Hapi = require("hapi");

// const server = new Hapi.Server({  
//     host: 'localhost',
//     port: 3000
//   })

// //iniciar servidor

// server.start(error => {
//     if(error){
//         throw error;
//     }
//     console.log("Listening at " + server.info.uri); 
// });