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
        type: DataTypes.DATE,
        allowNull: false
      },
      indicativo: {
        type: DataTypes.STRING,
        allowNull: false
      },
      nombre: {
        type: DataTypes.STRING,
        allowNull: false
      },
      provincia: {
        type: DataTypes.STRING,
        allowNull: false
      },
      altitud: {
        type: DataTypes.FLOAT,
        allowNull: false
      },
      tmed: {
        type: DataTypes.FLOAT,
        allowNull: false
      },
      prec: {
        type: DataTypes.FLOAT,
        allowNull: false
      },
      tmin: {
        type: DataTypes.FLOAT,
        allowNull: false
      },
      horatmin: {
        type: DataTypes.STRING,
        allowNull: false
      },
      tmax: {
        type: DataTypes.FLOAT,
        allowNull: false
      },
      horatmax: {
        type: DataTypes.STRING,
        allowNull: false
      },
      dir: {
        type: DataTypes.STRING,
        allowNull: false
      },
      velmedia: {
        type: DataTypes.FLOAT,
        allowNull: false
      },
      racha: {
        type: DataTypes.FLOAT,
        allowNull: false
      },
      horaracha: {
        type: DataTypes.STRING,
        allowNull: false
      },
      sol: {
        type: DataTypes.FLOAT,
        allowNull: false
      },
      presMax: {
        type: DataTypes.FLOAT,
        allowNull: false
      },
      horaPresMax: {
        type: DataTypes.STRING,
        allowNull: false
      },
      presMin: {
        type: DataTypes.FLOAT,
        allowNull: false
      },
      horaPresMin: {
        type: DataTypes.STRING,
        allowNull: false
      },
      hrMedia: {
        type: DataTypes.FLOAT,
        allowNull: false
      },
      hrMax: {
        type: DataTypes.FLOAT,
        allowNull: false
      },
      horaHrMax: {
        type: DataTypes.STRING,
        allowNull: false
      },
      hrMin: {
        type: DataTypes.FLOAT,
        allowNull: false
      },
      horaHrMin: {
        type: DataTypes.STRING,
        allowNull: false
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
