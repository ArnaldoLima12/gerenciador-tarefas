const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({

        name: {type: String, required: true},
        email: {type: String, required: true},
        password: {type: String, required: true},
        access: {type: Boolean, default: false},
        teams: [{type: mongoose.Schema.Types.ObjectId, ref: 'teams'}]
});

const teamSchema = new mongoose.Schema({

    name: { type: String, required: true },
    description: { type: String },
    members: [{ type: mongoose.Schema.Types.ObjectId, ref: 'users' }],

});

const projectSchema = new mongoose.Schema({
    
    title: { type: String, required: true },
    description: { type: String },
    teams: [{ type: mongoose.Schema.Types.ObjectId, ref: 'teams' }],
    created_at: { type: Date, default: Date.now },
    due_date: { type: Date },

});

const users = mongoose.model('users', userSchema);
const teams = mongoose.model('teams', teamSchema);
const projects = mongoose.model('projects', projectSchema);

module.exports = {users, teams, projects}