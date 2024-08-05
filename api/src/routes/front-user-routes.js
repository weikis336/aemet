module.exports = (app) => {

  const router = require('express').Router()
  const controller = require('../controllers/front/user-controller.js')

  router.get('/', controller.findAll)
  router.get('/:id', controller.findOne)

  app.use('/api/front/users', router)

}