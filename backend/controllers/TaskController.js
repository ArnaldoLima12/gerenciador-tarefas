const Task = require('../models/TaskModel');

exports.load = async (req, res) => {

    const {identifier} = req.params;
    let response = await new Task().findAll(identifier);
    if(response) res.status(200).json(response);
}

exports.resave = async (req, res) => {
    
    const {status, taskId} = req.body;
    await new Task().resave(status, taskId);
    return;
}

exports.clearAll = async (req, res) =>
{
    const {value, type} = req.body;
    await new Task().clearAll(value, type);
    return;
}