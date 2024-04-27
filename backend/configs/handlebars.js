const {engine} = require('express-handlebars');
const path = require('path');

const ConfigHandle = (app) =>
{   

    const baseDir = path.resolve(__dirname, '..','..');
   

    /**ENGINE DAS VIEWS*/
    app.engine('html', engine({
        
        partialsDir: path.join(baseDir, 'frontend', 'views', 'components'),
        layoutDir: path.join(baseDir, 'frontend', 'views', 'layouts')

    }));

    app.set('view engine', 'html');

    /**PASTA RAIZ PARA AS VIEWS*/
    app.set('views', path.join(baseDir,'frontend', 'views'));
}

module.exports = ConfigHandle;