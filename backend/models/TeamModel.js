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
}

module.exports = Team;