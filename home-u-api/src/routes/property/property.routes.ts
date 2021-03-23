import express from 'express'
import { RoutingConfig } from '../routes.config'
import PropertyController from '../../controllers/property.controller'
import PropertyMiddleware from '../../middleware/property/property.middleware'

export default class PropertyRoutes extends RoutingConfig {
    constructor(app: express.Application) {
        super(app, 'PropertyRoutes')
        this.configureRoutes()
    }

    configureRoutes(): express.Application {
        this.app.route('/properties')
            //.all(PropertyMiddleware.checkParameters)
            .get(PropertyMiddleware.checkParameters, PropertyController.getProperties)
            .post(PropertyController.createProperty);

        this.app.route('/properties/:id')
            .all(PropertyMiddleware.validatePropertyExists)
            .get(PropertyController.getPropertyById)
            .put(PropertyController.updatePropertyById)
            .patch(PropertyController.patchPropertyById)
            .delete(PropertyController.deletePropertyById)

        return this.app

    }
}













// Alternative version
// export class PropertyRoutes2 extends BaseRouting {
//     constructor(router: Router) {
//         super(router)
//         this.registerRouting()
//     }

//     registerRouting(): void {
//         let controller: PropertyController // = new PropertyController(...params)

//         this.router.get('/properties/', (req: Request, res: Response, next: NextFunction) =>{
//             controller.getProperties(req, res, next)
//         })
//         this.router.get('/property/:id', (req: Request, res: Response, next: NextFunction) => {
//             controller.getPropertyById(req, res, next)
//         })
//         this.router.post('/property/', (req: Request, res: Response, next: NextFunction) =>{
//             controller.postProperty(req, res, next)
//         })

//     }
// }

