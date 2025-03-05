const mongoose = require('mongoose');

const UserSchema = new mongoose.Schema({
    name: String,
    lastName: String,
    sureName: String,
    username: String,
    email: String, 
    password: String,
    photo: String
});

const User = mongoose.model('User', UserSchema);

module.exports = User; // Exporta solo una vez