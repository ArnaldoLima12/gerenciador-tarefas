const {validateAction, createToastMessage} = require('../helpers/helper');
const Project = require('../models/ProjectModel');
const Task = require('../models/TaskModel');



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

exports.enterProject = async (req, res) => {

    const {code} = req.body;
    
    let response = await new Project().addMember(code, req.session.userLogged._id);

    validateAction(response, '/home', req, res);

}

exports.findAllProjects = async req =>
{
    const projects = await new Project().findAll(req.session.userLogged._id);
    return projects;
}

exports.createTask = async (req, res) =>
{
    const {project, title, description, members, status} = req.body;
    const arrayMembers = [].concat(members || []);

    const task = {

        project,
        title,
        description,
        responsibles: arrayMembers,
        status
    }

    if(!title || !description || arrayMembers.length < 1 || !status)
    {   
        validateAction({status: false, message: 'Todos os campos devem ser preenchidos!'}, `/home/project/content/${project}`, req, res);
        return;
    }
    
    let taskSave = await new Task().create(task);
    let response = await new Project().updateInTasks(project, taskSave);

    validateAction(response, `/home/project/content/${project}`, req, res);
}