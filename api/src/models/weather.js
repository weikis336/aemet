module.exports = function (sequelize, DataTypes) {
  const Weather = sequelize.define('Weather',
    {
      id: {
        type: DataTypes.INTEGER,
        autoIncrement: true,
        primaryKey: true,
        allowNull: false
      },
      fecha: {
        type: DataTypes.DATE
      },
      indicativo: {
        type: DataTypes.STRING
      },
      nombre: {
        type: DataTypes.STRING
      },
      provincia: {
        type: DataTypes.STRING
      },
      altitud: {
        type: DataTypes.FLOAT
      },
      tmed: {
        type: DataTypes.FLOAT
      },
      prec: {
        type: DataTypes.STRING
      },
      tmin: {
        type: DataTypes.FLOAT
      },
      tmax: {
        type: DataTypes.FLOAT
      },
      dir: {
        type: DataTypes.STRING
      },
      velmedia: {
        type: DataTypes.FLOAT
      },
      racha: {
        type: DataTypes.FLOAT
      },
      sol: {
        type: DataTypes.FLOAT
      },
      presMax: {
        type: DataTypes.FLOAT
      },
      presMin: {
        type: DataTypes.FLOAT
      },
      hrMedia: {
        type: DataTypes.FLOAT
      },
      hrMax: {
        type: DataTypes.FLOAT
      },
      hrMin: {
        type: DataTypes.FLOAT
      },
      createdAt: {
        type: DataTypes.DATE,
        allowNull: false
      },
      updatedAt: {
        type: DataTypes.DATE,
        allowNull: false
      },
      deletedAt: {
        type: DataTypes.DATE
      }
    },
    {
      DataTypes,
      tableName: 'weather',
      timestamps: true,
      paranoid: true,
      indexes: [
        {
          name: 'PRIMARY',
          unique: true,
          using: 'BTREE',
          fields: [
            { name: 'id' }
          ]
        }
      ]
    }
  )

  return Weather
}
