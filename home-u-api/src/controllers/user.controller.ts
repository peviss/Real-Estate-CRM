import userService from '../services/user/user.service'
import { Request, Response } from 'express'

class UserController {

    async registerUser(req: Request, res: Response) {
        try {
            await userService.create(req.body)
            return res.status(201).send(req.body)
        } catch (error) {
            console.log(`[ERROR] - ${error.message}`)
            return res.status(400).send({ errors: error.message, info: error })
        }
    }

    async loginUser(req: Request, res: Response) {
        try {
            await userService.login(req.body.email, req.body.password)
            return res.status(201).send(req.body)
        } catch (error) {
            console.log(`[ERROR] - ${error.message}`)
            return res.status(400).send({ errors: error.message, info: error })
        }
    }

    async getUsers(req: Request, res: Response) {
        try {
            const parameters = req.query
            console.log('----controller-----')
            console.log(req.query)
            const properties = await userService.list(parameters)
            return res.status(200).send(properties)
        } catch (error) {
            console.log(`[ERROR] - ${error.message}`)
            return res.status(404).send({ errors: error.message, info: error })
        }
    }

    async getUserById(req: Request, res: Response) {
        try {
            const user = await userService.find(req.params.id)
            console.log(`[OK] - User with id: ${req.params.id} found`)
            return res.json(user)

        } catch (error) {
            console.log(`[ERROR] - ${error.message}`)
            return res.status(404).send('not found')

        }
    }

    async updateUserById(req: Request, res: Response) {
        try {
            await userService.update(req.body.id)
            return res.status(204).send('User updated correctly')
        } catch (error) {
            console.log(`[ERROR] - ${error.message}`)
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
            console.log(`[ERROR] - ${error.message}`)
        }
    }

    async deleteUserById(req: Request, res: Response) {
        try {
            await userService.delete(req.params.id)
            return res.status(204).send(`User with id: ${req.params.id} deleted correctly`)
        } catch (error) {
            console.log(`[ERROR] - ${error.message}`)
            return res.status(400).send({ errors: error.message, info: error })
        }
    }
}

export default new UserController()