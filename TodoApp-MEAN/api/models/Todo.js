const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const todoSchema = new Schema({
    id : {
        type : String,
        required : false
    },
    description : {
        type : String,
        required : true
    }
}, {timestamps : true});

const Todo = mongoose.model('Todo', todoSchema);
module.exports = Todo;