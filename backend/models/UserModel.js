const {users} = require('../models/schemas');

class User
{   
    #user;

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
    
    get logged()
    {
        return this.#user;
    }
}

module.exports = User;