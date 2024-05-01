const User = require('../models/UserModel');
const {GENERATEPATH} = require('../configs/constants');

exports.index = (req, res) =>
{   
    const options = {title: 'Login', erro: req.session.erro, layout: GENERATEPATH('other')};
    res.render('login', options);
    req.session.erro = '';
}

exports.auth = async (req, res) =>
{   
    const {email, password} = req.body;
    let user = new User();

    let response = await user.findUser(email, password);

    if(response)
    {   
        req.session.logged = true;
        req.session.userLogged = user.logged;
        res.redirect('/home');
    }
    else
    {   
        req.session.erro = 'Usuário não encontrado';
        res.redirect('/')
    }
}