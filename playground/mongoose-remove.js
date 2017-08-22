const {ObjectID} = require('mongodb');
const {mongoose} = require('./../server/db/mongoose');
const {Todo} = require('./../server/models/todo');
const {User} = require('./../server/models/user');

// Todo.remove({}).then((result) => {
//     console.log(result);
// });

// Todo.findByIdAndRemove('599c57687c58f9db6054d2c0').then((todo) => {
//     console.log(todo);
// });


Todo.findOneAndRemove({
    _id: ''
}).then((todo) => {
    
});