/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('obra', {
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
      allowNull: true,
      references: {
        model: 'artista',
        key: 'id'
      }
    },
    alto: {
      type: DataTypes.DOUBLE,
      allowNull: true
    },
    ancho: {
      type: DataTypes.DOUBLE,
      allowNull: true
    },
    tipo: {
      type: DataTypes.ENUM("escultura","pintura"),
      allowNull: true
    }
  }, {
    tableName: 'obra'
  });
};
