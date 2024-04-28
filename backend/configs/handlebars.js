const {engine} = require('express-handlebars');
const {COMPONENTS, LAYOUTS, VIEWS, MASTER} = require('./constants.js');

const ConfigHandle = (app) =>
{      

    /**ENGINE DAS VIEWS*/
    app.engine('handlebars', engine({
        
        partialsDir: COMPONENTS,
        layoutDir: LAYOUTS,
        defaultLayout: MASTER

    }));

    app.set('view engine', 'handlebars');

    /**PASTA RAIZ PARA AS VIEWS*/
    app.set('views', VIEWS);
}

module.exports = ConfigHandle;