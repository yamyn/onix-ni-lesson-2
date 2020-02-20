const { Schema } = require('mongoose');
const connections = require('../../config/connection');

const UserSchema = new Schema(
    {
        email: String,
        fullName: String,
        birthYear: Number,
    },
    {
        collection: 'usermodel',
        versionKey: false,
    },
);

module.exports = connections.model('UserModel', UserSchema);
