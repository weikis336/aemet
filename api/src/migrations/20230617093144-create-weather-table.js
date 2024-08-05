'use strict'

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable('weather', {
      id: {
        type: Sequelize.INTEGER,
        primaryKey: true,
        autoIncrement: true,
        allowNull: false
      },
      fecha: {
        type: Sequelize.DATE,
        allowNull: false
      },
      indicativo: {
        type: Sequelize.STRING,
        allowNull: false
      },
      nombre: {
        type: Sequelize.STRING,
        allowNull: false
      },
      provincia: {
        type: Sequelize.STRING,
        allowNull: false
      },
      altitud: {
        type: Sequelize.FLOAT,
        allowNull: false
      },
      tmed: {
        type: Sequelize.FLOAT,
        allowNull: false
      },
      prec: {
        type: Sequelize.FLOAT,
        allowNull: false
      },
      tmin: {
        type: Sequelize.FLOAT,
        allowNull: false
      },
      horatmin: {
        type: Sequelize.STRING,
        allowNull: false
      },
      tmax: {
        type: Sequelize.FLOAT,
        allowNull: false
      },
      horatmax: {
        type: Sequelize.STRING,
        allowNull: false
      },
      dir: {
        type: Sequelize.STRING,
        allowNull: false
      },
      velmedia: {
        type: Sequelize.FLOAT,
        allowNull: false
      },
      racha: {
        type: Sequelize.FLOAT,
        allowNull: false
      },
      horaracha: {
        type: Sequelize.STRING,
        allowNull: false
      },
      sol: {
        type: Sequelize.FLOAT,
        allowNull: false
      },
      presMax: {
        type: Sequelize.FLOAT,
        allowNull: false
      },
      horaPresMax: {
        type: Sequelize.STRING,
        allowNull: false
      },
      presMin: {
        type: Sequelize.FLOAT,
        allowNull: false
      },
      horaPresMin: {
        type: Sequelize.STRING,
        allowNull: false
      },
      hrMedia: {
        type: Sequelize.FLOAT,
        allowNull: false
      },
      hrMax: {
        type: Sequelize.FLOAT,
        allowNull: false
      },
      horaHrMax: {
        type: Sequelize.STRING,
        allowNull: false
      },
      hrMin: {
        type: Sequelize.FLOAT,
        allowNull: false
      },
      horaHrMin: {
        type: Sequelize.STRING,
        allowNull: false
      },
      createdAt: {
        type: Sequelize.DATE,
        allowNull: false
      },
      updatedAt: {
        type: Sequelize.DATE,
        allowNull: false
      },
      deletedAt: {
        type: Sequelize.DATE
      }
    })
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.dropTable('weather')
  }
}
