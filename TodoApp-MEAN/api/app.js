var express = require('express');
var mongoose = require('mongoose');
var cors = require('cors');
var multer = require('multer');
const Todo = require('./models/Todo');

var app = express();
app.use(cors());

var dbName = 'TodoApp'
var database;

var connectionString = 'mongodb+srv://root:root@atlascluster.fhwcw7q.mongodb.net/TodoApp?retryWrites=true&w=majority&appName=AtlasCluster';
mongoose.connect(connectionString).then((result) => {
    console.log('CONNECTED TO DB.');
    //console.log(result);
    app.listen(3000);
}).catch((err) => {
    console.log('ERROR OCCURRED');
    console.log(err);
})

app.get(('/api/get-notes'), (req, res) => {
    Todo.find().then((result) => {
        res.send(result);
    }).catch((err) => {
        console.log(err);
    })
})

app.get('/api/add-note', async (req, res) => {
    var id;
    await Todo.find().then((result) => {
        id = result.length + 1;
    });
    const todo = new Todo({
        id: id,
        description: 'Test desc: ' + id 
    })

     todo.save().then((result) => {
        res.send(result);
     }).catch((err) => {
        console.log(err);
     })
})
