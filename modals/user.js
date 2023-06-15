var mongoose = require('mongoose');

var userSchema = new mongoose.Schema({
    email: {
        type: String,
        required: true,
        unique: true
    },
    Name: {
        type: String,
        default: ''
    },
    phone: Number,
});

var imgSchema = new mongoose.Schema({
    img:{
        type:String
    }
});
var user = new mongoose.model('User', userSchema);
var img = new mongoose.model('img',imgSchema)

module.exports = user;

module.exports = img;