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
        type: Sequelize.DATE

      },
      indicativo: {
        type: Sequelize.STRING

      },
      nombre: {
        type: Sequelize.STRING

      },
      provincia: {
        type: Sequelize.STRING

      },
      altitud: {
        type: Sequelize.FLOAT

      },
      tmed: {
        type: Sequelize.FLOAT

      },
      prec: {
        type: Sequelize.STRING

      },
      tmin: {
        type: Sequelize.FLOAT

      },
      tmax: {
        type: Sequelize.FLOAT

      },
      dir: {
        type: Sequelize.STRING

      },
      velmedia: {
        type: Sequelize.FLOAT

      },
      racha: {
        type: Sequelize.FLOAT

      },
      sol: {
        type: Sequelize.FLOAT

      },
      presMax: {
        type: Sequelize.FLOAT

      },
      presMin: {
        type: Sequelize.FLOAT

      },
      hrMedia: {
        type: Sequelize.FLOAT

      },
      hrMax: {
        type: Sequelize.FLOAT

      },
      hrMin: {
        type: Sequelize.FLOAT

      },
      createdAt: {
        type: Sequelize.DATE

      },
      updatedAt: {
        type: Sequelize.DATE

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
