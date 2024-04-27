const {engine} = require('express-handlebars');
const {COMPONENTS, LAYOUTS, VIEWS} = require('./contants.js');

const ConfigHandle = (app) =>
{      

    /**ENGINE DAS VIEWS*/
    app.engine('handlebars', engine({
        
        partialsDir: COMPONENTS,
        layoutDir: LAYOUTS

    }));

    app.set('view engine', 'handlebars');

    /**PASTA RAIZ PARA AS VIEWS*/
    app.set('views', VIEWS);
}

module.exports = ConfigHandle;