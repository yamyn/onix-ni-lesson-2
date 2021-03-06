const UserService = require('./service');

/**
 * @function
 * @param {express.Request} req
 * @param {express.Response} res
 * @param {express.NextFunction} next
 * @returns {Promise < void >}
 */
async function findAll(req, res, next) {
    try {
        const users = await UserService.findAll();

        res.status(200).json(users);
    } catch (error) {
        next(error);
    }
}

/**
 * @function
 * @param {express.Request} req
 * @param {express.Response} res
 * @param {express.NextFunction} next
 * @returns {Promise < void >}
 */
async function findOne(req, res, next) {
    try {
        const userData = req.body;
        const user = await UserService.findOne(userData);

        res.status(200).json(user);
    } catch (error) {
        next(error);
    }
}

/**
 * @function
 * @param {express.Request} req
 * @param {express.Response} res
 * @param {express.NextFunction} next
 * @returns {Promise < void >}
 */
async function createUser(req, res, next) {
    try {
        const userData = req.body;
        const newUser = await UserService.createUser(userData);

        if (newUser.message) res.status(400).json(newUser.message);

        res.status(201).json(newUser);
    } catch (error) {
        next(error);
    }
}

/**
 * @function
 * @param {express.Request} req
 * @param {express.Response} res
 * @param {express.NextFunction} next
 * @returns {Promise < void >}
 */
async function updateUser(req, res, next) {
    try {
        const userId = req.params.userId;
        const updateData = req.body;
        const updateUser = await UserService.updateUser(userId, updateData);

        if (updateUser.message) res.status(400).json(updateUser.message);

        res.status(200).json(updateUser);
    } catch (error) {
        next(error);
    }
}

/**
 * @function
 * @param {express.Request} req
 * @param {express.Response} res
 * @param {express.NextFunction} next
 * @returns {Promise < void >}
 */
async function deleteUser(req, res, next) {
    try {
        const userData = req.body;
        const user = await UserService.deleteUser(userData);

        res.status(200).json(`User with id = ${user.id} was removed`);
    } catch (error) {
        next(error);
    }
}

module.exports = {
    findAll,
    findOne,
    createUser,
    updateUser,
    deleteUser,
};
