import { JsonController, Get,HttpCode, OnUndefined, Param, Res, BadRequestError, InternalServerError } from 'routing-controllers'
import { Response } from 'express'
import { myToken } from '../auth/jsonwebtoken/token-validator'
import { tokenError } from '../../errors/token-error'
import { findOne } from '../user/service'
import { InternalError } from '../../errors/internal-server-error'

@JsonController('/suportfy')
export class meController {
    @Get('/me/:token')
    @HttpCode(200)
    @OnUndefined(400)
    async validate(@Param('token') token: string, @Res() response: Response) {
        const myTokenResponse = await myToken(token)
        if (!myTokenResponse) {
            return response.status(400).send(new BadRequestError(tokenError))
        } else {
            try {
                const userID = myToken(token)
                const userInfo = await findOne(userID)
                const reponseUser = {
                    id: userInfo.id,
                    name: userInfo.name,
                    email: userInfo.email,
                    token: userInfo.token
                }
                return reponseUser
            } catch (error) {
                return response.status(500).send(new InternalServerError(InternalError))
            }
        }
    }
}