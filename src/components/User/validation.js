const Joi = require('@hapi/joi');

const validSchema = Joi.object({
    fullName: Joi.string()
        .min(3)
        .max(30),

    birthYear: Joi.number()
        .integer()
        .min(1900)
        .max(2013),

    email: Joi.string().email({
        minDomainSegments: 2,
        tlds: { allow: ['com', 'net'] },
    }),
});
function joiValidation(obj) {
    return validSchema.validate(obj);
}

module.exports = joiValidation;
