'use strict';

const BaseJoi = require('joi');
const Extension = require('joi-date-extensions');
const Joi = BaseJoi.extend(Extension);

module.exports = {
  payload: {
    name: Joi.string().min(3, 'utf8').required().label('user name').example('test user'),
    phoneNumber: Joi.string().required().label('phone number').example(22765927),
    country: Joi.string(),
    email: Joi.string().email().required().example('test@abc.com'),
    password: Joi.string().example('123456'),
    confirmationPassword: Joi.string().valid(Joi.ref('password')).options({ language: { any: { allowOnly: '!!Passwords do not match', } } }).example('123456'),
    interests: Joi.array().items(
      Joi.string().valid(['Investor','Company Looking For Investors', 'Advisory firm', 'Selling shareholder'])
    ).min(1).unique().required(),
    companyName: Joi.string().allow(null, '').label('company name'),
    position_in_company: Joi.string().allow(null, '').label('position in company'),
    website_of_company: Joi.string().allow(null, '').label('website of company'),
    media_source: Joi.string().optional()
  }
};
