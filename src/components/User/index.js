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

async function createUser(req, res, next) {
    try {
        const userData = req.body;
        console.log('UserData:', userData);
        const newUser = await UserService.createUser(userData);

        res.status(201).json(newUser);
    } catch (error) {
        next(error);
    }
}

module.exports = {
    findAll,
    createUser,
};
