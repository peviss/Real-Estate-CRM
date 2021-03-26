import express, { Request, Response, NextFunction } from 'express'
import {
    query,
    ValidationChain,
    validationResult
} from 'express-validator'
import { ObjectId } from 'mongodb'
import {
    sanitizePrice,
    sanitizeRent,
    sanitizeAuction,
    sanitizeVacational,
    sanitizeSale,
    sanitizeRooms,
    sanitizeBaths,
    sanitizeCity,
    sanitizeZone
} from './property.sanitizers'
import propertyService from '../../services/property/property.service'


class PropertyMiddleware {

    async validatePropertyExists(req: express.Request, res: express.Response, next: express.NextFunction) {
        ObjectId.isValid(req.params.id) && await propertyService.find(req.params.id)
            ? next() :
            res.status(404).send({ error: `Property ${req.params.userId} not found` })
    }

    async validatePropertyIsUnique(req: express.Request, res: express.Response, next: express.NextFunction) {
        const property = await propertyService.find(req.params.id)
        if (!property) {
            next()
        } else {
            res.status(400).send({ error: `Property ${req.params.id} already exists` })
        }
    }

    async checkParameters(req: express.Request, res: express.Response, next: express.NextFunction) {
        // set validations array 
        const validations: ValidationChain[] = [
            query('type').optional().isAlphanumeric().escape()
                .withMessage('should be alpha'),
            query('rent').optional().isBoolean().escape()
                .withMessage('should be boolean').customSanitizer(() => {
                    sanitizeRent(req)
                }),
            query('sale').optional().isBoolean().escape().withMessage('should be boolean').customSanitizer(() => {
                sanitizeSale(req)
            }),
            query('auction').optional().isBoolean().escape()
                .withMessage('should be boolean').customSanitizer(() => {
                    sanitizeAuction(req)
                }),
            query('vacational').optional().isBoolean().escape()
                .withMessage('should be boolean').customSanitizer(() => {
                    sanitizeVacational(req)
                }),
            query('min_price').optional().isNumeric().escape()
                .withMessage('should be numeric'),
            query('max_price').optional().isNumeric().escape()
                .withMessage('should be numeric').customSanitizer(() => {
                    sanitizePrice(req)
                }),
            query('rooms').optional().isNumeric().escape()
                .withMessage('should be numeric').customSanitizer(() => {
                    sanitizeRooms(req)
                }),
            query('baths').optional().isNumeric().escape()
                .withMessage('should be numeric').customSanitizer(() => {
                    sanitizeBaths(req)
                }),
            query('city').optional().escape()
                .customSanitizer(() => {
                    sanitizeCity(req)
                }),
            query('zone').optional().escape().customSanitizer(() => {
                    sanitizeZone(req)
                }),
        ]
        //run validations
        await Promise.all(validations.map(validation => validation.run(req)));
        console.log('validations')
        const errors = validationResult(req);
        if (errors.isEmpty()) {
            return next();
        }
        return res.status(400).json({ errors: errors.array() });
    }
}

export default new PropertyMiddleware()