'use strict'

module.exports = (app) => {
    const indexController = require('./../Controller/indexController')
    const usersController = require('./../Controller/UerController')

    app.route('/').get(indexController.index)
    app.route('/users').get(usersController.users)
}