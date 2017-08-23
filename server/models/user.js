var mongoose = require('mongoose');
var validator = require('validator');

// {
//     email: 'test@mail.com',
//     password: 'test',
//     tokens: [{
//         access: 'auth',
//         token: 'adfasdfasffgasdf'
//     }]
// }

var User = mongoose.model('User', {
    email: {
        type: String,
        required: true,
        trim: true,
        minlength: 1,
        unique: true,
        validate: {
            validator: validator.isEmail,
            message: '{VALUE} is not a valid email'
        }
    },
    password: {
        type: String,
        required: true,
        minlength: 6,
    },
    tokens: [{
        access: {
            type: String,
            required: true
        },
        token: {
            type: String,
            required: true
        }
    }]
});

module.exports = {User};