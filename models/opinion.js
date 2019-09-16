module.exports = function(sequelize, DataTypes) {
    return sequelize.define('opinion', {
      id: {
        type: DataTypes.INTEGER,
        allowNull: true,
        primaryKey: true
      },
      contenido: {
        type: DataTypes.STRING,
        allowNull: true
      },
      cliente: {
        type: DataTypes.STRING,
        allowNull: true,
        references: {
          model: 'usuario',
          key: 'nickname'
        }
      },
      artista:{
        type: DataTypes.INTEGER,
        allowNull: true,
        references: {
            model: 'artista',
            key: 'id'
          }
      }
    }, {timestamps: false},{
      tableName: 'opinion'
    });
  };
  