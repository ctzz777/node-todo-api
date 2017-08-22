const {ObjectID} = require('mongodb');
const {mongoose} = require('./../server/db/mongoose');
const {Todo} = require('./../server/models/todo');
const {User} = require('./../server/models/user');

// var id = '599c30670aaf1ed001b87e03';

// if(!ObjectID.isValid(id)) {
//     console.log('ID not valid');
// }

// Todo.find({
//     _id: id
// }).then((todos) => {
//     console.log('Todos', todos);
// });

// Todo.findOne({
//     _id: id
// }).then((todo) => {
//     console.log('Todo', todo);
// });

// Todo.findById(id).then((todo) => {
//     if(!todo) {
//        return console.log('Id not found');
//     }
//     console.log('Todo by Id', todo);
// }).catch((err) => console.log(err));

User.findById('599bd3697afdfccd0bf51d3f').then((user) => {
    if(!user) {
        return console.log('Unable to find user');
    }
    console.log(JSON.stringify(user, undefined, 2));
}, (err) => {
    console.log(err);
});