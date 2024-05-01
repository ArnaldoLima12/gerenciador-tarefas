const {validateAction, createToastMessage} = require('../helpers/helper');

exports.index = (req, res) =>
{   
    const {access} = req.session.userLogged
    const options = {title: 'Tarefas', access, task: true};
    res.render('task', options)
}