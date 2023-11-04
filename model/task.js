var mongoose = require('mongoose');
var schema = new mongoose.Schema({
    title: {
        type: String,
        required: true
    },
    description: {
        type: String,
        default: ''
    },
    status: {
        type: String,
        default: 'To Do'
    },
    
});
var task = new mongoose.model('Task', schema);
module.exports = task;