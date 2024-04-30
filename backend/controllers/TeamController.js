const {validateAction} = require('../helpers/helper');
const users = require('../models/UserModel');
const teams = require('../models/TeamModel');


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

    validateAction(response, '/home/equipes', req, res)
}

exports.createTeam = async (req, res) =>
{
    const {name, description, members} = req.body;
    
    const team = {
        name,
        description,
        members: Array.isArray(members) ? members : [members]
    }

    let response = await new teams().createTeam(team);
    validateAction(response, '/home/equipes', req, res);

}


