/* jshint indent: 2 */

const _ = require('lodash');
module.exports = function (sequelize, DataTypes) {
  const companiesBasicData = sequelize.define('companiesBasicData', {
    id: {
      type: DataTypes.INTEGER(10).UNSIGNED,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true,
    },
    isConfidential: {
      type: DataTypes.BOOLEAN,
      allowNull: false,
      defaultValue: false
    },
    sector: {
      type: DataTypes.INTEGER(10).UNSIGNED,
      allowNull: true
    },
    subSector: {
      type: DataTypes.INTEGER(10).UNSIGNED,
      allowNull: true
    },
    legalForm: {
      type: DataTypes.INTEGER(10).UNSIGNED,
      allowNull: true
    },
    verifiedAt: {
      type: DataTypes.DATE,
      allowNull: true
    },
    createdAt: {
      type: DataTypes.DATE,
      allowNull: false,
      defaultValue: sequelize.NOW
    },
    updatedAt: {
      type: DataTypes.DATE,
      allowNull: true
    },
    deletedAt: {
      type: DataTypes.DATE,
      allowNull: true,
    }
  }, { tableName: 'companiesBasicData', paranoid: true });

  companiesBasicData.addHook('afterFind', (companyData, options) => {
    if(companyData.isConfidential) {
      companyData.name = 'confidential';
    }
  });

  companiesBasicData.addHook('afterFind', (companyData, options) => {
    if(_.get(companyData,'isConfidential')) {
      companyData.name = 'confidential';
    }
  });

  companiesBasicData.associate = function (models) {
    companiesBasicData.hasOne(models.companiesBasicDataTranslation, { as: 'companiesBasicDataTranslation', foreignKey: 'companyBasicDataId' });
    companiesBasicData.hasOne(models.investee, { as: 'investeeCompany', foreignKey: 'companyId' });
    companiesBasicData.hasMany(models.investor, { as: 'investors', foreignKey: 'companyId' });
  };

  return companiesBasicData;
};
