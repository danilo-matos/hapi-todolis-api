const Task = require('../models/dog')

//lista de tarefas

exports.list = (req, h) => {
    return Task.find({}).exec().then((task) => {
  
      return { tasks: task };
  
    }).catch((err) => {
  
      return { err: err };
  
    });
  }

  //pegar o id

  exports.get = (req, h) => {
  
    return Task.findById(req.params.id).exec().then((task) => {
  
      if(!task) return { message: 'Task not Found' };
  
      return { task: task };
  
    }).catch((err) => {
  
      return { err: err };
  
    });
  }


  /**
 * cadastrar tarefa
 */
exports.create = (req, h) => {

    const taskData = {
      name: req.payload.name
    };
  
    return Task.create(taskData).then((task) => {
  
       return { message: "Task created successfully", task: task };
  
    }).catch((err) => {
  
      return { err: err };
  
    });
  }
  
  /**
 * PUT | editar tarefa
 */
exports.update = (req, h) => {

    return Task.findById(req.params.id).exec().then((task) => {
  
      if (!task) return { err: 'Task not found' };
  
      task.name = req.payload.name;
  
      task.save(taskData);
  
    }).then((data) => {
  
        return { message: "Task data updated successfully" };
  
    }).catch((err) => {
  
        return { err: err };
  
    });
  }

  /**
 * apagar task pelo id
 */
exports.remove = (req, h) => {
  
    return Task.findById(req.params.id).exec(function (err, dog) {
  
      if (err) return { dberror: err };
      if (!task) return { message: 'Task not found' };
  
      task.remove(function (err) {
        if (err) return { dberror: err };
  
        return { success: true };
      });
    });
  }
  