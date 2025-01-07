import express, { Router } from 'express'

export abstract class RoutingConfig {
    app: express.Application
    name: string

    constructor(app: express.Application, name: string) {
        this.app = app
        this.name = name
    }

    abstract configureRoutes(): express.Application
}


// export abstract class BaseRouting {
//     protected router: Router

//     constructor(router: Router) {
//         this.router = router
//     }

//     abstract registerRouting(): void
// }