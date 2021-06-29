const moment = require('moment');
const BaseJoi = require('joi');
const Extension = require('joi-date-extensions');
const Joi = BaseJoi.extend(Extension);

module.exports = {
  createSchema: {
    params: {
      userId: Joi.number().required().description('the id of the user'),
      investeeId: Joi.number().required().description('the id of the company')
    },
    payload: {
      investmentTypeId: Joi.number().required().label('investment Type'),
      file: Joi.any(),
      currencyId: Joi.number().positive().required().label('currency'),
      investmentProposalTranslation: {
        title: Joi.string().required().label('title'),
        description: Joi.string().required().label('value Of The Investment Required'),
        minInvestment: Joi.number().positive().required().label('value Of The Investment Required'),
        currentValueOfCompany: Joi.number().positive().required().label('value Of The Investment Required'),
        valueOfTheInvestmentRequired: Joi.number().positive().required().label('value Of The Investment Required'),
        PurposeOfTheRequiredInvestment: Joi.string().required().label('Purpose Of The Required Investment'),
        validTill: Joi.date().min(moment().format('YYYY-MM-DDTHH:mm:ss[Z]')).required().label('valid Till'),
      }
    }
  },
  translateSchema: {
    payload: {
      file: Joi.any(),
      investmentProposalTranslation: {
        title: Joi.string().required().label('title'),
        description: Joi.string().required().label('value Of The Investment Required'),
        minInvestment: Joi.number().positive().required().label('value Of The Investment Required'),
        currentValueOfCompany: Joi.number().positive().required().label('value Of The Investment Required'),
        valueOfTheInvestmentRequired: Joi.number().positive().required().label('value Of The Investment Required'),
        PurposeOfTheRequiredInvestment: Joi.string().required().label('Purpose Of The Required Investment'),
        validTill: Joi.date().min(moment().format('YYYY-MM-DDTHH:mm:ss[Z]')).required().label('valid Till'),
      }
    }
  },
  updateSchema: {
    params: {
      userId: Joi.number().required().description('the id of the user'),
      investeeId: Joi.number().required().description('the id of the company'),
      id: Joi.number().required().description('the id of the company')
    },
    payload: {
      investmentTypeId: Joi.number().label('investment Type'),
      file: Joi.any(),
      currencyId: Joi.number().positive().required().label('currency'),
      investmentProposalTranslation: {
        id: Joi.number().required(),
        title: Joi.string().required().label('title'),
        description: Joi.string().required().label('value Of The Investment Required'),
        minInvestment: Joi.number().positive().required().label('value Of The Investment Required'),
        currentValueOfCompany: Joi.number().positive().required().label('value Of The Investment Required'),
        valueOfTheInvestmentRequired: Joi.string().label('value Of The Investment Required'),
        PurposeOfTheRequiredInvestment: Joi.number().positive().label('Purpose Of The Required Investment'),
        validTill: Joi.date().min(moment().format('YYYY-MM-DDTHH:mm:ss[Z]')).label('valid Till'),
      }
    }
  }
};
