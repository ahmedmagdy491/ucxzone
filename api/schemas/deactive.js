const Joi = require('joi');

module.exports = { params: { id: Joi.number().required().description('the id of user') } };
