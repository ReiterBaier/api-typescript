import * as jwt from 'jsonwebtoken'
import { User } from '../../entities/user'
import { saveTokenToDB } from './saveTokenToDB'

const options = {
    expiresIn: 60 * 60 * 2
}

export const makeToken = (user: User) => {
    let userID = user.id
    let payload = {
        userID
    }
    let token = jwt.sign(payload, 'suportfy',options);
    saveTokenToDB(userID,token)
    return token
}