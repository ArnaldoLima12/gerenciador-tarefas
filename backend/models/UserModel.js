const {users} = require('../models/schemas');
const {response} = require('../helpers/helper');

class User
{   
    #user;

    create = async user =>
    {
        try
        {
            await users.create(user);
            return response(true, 'Usuario cadastrado com sucesso');
        }
        catch(erro)
        {   
            return response(false, 'Erro ao cadastrar usuario');
        }
    }

    findUser =  async (email, password) =>
    {
        this.#user = await users.findOne({email})

        if(this.#user && this.#user.password === password)
        {
            return true;
        }
        else
        {
            return false;
        }
    }
    
    findAll = async () =>
    {
        let response = await users.find({}, {_id: 1, name: 1});

        if(response)
        {
            return response;
        }
        else
        {
            return {erro: 404};
        }
    }

    get logged()
    {
        return this.#user;
    }
}

module.exports = User;