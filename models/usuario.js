/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('usuario', {
    nickname: {
      type: DataTypes.STRING,
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
    rol_usuario: {
      type: DataTypes.ENUM("administrador","cliente"),
      allowNull: true
    },
    correo: {
      type: DataTypes.STRING,
      allowNull: true
    },
    password: {
      type: DataTypes.STRING,
      allowNull: true
    }
  }, {
    tableName: 'usuario',
    timestamps: false
  });
};