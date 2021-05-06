import userService from '../services/user/user.service'
import { Request, Response, NextFunction } from 'express'

class UserController {

    async registerUser(req: Request, res: Response) {
        try {
            await userService.create(req.body)
            return res.status(201).send(req.body)
        } catch (error) {
            return res.status(400).send({ errors: error.message, info: error })
        }
    }

    async loginUser(req: Request, res: Response, next: NextFunction) {
        try {
            await userService.auth(req, res, next)
        } catch (error) {
            res.status(400).send({ errors: error.message, info: error })
        }
    }

    async getUsers(req: Request, res: Response) {
        try {
            const properties = await userService.list(req.query)
            return res.status(200).send(properties)
        } catch (error) {
            return res.status(404).send({ errors: error.message, info: error })
        }
    }

    async getUserById(req: Request, res: Response) {
        try {
            const user = await userService.find(req.params.id)
            return res.json(user)

        } catch (error) {
            return res.status(404).send('not found')

        }
    }

    async updateUserById(req: Request, res: Response) {
        try {
            await userService.update(req.body.id)
            return res.status(204).send('User updated correctly')
        } catch (error) {
            return res.status(404).send({ errors: error.message, info: error })
        }
    }

    async patchUserById(req: Request, res: Response) {
        try {
            const data = {
                id: req.params.id,
                patchData: req.body
            }       
            await userService.patch(data)
            return res.status(204).send({message: 'User patched correctly'})
        } catch (error) {
            return res.status(400).send({ errors: error.message, info: error })
        }
    }

    async deleteUserById(req: Request, res: Response) {
        try {
            await userService.delete(req.params.id)
            return res.status(204).send(`User with id: ${req.params.id} deleted correctly`)
        } catch (error) {
            return res.status(400).send({ errors: error.message, info: error })
        }
    }
}

export default new UserController()