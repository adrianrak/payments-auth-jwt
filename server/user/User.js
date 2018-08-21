var mongoose = require('mongoose');
var UserSchema = new mongoose.Schema({
    name: String,
    email: String,
    password: String,
    postalCode: String,
    cardNumber: String,
    cardExpiryDate: String,
    cardCVV: String,
    createdDate: {
        type: Date,
        default: Date.now
    }
});
mongoose.model('User', UserSchema);

module.exports = mongoose.model('User');
