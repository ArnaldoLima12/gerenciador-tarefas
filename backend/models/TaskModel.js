const {tasks} = require('./schemas');
const {response} = require('../helpers/helper');

class Task
{
    create = async task =>
    {
        try
        {
            let response = await tasks.create(task);
            return response._id;
        }
        catch(error)
        {
            return response(false, 'Não foi possivel cadastrar a tarefa');
        }
    }

    findAll = async projectId =>
    {
        try
        {   
            let response = await tasks.find({project: projectId});
            return response; 
        }
        catch(error)
        {
            return response(false, 'Não foi possivel conectar-se a base de dados!');
        }
    }
}


module.exports = Task;