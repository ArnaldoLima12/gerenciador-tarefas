const {validateAction, createToastMessage} = require('../helpers/helper');

exports.index = (req, res) =>
{   
    const {access} = req.session.userLogged
    const options = {title: 'Tarefas', access}
    res.render('task', options)
}