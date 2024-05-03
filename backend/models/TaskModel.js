const {tasks} = require('./schemas');
const {response} = require('../helpers/helper');

class Task
{
    create = async task =>
    {
        try
        {
            let response = await tasks.create(task)
            return response._id;
        }
        catch(error)
        {
            response(false, 'Não foi possivel cadastrar a tarefa');
        }
    }
}


module.exports = Task;