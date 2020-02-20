const UserModel = require('./model');
const joiValidate = require('./validation');

module.exports = {
    /**
     * @exports
     * @method findAll
     * @param {}
     * @summary get list of all users
     * @returns Promise<UserModel[]>
     */
    async findAll() {
        return await UserModel.find({});
    },

    async findById(userId) {
        return await UserModel.findById(userId);
    },

    async createUser(userData) {
        const newUser = UserModel(userData);
        const { error, value } = joiValidate(userData);
        if (error) return error;

        return await newUser.save();
    },

    async updateUser(userId, updateData) {
        const { error, value } = joiValidate(updateData);
        if (error) return error;
        return await UserModel.findByIdAndUpdate(
            userId,
            { $set: updateData },
            { new: true },
        );
    },

    async deleteUser(userData) {
        return await UserModel.findOneAndDelete(userData);
    },
};
