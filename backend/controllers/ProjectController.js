const {validateAction, createToastMessage} = require('../helpers/helper');
const Project = require('../models/ProjectModel');



exports.index = async (req, res) =>
{   
    const id = req.params.projeto;

    let project = await new Project().find(id);
    
    let info = createToastMessage(req);

    if(project.length > 0)
    {
        project = project[0];
    }
    else
    {  
        if(project.status != undefined) 
        {
            info = createToastMessage(req, { message: project.message, type: false });
            project = '';
        }
        else
        {
            info = createToastMessage(req, {message: 'Operação invalida', type: false});
            project = '';    
        } 
    }
    
   console.log(project);

    const options = {

        title: project.title || 'Erro',
        info: info ? info : '',
        project
    }
    
    res.render('project', options);
}

exports.createProject = async (req, res) =>
{
    const {title, description, dueDate} = req.body;
  
    const project = {
        
        title,
        description,
        dueDate,
        members: [req.session.userLogged._id],
        admins: [req.session.userLogged._id]
    }

    let response = await new Project().create(project);
   
    validateAction(response, '/home', req, res);
}

exports.findAllProjects = async req =>
{
    const projects = await new Project().findAll(req.session.userLogged._id);
    return projects;
}



// exports.index = async (req, res) =>
// {   
//     const {access} = req.session.userLogged;
    
//     const [userList, teamsList] = await Promise.all([new users().findAll(), new teams().findAll()]);
    
//     let info = createToastMessage(req, {message: teamsList.message, type: teamsList.type});
    
//     const options = {
//         title: 'Equipes',
//         users: userList, 
//         teams: teamsList, 
//         info: info? info : '', 
//         access
//     }

//     res.render('team', options)
// }

// exports.createUser = async (req, res) =>
// {
//     const user = {name, email, password, access} = req.body;

//     let response = await new users().create(user);

//     validateAction(response, '/home/teams', req, res)
// }
