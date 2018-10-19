var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var usersSchema = new Schema({

    mail: String,
    password: String,
    date: {
        type: Date,
        default: Date.now
    },
});

var users = mongoose.model('users', usersSchema);

module.exports = users;