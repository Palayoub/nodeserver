var mongoose = require('mongoose');

// Users Schema
var usersSchema = mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    pass: {
        type: String,
        required: true
    },
    pol: {
        type: String,
        default: 'Exciting'
    }
});

const User = module.exports = mongoose.model('users', usersSchema);

module.exports.getUsers = function(callback, limit) {
    User.find(callback).limit(limit);
}
