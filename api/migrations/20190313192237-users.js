'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => queryInterface.createTable('users', {
    id: {
      type: Sequelize.INTEGER(10).UNSIGNED,
      primaryKey: true,
      autoIncrement: true,
      allowNull: false
    },
    name: {
      type: Sequelize.STRING(255),
      allowNull: true,
    },
    email: {
      type: Sequelize.STRING(255),
      allowNull: true,
      unique: true
    },
    emailVerifiedAt: {
      type: Sequelize.DATE,
      allowNull: true
    },
    badgeId: {
      type: Sequelize.INTEGER(11).UNSIGNED,
      allowNull: true
    },
    avatar: {
      type: Sequelize.STRING(255),
      allowNull: true,
      unique: true
    },
    country: {
      type: Sequelize.STRING(255),
      allowNull: true
    },
    phoneNumber: {
      type: Sequelize.STRING(255),
      allowNull: true
    },
    locationInfo: {
      type: Sequelize.JSON,
      allowNull: true,
      default: null
    },
    dob: {
      type: Sequelize.DATEONLY,
      allowNull: true
    },
    gender: {
      type: Sequelize.ENUM('M','F'),
      allowNull: true
    },
    password: {
      type: Sequelize.STRING(255),
      allowNull: true
    },
    active: {
      type: Sequelize.INTEGER(1),
      allowNull: false,
      defaultValue: '0'
    },
    secret: {
      type: Sequelize.STRING(255),
      allowNull: false
    },
    interests: {
      type: Sequelize.JSON,
      allowNull: false,
      defaultValue: []
    },
    activationToken: {
      type: Sequelize.STRING(255),
      allowNull: true
    },
    generalRole: {
      type: Sequelize.INTEGER(11),
      allowNull: true
    },
    twoFactorAuthentication: {
      type: Sequelize.ENUM('0', '1'),
      allowNull: true,
      default: '0'
    },
    twoFactorAuthenticationCode: {
      type: Sequelize.INTEGER(6),
      allowNull: true,
      unique: true
    },
    accessGroup: {
      type: Sequelize.JSON,
      allowNull: true,
      defaultValue: []
    },
    subscription: {
      type: Sequelize.INTEGER(11),
      allowNull: true,
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
      allowNull: true
    }
  },{
    charset: 'utf8',
    collate: 'utf8_general_ci'
  }),

  down: (queryInterface, Sequelize) => queryInterface.dropTable('users')
};
