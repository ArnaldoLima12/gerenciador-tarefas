const {teams} = require('./schemas');
const {response} = require('../helpers/helper');

class Team
{
    createTeam = async team =>
    {   
        try
        {
            await teams.create(team);
            return response(true, 'Equipe criada com sucesso!');
        }
        catch(erro)
        {
            return response(false, 'Não foi possivel criar equipe!')
        }
    }

    findAll = async () =>
    {
        try
        {
            const pipeline = [
                {
                  $lookup: {
                    from: 'users',
                    localField: 'members',
                    foreignField: '_id', // Corrigido
                    as: 'integrantes'
                  },
                },
                {
                  $project: {
                    name: 1,
                    description: 1,
                    'integrantes.name': 1, // Corrigido para acessar 'name' dentro de 'integrantes'
                  },
                },
              ];

            let response = await teams.aggregate(pipeline);
              
            return response;
        }
        catch(erro)
        {   
            return response(false, 'Não foi possivel carregar equipes')
        }
    }
}

module.exports = Team;