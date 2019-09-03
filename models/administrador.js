/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('administrador', {
    id_admin: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    registrodeactividad: {
      type: DataTypes.STRING,
      allowNull: true
    },
    ad_nickname: {
      type: DataTypes.STRING,
      allowNull: true,
      references: {
        model: 'usuario',
        key: 'nickname'
      }
    }
  }, {
    tableName: 'administrador'
  });
};
