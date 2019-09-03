/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('obras', {
    cod: {
      type: DataTypes.CHAR,
      allowNull: false,
      primaryKey: true
    },
    nombre: {
      type: DataTypes.STRING,
      allowNull: true
    },
    tematica: {
      type: DataTypes.STRING,
      allowNull: true
    },
    precio: {
      type: DataTypes.DOUBLE,
      allowNull: true
    },
    artista: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    alto: {
      type: DataTypes.DOUBLE,
      allowNull: true
    },
    ancho: {
      type: DataTypes.DOUBLE,
      allowNull: true
    },
    tipo_fiesta: {
      type: DataTypes.ENUM("escultura","pintura"),
      allowNull: true
    }
  }, {
    tableName: 'obras'
  });
};
