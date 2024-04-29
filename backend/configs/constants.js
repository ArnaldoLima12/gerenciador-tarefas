const path = require('path');

const BASEDIR = path.resolve(__dirname, '..', '..');
const MASTER = 'master.handlebars';
const STATICS = path.join(BASEDIR, 'frontend');
const LAYOUTS = path.join(BASEDIR, 'frontend', 'views', 'layouts')
const COMPONENTS = path.join(BASEDIR, 'frontend', 'views', 'components');
const VIEWS = path.join(BASEDIR, 'frontend', 'views');
const DATABASE = "mongodb+srv://arnaldo:7OrKYtZqQssh1hhD@gerenciadortarefas.tovcbu3.mongodb.net/?retryWrites=true&w=majority&appName=gerenciadortarefas"


module.exports = {BASEDIR, MASTER, STATICS, LAYOUTS, COMPONENTS, VIEWS, DATABASE};