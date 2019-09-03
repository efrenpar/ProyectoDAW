/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('evento', {
    id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    titulo: {
      type: DataTypes.STRING,
      allowNull: true
    },
    fecha: {
      type: DataTypes.DATEONLY,
      allowNull: true
    },
    descripcion: {
      type: DataTypes.STRING,
      allowNull: true
    },
    localidad: {
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
    tableName: 'evento'
  });
};
