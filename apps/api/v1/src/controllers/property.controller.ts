
import propertyService from '../services/property/property.service'
import logger from '../util/logger'
import { Request, Response } from 'express'

class PropertyController {

    async createProperty(req: Request, res: Response) {
        try {
            await propertyService.create(req.body)
            return res.status(201).send(req.body)
        } catch (error) {
            logger.error(error)
            return res.status(400).send({ errors: error.message, info: error })
        }
    }

    async getProperties(req: Request, res: Response) {
        try {
            const parameters = req.query
            console.log('----controller-----')
            console.log(req.query)
            const properties = await propertyService.list(parameters)
            return res.status(200).send(properties)
        } catch (error) {
            logger.error(error)
            return res.status(404).send({ errors: error.message, info: error })
        }
    }

    async getPropertyById(req: Request, res: Response) {
        try {
            const property = await propertyService.find(req.params.id)
            console.log(`[OK] - Property with id: ${req.params.id} found`)
            return res.json(property)

        } catch (error) {
            logger.error(error)
            return res.status(404).send('not found')

        }
    }

    async updatePropertyById(req: Request, res: Response) {
        try {
            await propertyService.update(req.body.id)
            return res.status(204).send('Property updated correctly')
        } catch (error) {
            logger.error(error)
            return res.status(404).send({ errors: error.message, info: error })
        }
    }

    async patchPropertyById(req: Request, res: Response) {
        try {
            const data = {
                id: req.params.id,
                patchData: req.body
            }       
            await propertyService.patch(data)
            return res.status(204).send({message: 'Property patched correctly'})
        } catch (error) {
            logger.error(error)
        }
    }

    async deletePropertyById(req: Request, res: Response) {
        try {
            await propertyService.delete(req.params.id)
            return res.status(204).send(`Property with id: ${req.params.id} deleted correctly`)
        } catch (error) {
            logger.error(error)
            return res.status(400).send({ errors: error.message, info: error })
        }
    }
}

export default new PropertyController()