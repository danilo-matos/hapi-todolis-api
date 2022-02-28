//tarefas

    server.route({
        method: 'GET',
        path: '/todo/{taskId}',
        handler:(request, h) => {
            var todoMock ={};
            if(request.params.taskId == "task"){
                todoMock ={
                    "taskname": "Learn JavaScript",
                    "taskname1": "Learn Guitar",
                    "taskname2": "Learn how to dance"
                }
            }
            return (todoMock)
        }
    })

   

    server.route({
        method: 'POST',
        path: '/todo',
        options:{
            validate:{
                payload: Joi.object({
                    todoname: Joi.string().required(),
                    todoname1: Joi.string().required(),
                    todoname2: Joi.string().required()
                })
            }
        },
        handler: function (request, h) {
    
            const payload = request.payload;
    
            return (request.payload)
        }
    });
    