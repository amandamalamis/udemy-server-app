const mongoose = require('mongoose');

//OBJECT Schema equal to mongoose
const { Schema } = mongoose;

const UserSchema = new Schema ({
    googleId: String
});

mongoose.model('users', userSchema);