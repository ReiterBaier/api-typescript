import * as jwt from 'jsonwebtoken'
import { Request, Response, NextFunction } from 'express'
import { UnauthorizedError } from 'routing-controllers'
import { tokenError } from '../../../errors/token-error'

export function validateToken(request: Request, response: Response, next?: NextFunction): any {
    const token = request.headers.authentication
    try {
        jwt.verify(token, 'suportfy')
        next()
    } catch (error) {
        return response
        .status(401)
        .send(new UnauthorizedError(tokenError))
    }
}

export function myToken(token: string): any {
    try {
        const decodedToken = jwt.verify(token, 'suportfy')
        const userID = decodedToken.userID
        return userID
    } catch (error) {
        return false
    }
}