const {projects} = require('./schemas');
const {response} = require('../helpers/helper');
const { default: mongoose } = require('mongoose');

class Project
{
    create = async project =>
    {   
        try
        {
          await projects.create(project);
          return response(true, 'Projeto adicionado com sucesso!');
        }
        catch(erro)
        {
          return response(false, 'Não foi possivel adicionar o projeto!')
        }
    }

    find = async id =>
    {
      try
      {   
        const pipeline = [
            {
              $match: {
                _id: new mongoose.Types.ObjectId(id)
              }
            }, 
            {
              $lookup: {
                from: 'users', 
                localField: 'members', 
                foreignField: '_id', 
                as: 'integrantes'
              }
            }, 
            {
              $lookup: {
                from: 'users', 
                localField: 'admins', 
                foreignField: '_id', 
                as: 'administradores'
              }
            }, 
            {
              $project: {
                title: 1, 
                description: 1, 
                dueDate: 1, 
                created_at: 1, 
                integrantes: {
                  name: 1
                }, 
                administradores: {
                  name: 1
                },
                creator: 1
              }
            }
        ];

        let response = await projects.aggregate(pipeline);
        return response;
      } 
      catch(erro)
      {
        return response(false, 'Falha ao tentar conectar-se a base de dados');
      }
    }

    findAll = async userId => 
    {
      try
      { 
        const pipeline = [
            {
              '$match': {
                '$or': [
                  {
                    'admins': {
                      '$eq': new mongoose.Types.ObjectId(userId)
                    }
                  }, {
                    'members': {
                      '$eq': new mongoose.Types.ObjectId(userId)
                    }
                  }
                ]
              }
            }, {
              '$lookup': {
                'from': 'users', 
                'localField': 'admins', 
                'foreignField': '_id', 
                'as': 'admins'
              }
            }, {
              '$lookup': {
                'from': 'users', 
                'localField': 'members', 
                'foreignField': '_id', 
                'as': 'members'
              }
            }, {
              '$project': {
                'title': 1,
                'description': 1, 
                'dueDate': 1, 
                'created_at': 1, 
                'creator': 1,
                'color': 1
              }
            }
        ];

        let response = await projects.aggregate(pipeline);
        return response;
      
      }
      catch(erro)
      {
        return response(false, 'Não foi possivel carregar lista de projetos!');
      }
    }
}

module.exports = Project;