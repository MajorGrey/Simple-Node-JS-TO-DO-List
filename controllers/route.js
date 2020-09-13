var moment = require('moment');
var mongoose = require('mongoose');
var formParser = require('body-parser');
var formParse = formParser.urlencoded({ extended: false });

mongoose.connect('mongodb+srv://major_grey:uniquejimmy@cluster0.jhis7.mongodb.net/test?retryWrites=true&w=majority', {
    useNewUrlParser: true
});

var schema = new mongoose.Schema({
    title: String,
    item: String,
    date: String

});
var Todo = mongoose.model('Todo', schema);

module.exports = (route) => {
    route.get('/', (req, res) => {
        Todo.find({}, (err, data) => {
            if (err) throw err;
            res.render('index', { data: data, moment: moment });
        })
    });
    route.post('/', formParse, (req, res) => {
        console.log(req.body);

        var newTodo = Todo(req.body).save((err, data) => {
            if (err) throw err;
            res.json(data);
        });
        // res.render('index', { data: data, moment: moment });
    });
    route.delete('/del/:item', (req, res) => {
        Todo.find({
            title: req.params.item
        }).remove((err, data) => {
            if (err) throw err;
            res.json(data)
        });
    });
}