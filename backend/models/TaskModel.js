const {tasks, projects} = require('./schemas');
const {response} = require('../helpers/helper');
const { default: mongoose } = require('mongoose');

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

    resave = async (status, taskId) =>
    {   
        try
        {
            await tasks.findOneAndUpdate({_id: taskId}, {status})
        }
        catch(error)
        {
            return response(false, 'Não foi possivel atualizar');
        }
    }

    findAll = async projectId =>
    {   
        
        try
        {   
            const pipeline = [
                {
                    $match: {
                        project: new mongoose.Types.ObjectId(projectId)
                    }
                },
                
                {
                    $lookup:{
                        from: 'users',
                        localField:'responsibles',
                        foreignField: '_id',
                        as: 'responsibles'
                    }
                },
                {
                    $project:
                    {
                        _id: 1,
                        project: 1,
                        title:1,
                        description:1,
                        responsibles:{
                            _id: 1,
                            name: 1
                        },
                        status: 1
                    }
                }
            ]

            let response = await tasks.aggregate(pipeline);
            return response; 
        }
        catch(error)
        {
            return response(false, 'Não foi possivel conectar-se a base de dados!');
        }
    }

    clearAll = async (id, type) =>
    {
        try
        {   
            (type == 'project') ? await tasks.deleteMany({project: id}) : await tasks.deleteMany({_id: id});
        }
        catch(error)
        {
            response(false, 'Não foi possivel conectar-se a base de dados!');
        }
    }
}


module.exports = Task;