const {validateAction, createToastMessage} = require('../helpers/helper');
const users = require('../models/UserModel');
const teams = require('../models/TeamModel');
const Team = require('../models/TeamModel');


exports.index = async (req, res) =>
{   
    const {access} = req.session.userLogged;
    
    const [userList, teamsList] = await Promise.all([new users().findAll(), new teams().findAll()]);
    
    let info = createToastMessage(req, {message: teamsList.message, type: teamsList.type});
    
    const options = {
        title: 'Equipes',
        users: userList, 
        teams: teamsList, 
        info: info? info : '', 
        access
    }

    res.render('team', options)
}

exports.createUser = async (req, res) =>
{
    const user = {name, email, password, access} = req.body;

    let response = await new users().create(user);

    validateAction(response, '/home/teams', req, res)
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

    validateAction(response, '/home/teams', req, res);

}