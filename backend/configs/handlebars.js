const {engine} = require('express-handlebars');
const {COMPONENTS, LAYOUTS, VIEWS, MASTER} = require('./constants.js');
const {iguals, date} = require('../helpers/handlebarsHelpers');

const ConfigHandle = (app) =>
{      

    /**ENGINE DAS VIEWS*/
    app.engine('handlebars', engine({
        extname: 'handlebars',
        partialsDir: COMPONENTS,
        layoutDir: LAYOUTS,
        defaultLayout: MASTER,
        runtimeOptions: {
            allowProtoPropertiesByDefault: true, // Permite acessar propriedades do protótipo
            // allowProtoMethodsByDefault: false,  // Desativa acesso a métodos do protótipo por segurança
        },
        helpers: {
            eq: iguals,
            dt: date
        }

    }));

    app.set('view engine', 'handlebars');

    /**PASTA RAIZ PARA AS VIEWS*/
    app.set('views', VIEWS);
}

module.exports = ConfigHandle;