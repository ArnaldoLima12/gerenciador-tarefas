const mongoose = require('mongoose');
const {DATABASE} = require('./constants');

const options = {dbName: 'tarefas'}

const conect = async () =>
{   
    try
    {
        await mongoose.connect(DATABASE, options);
        console.log('Conectado com sucesso!');
    }
    catch(erro)
    {
        console.log('Erro ao conectar-se com a base de dados');
    }
}

module.exports = conect;