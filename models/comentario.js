/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('comentario', {
    id_comentario: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    contenido: {
      type: DataTypes.STRING,
      allowNull: true
    },
    fecha: {
      type: DataTypes.DATEONLY,
      allowNull: true
    },
    id_cliente: {
      type: DataTypes.INTEGER,
      allowNull: true,
      references: {
        model: 'cliente',
        key: 'id'
      }
    },
    id_obras: {
      type: DataTypes.CHAR,
      allowNull: true,
      references: {
        model: 'obra',
        key: 'cod'
      }
    }
  }, {
    tableName: 'comentario'
  });
};
