/* jshint indent: 2 */

module.exports = function (sequelize, DataTypes) {
  return sequelize.define('investeeAttachments', {
    id: {
      type: DataTypes.INTEGER(10).UNSIGNED,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true,
    },
    companyId: {
      type: DataTypes.INTEGER(11),
      allowNull: false
    },
    attachmentPath: {
      type: DataTypes.STRING(100),
      allowNull: false
    },
    attachmentTypeId: {
      type: DataTypes.INTEGER(11),
      allowNull: false
    },
    createdBy: {
      type: DataTypes.INTEGER(11),
      allowNull: false
    },
    createdAt: {
      type: DataTypes.DATE,
      allowNull: false,
      defaultValue: sequelize.NOW
    },
    updatedAt: {
      type: DataTypes.DATE,
      allowNull: true
    }
  }, { tableName: 'investeeAttachments' });
};
