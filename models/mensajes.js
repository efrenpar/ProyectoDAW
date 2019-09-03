/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('mensajes', {
    id_mensaje: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    contenido: {
      type: DataTypes.STRING,
      allowNull: true
    },
    id_cliente: {
      type: DataTypes.INTEGER,
      allowNull: true,
      references: {
        model: 'cliente',
        key: 'id'
      }
    }
  }, {
    tableName: 'mensajes'
  });
};
