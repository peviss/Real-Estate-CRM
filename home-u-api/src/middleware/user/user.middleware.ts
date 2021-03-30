import { Request, Response, NextFunction, RequestHandler } from 'express'
import { SESSION_SECRET } from '../../config/secrets'
import { USER_ROLES } from '../../config/settings'
import logger from '../../util/logger'
import * as jwt from 'jsonwebtoken'

class UserMiddleware {

    isAuthenticated(req: Request, res: Response, next: NextFunction) {
        try {
            if (!req.headers.authorization) {
                res.sendStatus(401)
                return
            }
            const token = req.headers.authorization.split("Bearer ")[1]
            req.body.user = jwt.verify(token, SESSION_SECRET as string)
            next()
        } catch (error) {
            logger.error(error)
            res.sendStatus(401)
        }
    }

    hasPermission(level: string): RequestHandler {
        return (req: Request, res: Response, next: NextFunction): void => {
            try {
                if (!req.headers.authorization) {
                    res.sendStatus(401);
                    return
                }
                const token = req.headers.authorization.split("Bearer ")[1]
                req.body.user = jwt.verify(token, SESSION_SECRET as string)
                if (
                    USER_ROLES.indexOf(req.body.user.role) >= USER_ROLES.indexOf(level)
                ) {
                    next()
                } else {
                    res.sendStatus(403)
                }
            } catch (error) {
                logger.error(error)
                res.sendStatus(401)
            }
        };
    };


    async validateExistence(req: Request, res: Response, next: NextFunction) {

    }

}

export default new UserMiddleware()



