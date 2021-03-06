'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    const now = new Date();

    return queryInterface.sequelize.transaction(async (t) => Promise.all([
      queryInterface.bulkInsert('sectors', [
        {
          'id': 1,
          createdAt: now,
          updatedAt: now,
        },
        {
          'id': 2,
          createdAt: now,
          updatedAt: now,
        },
        {
          'id': 3,
          createdAt: now,
          updatedAt: now,
        },
        {
          'id': 4,
          createdAt: now,
          updatedAt: now,
        },
        {
          'id': 5,
          createdAt: now,
          updatedAt: now,
        },
        {
          'id': 6,
          createdAt: now,
          updatedAt: now,
        },
        {
          'id': 7,
          createdAt: now,
          updatedAt: now,
        },
        {
          'id': 8,
          createdAt: now,
          updatedAt: now,
        },
        {
          'id': 9,
          createdAt: now,
          updatedAt: now,
        },
        {
          'id': 10,
          createdAt: now,
          updatedAt: now,
        },
        {
          'id': 11,
          createdAt: now,
          updatedAt: now,
        },
        {
          'id': 12,
          createdAt: now,
          updatedAt: now,
        },
        {
          'id': 13,
          createdAt: now,
          updatedAt: now,
        },
        {
          'id': 14,
          createdAt: now,
          updatedAt: now,
        },
        {
          'id': 15,
          createdAt: now,
          updatedAt: now,
        },
        {
          'id': 16,
          createdAt: now,
          updatedAt: now,
        },
        {
          'id': 17,
          createdAt: now,
          updatedAt: now,
        },
        {
          'id': 18,
          createdAt: now,
          updatedAt: now,
        },
        {
          'id': 19,
          createdAt: now,
          updatedAt: now,
        },
        {
          'id': 20,
          createdAt: now,
          updatedAt: now,
        },
        {
          'id': 21,
          createdAt: now,
          updatedAt: now,
        },
        {
          'id': 22,
          createdAt: now,
          updatedAt: now,
        },{
          'id': 23,
          createdAt: now,
          updatedAt: now,
        },{
          'id': 24,
          createdAt: now,
          updatedAt: now,
        },{
          'id': 25,
          createdAt: now,
          updatedAt: now,
        },
      ], { transaction: t }),
      queryInterface.bulkInsert('sectorsTranslation', [
        {
          'id': 1,
          'sectorId': 1,
          'languageId': 1,
          'name': 'Agriculture and Fishing',
          createdAt: now,
          updatedAt: now,
        },
        {
          'id': 2,
          'sectorId': 2,
          'languageId': 1,
          'name': 'Basic Metal Industries',
          createdAt: now,
          updatedAt: now,
        },
        {
          'id': 3,
          'sectorId': 3,
          'languageId': 1,
          'name': 'Construction and Real estate',
          createdAt: now,
          updatedAt: now,
        },
        {
          'id': 4,
          'sectorId': 4,
          'languageId': 1,
          'name': 'Education',
          createdAt: now,
          updatedAt: now,
        },
        {
          'id': 5,
          'sectorId': 5,
          'languageId': 1,
          'name': 'Food and Beverages Industries',
          createdAt: now,
          updatedAt: now,
        },
        {
          'id': 6,
          'sectorId': 6,
          'languageId': 1,
          'name': 'Financial Services',
          createdAt: now,
          updatedAt: now,
        },
        {
          'id': 7,
          'sectorId': 7,
          'languageId': 1,
          'name': 'Healthcare services',
          createdAt: now,
          updatedAt: now,
        },{
          'id': 8,
          'sectorId': 8,
          'languageId': 1,
          'name': 'Information and Communication Technology',
          createdAt: now,
          updatedAt: now,
        },
        {
          'id': 9,
          'sectorId': 9,
          'languageId': 1,
          'name': 'Manufacture of Wood, Wood Products and Furniture',
          createdAt: now,
          updatedAt: now,
        },
        {
          'id': 10,
          'sectorId': 10,
          'languageId': 1,
          'name': 'Manufacture of chemicals and petrochemicals',
          createdAt: now,
          updatedAt: now,
        },
        {
          'id': 11,
          'sectorId': 11,
          'languageId': 1,
          'name': 'Manufacture of rubber and plastics products',
          createdAt: now,
          updatedAt: now,
        },
        {
          'id': 12,
          'sectorId': 12,
          'languageId': 1,
          'name': 'Manufacture of Paper and Paper Products',
          createdAt: now,
          updatedAt: now,
        },
        {
          'id': 13,
          'sectorId': 13,
          'languageId': 1,
          'name': 'Manufacture of machinery and equipment',
          createdAt: now,
          updatedAt: now,
        },
        {
          'id': 14,
          'sectorId': 14,
          'languageId': 1,
          'name': 'Manufacture of motor vehicles',
          createdAt: now,
          updatedAt: now,
        },
        {
          'id': 15,
          'sectorId': 15,
          'languageId': 1,
          'name': 'Manufacture of electrical machinery',
          createdAt: now,
          updatedAt: now,
        },
        {
          'id': 16,
          'sectorId': 16,
          'languageId': 1,
          'name': 'Mining , Oil and Gas',
          createdAt: now,
          updatedAt: now,
        },
        {
          'id': 17,
          'sectorId': 17,
          'languageId': 1,
          'name': 'pharmaceutical industries',
          createdAt: now,
          updatedAt: now,
        },
        {
          'id': 18,
          'sectorId': 18,
          'languageId': 1,
          'name': 'Publishing and printing',
          createdAt: now,
          updatedAt: now,
        },{
          'id': 19,
          'sectorId': 19,
          'languageId': 1,
          'name': 'Recycling',
          createdAt: now,
          updatedAt: now,
        },{
          'id': 20,
          'sectorId': 20,
          'languageId': 1,
          'name': 'Renewable Energy',
          createdAt: now,
          updatedAt: now,
        },{
          'id': 21,
          'sectorId': 21,
          'languageId': 1,
          'name': 'Tourism, Hotels and restaurants',
          createdAt: now,
          updatedAt: now,
        },{
          'id': 22,
          'sectorId': 22,
          'languageId': 1,
          'name': 'Transportation',
          createdAt: now,
          updatedAt: now,
        },{
          'id': 23,
          'sectorId': 23,
          'languageId': 1,
          'name': 'Textile, Wearing Apparel and Leather Industries',
          createdAt: now,
          updatedAt: now,
        },{
          'id': 24,
          'sectorId': 24,
          'languageId': 1,
          'name': 'Utilities',
          createdAt: now,
          updatedAt: now,
        },{
          'id': 25,
          'sectorId': 25,
          'languageId': 1,
          'name': 'Wholesale and retail trade',
          createdAt: now,
          updatedAt: now,
        },
      ], { transaction: t }),
    ]));

  },

  down: async (queryInterface, Sequelize) => queryInterface.sequelize.transaction((t) => Promise.all([
    queryInterface.bulkDelete('sectorsTranslation', null, { transaction: t }),
    queryInterface.bulkDelete('sectors', null, { transaction: t }),
  ]))
};
