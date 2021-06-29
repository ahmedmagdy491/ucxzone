'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable('companiesBasicDataTranslation', {
      id: {
        type: Sequelize.INTEGER(10).UNSIGNED,
        allowNull: false,
        primaryKey: true,
        autoIncrement: true
      },
      companyBasicDataId: {
        type: Sequelize.INTEGER(11).UNSIGNED,
        allowNull: false
      },
      languageId: {
        type: Sequelize.INTEGER(11).UNSIGNED,
        allowNull: false
      },
      name: {
        type: Sequelize.STRING(100),
        allowNull: false
      },
      registrationIdNo: {
        type: Sequelize.STRING(45),
        allowNull: true
      },
      registrationOffice: {
        type: Sequelize.STRING(100),
        allowNull: true
      },
      companyPurpose: {
        type: Sequelize.TEXT,
        allowNull: false
      },
      productsOrServices: {
        type: Sequelize.TEXT,
        allowNull: true
      },
      address: {
        type: Sequelize.JSON,
        allowNull: false
      },
      otherAddresses: {
        type: Sequelize.JSON,
        allowNull: true,
        default: '[]'
      },
      YearOfEstablishment: {
        type: Sequelize.STRING(45),
        allowNull: true
      },
      createdAt: {
        type: Sequelize.DATE,
        allowNull: false,
        defaultValue: Sequelize.NOW
      },
      updatedAt: {
        type: Sequelize.DATE,
        allowNull: true
      },
      deletedAt: {
        type: Sequelize.DATE,
        allowNull: true,
      }
    },
    {
      charset: 'utf8',
      collate: 'utf8_general_ci'
    });

    return queryInterface.addConstraint('companiesBasicDataTranslation', ['companyBasicDataId', 'languageId', 'registrationIdNo'], {
      type: 'unique',
      name: 'registrationIdNo'
    });
  },


  down: (queryInterface, Sequelize) => queryInterface.dropTable('companiesBasicDataTranslation')
};
