const users = require('../models/UserModel');

exports.index = async (req, res) =>
{   
    let userList = await new users().findAll();
    let info;

    if(req.session.messageSuccess)
    {
        info = {message: req.session.messageSuccess, type:'success'};
        req.session.messageSuccess = '';    
    }
    else
    {
        info = {message: req.session.messageErro, type:'erro'};
        req.session.messageErro = '';
    }

    const options = {title: 'Equipes', users: userList, info: info? info : ''}
    res.render('team', options)
}

exports.createUser = async (req, res) =>
{
    const user = {name, email, password, access} = req.body;

    let response = await new users().create(user);

    validate(response, '/home/equipes', req, res)
}


const validate = (response, redirect, req, res) =>
{
    if(response.status)
    {   
        req.session.messageSuccess = response.message;
        res.redirect(redirect);
    }
    else
    {
        req.session.messageErro = response.message;
        res.redirect(redirect);
    }
}