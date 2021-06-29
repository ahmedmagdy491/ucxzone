'use strict';

const Boom = require('boom');
const _ = require('lodash');
const path = require('path');
const useragent = require('useragent');
useragent(true);

const models = require(path.join(__dirname,'../', 'models/index'));
const errorService = require(path.join(__dirname, '../','services/errorService'));


module.exports = {
  find: async function (request, reply) {
    try {

      const language = request.pre.languageId;
      const foundDirectors = await models.investeeBoardOfDirectors.findAndCountAll({
        where: { investeeId: request.params.investeeId },
        include: [{ association: 'boardOfDirectorTranslation', where: { languageId: language }, required: true }]
      });

      return reply.response(foundDirectors).code(200);
    }
    catch (e) {
      console.log('error', e);

      return errorService.wrapError(e, 'An internal server error occurred');
    }
  },
  findOne: async function (request, reply) {
    try {
      const language = request.pre.languageId;
      const foundDirector = await models.investeeBoardOfDirectors.findOne({
        where: { id: request.params.id },
        include: [{ association: 'boardOfDirectorTranslation', where: { languageId: language }, required: true }]
      });

      return reply.response(foundDirector|| {}).code(200);
    }
    catch (e) {
      console.log('error', e);

      return errorService.wrapError(e, 'An internal server error occurred');
    }
  },
  create: async function (request, reply) {
    let transaction;
    try {

      const { payload } = request;
      const language = request.pre.languageId;
      payload.investeeId = request.params.investeeId;
      payload.createdBy = request.auth.decoded.id;
      const foundInvesteeCompanies = await models.investee.findOne({ where: { id: request.params.investeeId } });

      if(_.isEmpty(foundInvesteeCompanies)) {

        return Boom.notFound('The Investee Company Is Not Found');
      }
      transaction = await models.sequelize.transaction();

      const createdDirector = await models.investeeBoardOfDirectors.create(payload, { transaction });
      request.payload.boardOfDirectorTranslation.languageId = language;
      request.payload.boardOfDirectorTranslation.investeeBoardOfDirectorsId = createdDirector.id;
      const createdBoardOfDirectorTranslation = await models.investeeBoardOfDirectorTranslation.create(request.payload.boardOfDirectorTranslation, { transaction });
      await transaction.commit();

      return reply.response(_.assign(createdDirector.toJSON(), { boardOfDirectorTranslation: createdBoardOfDirectorTranslation.toJSON() })).code(201);
    }
    catch (e) {
      console.log('error', e);

      if(transaction) {
        await transaction.rollback();
      }

      return errorService.wrapError(e, 'An internal server error occurred');
    }
  },
  translate: async function (request, reply) {
    let transaction;

    try {
      const language = request.pre.languageId;
      const foundInvestee = await models.investee.findOne({
        where: { id: request.params.investeeId },
        include: [
          {
            association: 'boardOfDirectors',
            where: { id: request.params.id },
            include: [
              {
                association: 'boardOfDirectorTranslation',
                where: { languageId: language },
                required: false,
              }
            ]
          }
        ]
      });

      if(_.isEmpty(foundInvestee)) {

        return Boom.notFound('The Investee Company Is Not Found, You have to create It First');
      }

      if(_.isEmpty(foundInvestee.boardOfDirectors)) {

        return Boom.notFound('The Investee board Of Director Is Not Found, You have to create It First');
      }

      if(!_.isEmpty(foundInvestee.boardOfDirectors[0].boardOfDirectorTranslation)) {

        return Boom.notFound('The Investee board Of Director Has Been Translated To That Language');
      }

      transaction = await models.sequelize.transaction();

      request.payload.boardOfDirectorTranslation.investeeBoardOfDirectorsId = request.params.id;
      request.payload.boardOfDirectorTranslation.languageId = language;
      const investeeManagementTranslation = await models.investeeBoardOfDirectorTranslation.create(request.payload.boardOfDirectorTranslation, { transaction });

      await transaction.commit();

      return reply.response(investeeManagementTranslation).code(201);
    }
    catch (e) {
      console.log('error', e);

      if(transaction) {
        await transaction.rollback();
      }

      return errorService.wrapError(e, 'An internal server error occurred');
    }
  },
  update: async function (request, reply) {
    let transaction;
    try {

      const { payload } = request;
      const language = request.pre.languageId;
      const directorId = request.params.id;
      const foundDirector = await models.investeeBoardOfDirectors.findOne({
        where: { id: directorId },
        include: [{ association: 'boardOfDirectorTranslation', required: true, where: { languageId: language } }],
      });

      if(_.isEmpty(foundDirector)) {

        return Boom.notFound('investee Board Of Directors You Try To Update Not Exist');
      }

      transaction = await models.sequelize.transaction();

      await models.investeeBoardOfDirectors.update(payload, { where: { id: directorId }, transaction });

      if(!_.isEmpty(request.payload.boardOfDirectorTranslation)) {
        request.payload.boardOfDirectorTranslation.languageId = language;

        await models.investeeBoardOfDirectorTranslation.update(request.payload.boardOfDirectorTranslation,
          { where: { id: foundDirector.boardOfDirectorTranslation.id }, transaction });
      }
      await transaction.commit();

      return reply.response().code(200);
    }
    catch (e) {
      console.log('error', e);

      if(transaction) {
        await transaction.rollback();
      }

      return errorService.wrapError(e, 'An internal server error occurred');
    }
  },
  delete: async function (request, reply) {
    try {

      await models.investeeBoardOfDirectors.destroy({ where: { id: request.params.id } });

      return reply.response().code(204);
    }
    catch (e) {
      console.log('error', e);

      return errorService.wrapError(e, 'An internal server error occurred');
    }
  }
};
