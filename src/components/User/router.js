const { Router } = require('express');
const UserComponent = require('../User');

/**
 * Express router to mount user related functions on.
 * @type {Express.Router}
 * @const
 */
const router = Router();

/**
 * Route serving list of users.
 * @name /v1/users
 * @function
 * @inner
 * @param {string} path - Express path
 * @param {callback} middleware - Express middleware.
 */
router.get('/', UserComponent.findAll);

/**
 * Route serving оne user for the data provided.
 * @name /v1/users/find
 * @function
 * @inner
 * @param {string} path - Express path
 * @param {callback} middleware - Express middleware.
 */
router.get('/find', UserComponent.findOne);

/**
 * Route serving creating new user.
 * @name /v1/users/create
 * @function
 * @inner
 * @param {string} path - Express path
 * @param {callback} middleware - Express middleware.
 */
router.post('/create', UserComponent.createUser);

/**
 * Route serving updating user for the Id provided.
 * @name /v1/users/update/:userId
 * @function
 * @inner
 * @param {string} path - Express path
 * @param {callback} middleware - Express middleware.
 */
router.put('/update/:userId', UserComponent.updateUser);

/**
 * Route serving deleting user for the the data provided.
 * @name /v1/users/update
 * @function
 * @inner
 * @param {string} path - Express path
 * @param {callback} middleware - Express middleware.
 */
router.delete('/delete', UserComponent.deleteUser);

module.exports = router;
