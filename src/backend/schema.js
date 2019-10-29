const mongoose = require("mongoose");
mongoose.set('useUnifiedTopology', true);

var Schema = mongoose.Schema;
// create schema
var chatSchema  = new Schema({
    "name" : String,
    "message" : String
});

// create model if not exists.
const Chat = mongoose.model('Chat', chatSchema);
module.exports = Chat;