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

    const options = {

        title: project.title || 'Erro',
        info: info ? info : '',
        project
    }
    
    res.render('project', options);
}

exports.createProject = async (req, res) =>
{
    const {title, description, dueDate, color} = req.body;
  
    const project = {
        
        title,
        description,
        creator: req.session.userLogged.name,
        members: [req.session.userLogged._id],
        admins: [req.session.userLogged._id],
        color,
        dueDate,
    }

    let response = await new Project().create(project);
   
    validateAction(response, '/home', req, res);
}

exports.findAllProjects = async req =>
{
    const projects = await new Project().findAll(req.session.userLogged._id);
    return projects;
}