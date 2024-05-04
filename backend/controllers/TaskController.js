const Task = require('../models/TaskModel');

exports.load = async (req, res) => {

    const {identifier} = req.params;
    let response = await new Task().findAll(identifier);
    if(response) res.status(200).json(response);
}
