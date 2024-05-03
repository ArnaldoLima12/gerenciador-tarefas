const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({

    name: {type: String, required: true},
    email: {type: String, required: true},
    password: {type: String, required: true},
    access: {type: Boolean, default: false},
    projects: [{type: mongoose.Schema.Types.ObjectId, ref: 'projects'}]
});

const projectSchema = new mongoose.Schema({
    
    title: { type: String, required: true },
    description: { type: String },
    creator: {type: String, required: true},
    members: [{ type: mongoose.Schema.Types.ObjectId, ref: 'users' }],
    admins: [{type: mongoose.Schema.Types.ObjectId, ref: 'users'}],
    tasks: [{type: mongoose.Schema.Types.ObjectId, ref: 'tasks'}],
    color: {type: String, required: true},
    created_at: { type: Date, default: Date.now },
    dueDate: { type: Date, required: true },

});

const tasksSchema = new mongoose.Schema({

    project: {type: mongoose.Schema.Types.ObjectId, ref: 'projects', required: true},
    title: {type: String, required: true},
    description: {type: String, required: true},
    responsibles: [{type: mongoose.Schema.Types.ObjectId, ref: 'users', required: true}],
    status: {type: String, required: true}
    // dataLimite: {type: Date, required: true}

});

const users = mongoose.model('users', userSchema);
const projects = mongoose.model('projects', projectSchema);
const tasks = mongoose.model('tasks', tasksSchema);

module.exports = {users, projects, tasks}