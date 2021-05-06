import express from 'express'
import { RoutingConfig } from '../routes.config'
import UserController from '../../controllers/user.controller'
import UserMiddleware from '../../middleware/user/user.middleware'

export default class UserRoutes extends RoutingConfig {
  constructor(app: express.Application) {
    super(app, 'UserRoutes')
    this.configureRoutes()
  }

  configureRoutes(): express.Application {

    this.app.route('/users')
      .get(
        UserController.getUsers
      )
    this.app.route('/login')
      .post(
        UserController.loginUser
      )
    this.app.route('/register')
      .post(
        UserController.registerUser
      )
    this.app.route('/admin')
      .get(
        UserMiddleware.isAuthenticated,
        UserController.getUserById
      )



    this.app.route('/user/:id')
      .all()
      .get(UserController.getUserById)
      .put(UserController.updateUserById)
      .patch(UserController.patchUserById)
      .delete(UserController.deleteUserById)

    return this.app

  }
}