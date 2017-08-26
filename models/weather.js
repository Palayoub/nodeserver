var mongoose = require('mongoose');

// Users Schema
var usersSchema = mongoose.Schema({
    name: {
        type: String,
        required: true
    },
});

const Weather = module.exports = mongoose.model('favoris', usersSchema);

module.exports.getWeather = function(callback, limit) {
    Weather.find(callback).limit(limit);
}
