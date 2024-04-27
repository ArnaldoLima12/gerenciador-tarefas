const {App, port } = require('./backend/app.js');


try
{
    App.listen(port, () =>
    {
        console.log(`Servidor iniciado em: http://localhost:${port}`)
    })
}
catch(erro)
{
    console.log('Não foi possivel iniciar =>', erro);
}

