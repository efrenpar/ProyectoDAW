/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('artista', {
    id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    nombre: {
      type: DataTypes.STRING,
      allowNull: true
    },
    apellido: {
      type: DataTypes.STRING,
      allowNull: true
    },
    nacionalidad: {
      type: DataTypes.STRING,
      allowNull: true
    },
    fechadenacimiento: {
      type: DataTypes.DATEONLY,
      allowNull: true
    },
    movimiento: {
      type: DataTypes.STRING,
      allowNull: true
    },
    campo: {
      type: DataTypes.STRING,
      allowNull: true
    },
    id_admin: {
      type: DataTypes.INTEGER,
      allowNull: true,
      references: {
        model: 'administrador',
        key: 'id_admin'
      }
    }
  }, {
    tableName: 'artista'
  });
};
