const UserModel = require('./model');
const joiValidate = require('./validation');

/**
 * @function findAll
 * @param {}
 * @summary get list of all users
 * @returns Promise<UserModel[]>
 */
async function findAll() {
    return await UserModel.find({});
}

/**
 * @function findOne
 * @param {user.Data} data search user
 * @summary get object of found user
 * @returns Promise<UserModel{}>
 */
async function findOne(userData) {
    return await UserModel.findOne(userData);
}

/**
 * @function createUser
 * @param {user.Data} data created user
 * @summary get new user`s object
 * @returns Promise<UserModel{}>
 */
async function createUser(userData) {
    const newUser = UserModel(userData);
    const { error, value } = joiValidate(userData);
    if (error) return error;

    return await newUser.save();
}

/**
 * @function updateUser
 * @param {user.Id} id updated user
 * @param {user.Data} data that to be update
 * @summary get update user`s object
 * @returns Promise<UserModel{}>
 */
async function updateUser(userId, updateData) {
    const { error, value } = joiValidate(updateData);
    if (error) return error;
    return await UserModel.findByIdAndUpdate(
        userId,
        { $set: updateData },
        { new: true },
    );
}

/**
 * @function deleteUser
 * @param {user.Data} data for a found user in DB
 * @summary get user`s object, that was delete
 * @returns Promise<UserModel{}>
 */
async function deleteUser(userData) {
    return await UserModel.findOneAndDelete(userData);
}

module.exports = {
    findAll,
    findOne,
    createUser,
    updateUser,
    deleteUser,
};
