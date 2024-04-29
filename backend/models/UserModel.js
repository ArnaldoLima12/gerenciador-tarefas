const {users} = require('../models/schemas');

class User
{   
    #user;

    create = async user =>
    {
        try
        {
            await users.create(user);
            
            let response = {
                
                status: true,
                message: 'Usuario cadastrado com sucesso'
            }
            
            return response;
        }
        catch(erro)
        {   
            console.log(erro);

            let response = {
                
                status: false,
                message: 'Erro ao cadastrar usuario'
            }

            return response
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