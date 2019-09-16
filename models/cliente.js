/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('cliente', {
    id: {
      type: DataTypes.INTEGER,
      allowNull: true,
      primaryKey: true
    },
    ciudad: {
      type: DataTypes.STRING,
      allowNull: true
    },
    pais: {
      type: DataTypes.STRING,
      allowNull: true
    },
    cl_nickname: {
      type: DataTypes.STRING,
      allowNull: true,
      references: {
        model: 'usuario',
        key: 'nickname'
      }
    },
    descripcion:{
      type: DataTypes.STRING,
      allosNull: true,
    }
  }, {timestamps: false},{
    tableName: 'cliente'
  });
};
